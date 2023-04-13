import { Component } from 'react';
import { GlobalStyles } from '@/theme/globalStyles';
import { CssBaseline, ThemeProvider, StyledEngineProvider } from '@mui/material';

import * as themes from '@/theme/themes';

import type { Themes } from '@/types/Themes';
import type { AppProps } from 'next/app';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import '@/styles/globals.css';

interface AppState {
  theme: Themes;
}

export default class App extends Component<AppProps, AppState> {
  public state: AppState = {
    theme: 'dark',
  };

  public render(): JSX.Element {
    const { Component, pageProps } = this.props;

    return (
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={this.state.theme === 'dark' ? themes.DARK : themes.LIGHT}>
          <CssBaseline />
          <GlobalStyles />
          <Component {...pageProps} />
        </ThemeProvider>
      </StyledEngineProvider>
    );
  }
}
