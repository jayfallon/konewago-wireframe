import Router from "next/router";
import Link from "next/link";
import NProgress from "nprogress";
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
  const { website } = routes;
  return (
    <HeaderStyles>
      <h1>
        <Link href="/">
          <a>Camp Konewago</a>
        </Link>
      </h1>
      <nav>
        <ul>
          {website.map((item, idx) => {
            return (
              <li key={idx}>
                <Link href={item.url}>
                  <a>{item.text}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </HeaderStyles>
  );
}
