import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";

import storage from "local-storage-fallback";
import GlobalStyle from "./Global";
import Header from "./Header";
import Footer from "./Footer";
import UseTheme from "./UseTheme";
// import ToggleMode from "./ToggleMode";
// import ToggleMagnify from "./ToggleMagnify";
import { DefaultSeo } from "next-seo";
import { motion } from "framer-motion";

import SEO from "../next-seo.config";

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`;

const Page = (props) => {
  const theme = UseTheme();
  // const [theme, setTheme] = useState(getInitialTheme);

  return (
    <motion.div
      initial="pageInitial"
      animate="pageAnimate"
      variants={{
        pageInital: {
          opacity: 0,
        },
        pageAnimate: {
          opacity: 1,
        },
      }}>
      <DefaultSeo {...SEO} />
      <ThemeProvider theme={theme}>
        <StyledPage>
          <GlobalStyle />
          <a name="pageTop" id="pageTop" />
          <a href="#mainContent" className="content--skip">
            Skip to Content
          </a>
          <Header />
          {props.children}
          <Footer />
        </StyledPage>
      </ThemeProvider>
    </motion.div>
  );
};

export default Page;
