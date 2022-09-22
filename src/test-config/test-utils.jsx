import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import PropTypes from "prop-types";

const AllTheProviders = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};
AllTheProviders.propTypes = {
  children: PropTypes.node.isRequired,
};
const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
