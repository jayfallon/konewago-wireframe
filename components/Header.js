import Router from "next/router";
import Link from "next/link";
import NProgress from "nprogress";
import { WebsiteLinks } from "./NavLinks";
import { CTAButton } from "./CallToAction";
import HeaderStyles from "./styled-components/HeaderStyles";

import routes from "../routes.json";

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};
Router.onRouteChangeError = () => {
  NProgress.done();
};

export default function Header() {
  const { website, campsite } = routes;
  return (
    <HeaderStyles>
      <h1>
        <Link href="/">
          <a>Camp Konewago</a>
        </Link>
      </h1>
      <nav>
        <WebsiteLinks />
        <CTAButton />
      </nav>
    </HeaderStyles>
  );
}
