import styled from '@emotion/styled';

import { Component } from 'react';
import { GlobalStyles } from '@/theme/globalStyles';
import { CssBaseline, ThemeProvider, StyledEngineProvider } from '@mui/material';
import { ThemeContext } from '@/hooks/useTheme';

import { Navigation } from '@/components/nav';
import { Header } from '@/components/header/Header';

import * as themes from '@/theme/themes';

import type { AppProps } from 'next/app';
import type { ThemePresets, Themes } from '@/types/Themes';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import '@/styles/globals.css';

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const StyledRoot = styled('div')({
  display: 'flex',
  minHeight: '100%',
  overflow: 'hidden',
});

const Main = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
  paddingTop: APP_BAR_MOBILE + 24,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('lg')]: {
    paddingTop: APP_BAR_DESKTOP + 24,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

/**
 * The state of the application.
 *
 * In React, a component's state is an object that holds information regarding
 * the component. The information stored in the state of a component can change
 * over time and affect the rendering of the component, as well as the behavior
 * of the component. Note that whenever a component's state changes, the
 * component will re-render.
 *
 * For our application, we only need to store the active theme of the
 * application within the state of the component. This will allow us to change
 * the theme of the application from anywhere in the application.
 * @see https://reactjs.org/docs/state-and-lifecycle.html
 */
interface AppState {
  theme: ThemePresets;
  open: boolean;
}

export default class App extends Component<AppProps, AppState> {
  public state: AppState = {
    theme: 'dark',
    open: false,
  };

  /**
   * Executed after the component is mounted.
   *
   * `componentDidMount` is immediately called once the component is mounted
   * into the DOM, meaning once the component is rendered. This method is
   * typically used for performing actions that require the component to be
   * fully mounted, such as fetching data from an API, initializing a
   * third-party library, etc.
   *
   * The method is called only once during the lifecycle of the component, after
   * the `render` method has been called for the first time, meaning that any
   * updates to the component's state or props will cause the component to
   * re-render, but will not cause another call to `componentDidMount`.
   *
   * As for our application, we will implement this method to change the theme
   * of the application to the user's preferred theme, if set within their
   * browser's local storage.
   * @see https://reactjs.org/docs/react-component.html#componentdidmount
   */
  public componentDidMount(): void {
    // In order to set the application's theme, we'll first need to determine
    // what the user's preferred theme. We'll attempt to read their preferred
    // theme from their browser's local storage.

    // Once we have the theme, we'll set the state of the component to reflect
    // the theme, if the theme differs from the current theme.
    const theme = (window?.localStorage.getItem('theme') as ThemePresets) ?? themes.DEFAULT;

    if (this.state.theme !== theme) {
      this.setState({ theme });
    }
  }

  /**
   * Sets the theme of the application.
   *
   * `setTheme` changes the component's state to the provided theme, which will
   * cause the component to re-render, allowing the application to reflect the
   * new theme.
   *
   * `setTheme` is provided as a callback to the theme's context provider.
   * Context providers allows components to provide data through the tree
   * without having to pass properties down manually at every level.
   *
   * Using the context provider, we can provide this method to components that
   * use the `useTheme` hook, allowing them to change the theme of the
   * application from anywhere in the application.
   * @param preset The theme preset to set.
   * @see https://reactjs.org/docs/context.html
   */
  public setTheme(preset: ThemePresets): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem('theme', preset);
    }

    this.setState({ theme: preset });
  }

  public render(): JSX.Element {
    const { Component, pageProps } = this.props;

    // In order to set the application's theme, we'll first need to determine
    // the actual theme that we should use. We'll use the `theme` property of
    // the component's state to determine the theme, and if the theme is set to
    // `system`, we'll grab their system's set theme.
    const theme: Themes =
      this.state.theme === 'system' ? themes.systemColorScheme() : this.state.theme;

    return (
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme === 'dark' ? themes.DARK : themes.LIGHT}>
          <ThemeContext.Provider
            value={{ theme: this.state.theme, setTheme: this.setTheme.bind(this) }}
          >
            <CssBaseline />
            <GlobalStyles />
            <StyledRoot>
              <Header onOpenNav={() => this.setState({ open: true })} />

              <Navigation
                openNav={this.state.open}
                onCloseNav={() => this.setState({ open: false })}
              />

              <Main>
                <Component {...pageProps} />
              </Main>
            </StyledRoot>
          </ThemeContext.Provider>
        </ThemeProvider>
      </StyledEngineProvider>
    );
  }
}
