import App, { Container } from "next/app";
import Page from "components/Page";
import { motion, AnimatePresence } from "framer-motion";

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <Page>
        <Component {...pageProps} router={router} />
      </Page>
    );
  }
}
