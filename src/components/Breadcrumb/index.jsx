import { useLocation, useMatches } from "react-router-dom";
import BreadcrumbItem from "./BreadcrumbItem";

const Breadcrumb = () => {
  const location = useLocation();
  const matches = useMatches();

  const crumbs = matches
    .filter((match) => Boolean(match.handle?.crumb))
    .map((match) => match.handle.crumb(match.data));

  /**
   * We don't render any Breadcrumb when we are at home page
   */
  return location.pathname === "/" ? null : (
    <nav>
      <ol className="inline-flex gap-x-1 place-items-center">
        {crumbs.map((crumb, index) => (
          <BreadcrumbItem
            key={index}
            crumb={crumb}
            isLast={index === crumbs.length - 1}
          />
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
