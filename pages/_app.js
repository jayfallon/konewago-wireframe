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
      <AnimatePresence>
        <motion.div
          key={router.route}
          initial="pageInitial"
          animate="pageAnimate"
          exit="pageExit"
          variants={{
            pageInital: {
              opacity: 0,
            },
            pageAnimate: {
              opacity: 1,
            },
            pageExit: {
              opacity: 0,
            },
          }}>
          <Page>
            <Component {...pageProps} router={router} />
          </Page>
        </motion.div>
      </AnimatePresence>
    );
  }
}
