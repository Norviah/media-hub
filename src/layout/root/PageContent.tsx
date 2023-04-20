import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

import { GlobalStyles } from '@/theme/global';
import { Padding } from './Padding';
import { Header } from '@/components/header';
import { Navigation } from '@/components/nav';
import { Header as SimpleHeader } from '@/layout/root/Header';

import type { AppProps } from 'next/app';
import type { NextRouter } from 'next/router';
import type { Theme } from '@mui/material';

export function PageContent(props: {
  props: AppProps;
  router: NextRouter;
  theme: Theme;
}): JSX.Element {
  const { Component, pageProps, router } = props.props;

  const style: boolean = !(
    (Component as typeof Component & { noAppbar?: boolean }).noAppbar ??
    (router.route.startsWith('/auth/') || router.route === '/404')
  );

  if (style) {
    return (
      <Box sx={{ display: 'flex', minHeight: '100%', overflow: 'hidden' }}>
        <CssBaseline />
        <GlobalStyles />
        <Header route={props.router.route} />
        <Navigation />
        <Padding>
          <Component {...pageProps} />
        </Padding>
      </Box>
    );
  } else {
    return (
      <>
        <CssBaseline />
        <GlobalStyles />
        <SimpleHeader />
        <Component {...pageProps} />
      </>
    );
  }
}
