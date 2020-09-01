import React from "react";
import Link from "next/link";
import NextLink from "./Link";
import routes from "routes.json";

const WebsiteLinks = () => {
  const { website } = routes;
  return (
    <ul>
      {website.map((item, idx) => {
        return (
          <li key={idx}>
            <NextLink href={item.url}>
              <a>{item.text}</a>
            </NextLink>
          </li>
        );
      })}
    </ul>
  );
};
const SocialLinks = () => {
  const { social } = routes;
  return (
    <ul>
      {social.map((item, idx) => {
        return (
          <li key={idx}>
            <Link href={item.url}>
              <a target={item.target} rel={item.rel}>
                {item.text}
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
const ResumeLinks = () => {
  const { resume } = routes;
  return (
    <ul>
      {resume.map((item, idx) => {
        return (
          <li key={idx}>
            <Link href={item.url}>
              <a target={item.target} rel={item.rel}>
                {item.text}
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export { ResumeLinks, WebsiteLinks, SocialLinks };
