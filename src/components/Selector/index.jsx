import PropTypes from "prop-types";
import SelectorOption from "./SelectorOption";

const Selector = ({ name, title, options = [] }) => {
  return (
    <div className="inline-flex gap-x-4 relative">
      <label>{title}</label>
      <select name={name}>
        {options.map((el, index) => (
          <SelectorOption key={index} value={el.code} label={el.name} />
        ))}
      </select>
    </div>
  );
};

export default Selector;
Selector.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      code: PropTypes.number,
    })
  ),
};
