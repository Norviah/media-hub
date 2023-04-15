import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Head from 'next/head';

import { ThemeContext } from '@/hooks/useTheme';
import { PageContent } from '@/layout/root';
import { StyledComponents } from '@/theme/notistack';
import { systemColorScheme } from '@/util/theme';
import { StyledEngineProvider, ThemeProvider } from '@mui/material';
import { SnackbarProvider, closeSnackbar } from 'notistack';
import { Component } from 'react';

import * as themes from '@/theme/themes';

import type { ThemePresets, Themes } from '@/types/theme/Themes';
import type { Theme } from '@mui/material';
import type { AppProps } from 'next/app';

import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';
import '@fontsource/outfit/300.css';
import '@fontsource/outfit/400.css';
import '@fontsource/outfit/500.css';
import '@fontsource/outfit/700.css';

import '@/styles/globals.css';

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
  public state: AppState = { theme: themes.DEFAULT, open: false };

  /**
   * Executed after the component is mounted.
   *
   * `componentDidMount` is immediately called once the component is mounted
   * into the DOM, meaning once the component is rendered. This method is
   * typically used for performing actions that require the component to be
   * fully mounted, such as fetching data from an API, initializing a
   * third-party library, etc.
   *
   * We'll implement this method to ensure the application's theme is set to
   * the user's preferred theme, if set within their browser's local storage.
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
   * This will change the component's state to the provided theme, which will
   * force the component to re-render, allowing the application to reflect the
   * new theme.
   * @param preset The theme preset to set.
   */
  public setTheme(preset: ThemePresets): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem('theme', preset);
    }

    this.setState({ theme: preset });
  }

  public render(): JSX.Element {
    // In order to set the application's theme, we'll first need to determine
    // the actual theme that we should use. We'll use the `theme` property of
    // the component's state to determine the theme, and if the theme is set to
    // `system`, we'll grab their system's set theme.
    const preset: Themes = this.state.theme === 'system' ? systemColorScheme() : this.state.theme;

    const theme: Theme = preset === 'dark' ? themes.DARK : themes.LIGHT;

    return (
      <>
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
          <link rel="manifest" href="/favicon/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/favicon/safari-pinned-tab.svg"
            color={theme.palette.primary.main}
          />
          <meta name="msapplication-TileColor" content={theme.palette.background.default} />
          <meta name="theme-color" content={theme.palette.background.default} />
        </Head>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <ThemeContext.Provider
              value={{ theme: this.state.theme, setTheme: this.setTheme.bind(this) }}
            >
              <SnackbarProvider
                maxSnack={3}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                preventDuplicate
                action={(key) => (
                  <IconButton
                    size="small"
                    onClick={() => {
                      closeSnackbar(key);
                    }}
                  >
                    <CloseIcon fontSize="small" />
                  </IconButton>
                )}
                Components={StyledComponents}
              >
                <PageContent
                  props={this.props}
                  router={this.props.router}
                  theme={theme}
                  drawer={{
                    open: this.state.open,
                    set: (open: boolean) => this.setState({ open }),
                  }}
                />
              </SnackbarProvider>
            </ThemeContext.Provider>
          </ThemeProvider>
        </StyledEngineProvider>
      </>
    );
  }
}
