import { Link } from "components/base/Link";
import { ANCHORS } from "utils";

export const NAV_ITEMS = [
  {
    title: "Покриття",
    route: `#${ANCHORS.coverageMap}`,
  },
  {
    title: "Ціни",
    route: `#${ANCHORS.priceComparison}`,
  },
];

export const Navigation = () => (
  <nav className="flex gap-4 md:gap-8 align-center items-center">
    {NAV_ITEMS.map(({ title, route }) => (
      <Link key={title} href={route}>
        {title}
      </Link>
    ))}
  </nav>
);
