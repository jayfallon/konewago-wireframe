import App, { Container } from "next/app";
import Page from "components/Page";
import { motion, AnimatePresence } from "framer-motion";
import { Auth0Provider } from "context/auth0.context";

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
      <Auth0Provider>
        <Page>
          <Component {...pageProps} router={router} />
        </Page>
      </Auth0Provider>
    );
  }
}
