import { useContext } from "react";
import Router from "next/router";
import Link from "next/link";
import NProgress from "nprogress";
import { WebsiteLinks } from "./NavLinks";
import { CTAButton } from "./CallToAction";
import HeaderStyles from "./styled-components/HeaderStyles";
import { Auth0Context } from "context/auth0.context";
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
  const auth0 = useContext(Auth0Context);

  console.log(auth0);
  return (
    <HeaderStyles>
      <button onClick={() => auth0.login()}>Login</button>
      <Link href="/api/login">
        <a>login</a>
      </Link>
      <Link href="/api/logout">
        <a>logout</a>
      </Link>

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
