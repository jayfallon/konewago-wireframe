import Link from "next/link";
import routes from "../routes.json";

const CTAButton = () => {
  const { campsite } = routes;
  return (
    <div className="button--cta">
      <Link href={campsite.url}>
        <a rel={campsite.rel} target={campsite.target}>
          {campsite.text}
        </a>
      </Link>
    </div>
  );
};

export { CTAButton };
