import { createContext, useContext } from "react";
import PropTypes from "prop-types";

export const ProductContext = createContext({
  list: [],
});

export const ProductContextProvider = ({ children, value }) => {
  return (
    <>
      <ProductContext.Provider value={value}>
        {children}
      </ProductContext.Provider>
    </>
  );
};
ProductContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.shape({
    list: PropTypes.array,
  }),
};

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error(
      "useProductContext must be used within a ProductContextProvider"
    );
  }
  return context;
};
