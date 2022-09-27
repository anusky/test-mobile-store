import ChevronRight from "../Icons/ChevronRight";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BreadcrumbItem = ({ crumb, isLast }) => (
  <>
    <li>
      {isLast ? (
        <span className="breadcrumb-item breadcrumb-item--last">
          {crumb.content}
        </span>
      ) : (
        <Link to={crumb?.url}>{crumb?.content}</Link>
      )}
    </li>
    {!isLast && (
      <li>
        <ChevronRight />
      </li>
    )}
  </>
);

export default BreadcrumbItem;
BreadcrumbItem.propTypes = {
  crumb: PropTypes.shape({
    url: PropTypes.string,
    content: PropTypes.node,
  }),
  isLast: PropTypes.bool.isRequired,
};
