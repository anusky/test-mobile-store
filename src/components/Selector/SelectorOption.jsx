import PropTypes from "prop-types";

const SelectorOption = ({ label, value }) => {
  return <option value={value}>{label}</option>;
};

export default SelectorOption;
SelectorOption.propTypes = {
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
