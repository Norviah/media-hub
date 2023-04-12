import { Component } from "react";

import type { AppProps } from "next/app";
import "@/styles/globals.css";

export default class App extends Component<AppProps> {
  public render(): JSX.Element {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}
