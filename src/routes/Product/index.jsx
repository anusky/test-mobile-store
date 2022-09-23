import { useRouteLoaderData } from "react-router-dom";
import { PAGE_STRUCTURE } from "src/utils/constants";
import { getProductById } from "src/utils/productManagement";

export const productLoader = ({ params }) => {
  return getProductById(params.productId);
};

const Product = () => {
  const productInfo = useRouteLoaderData(PAGE_STRUCTURE.product.clientPageId);

  return (
    <div data-testid="product-page-component">{`Product Id: ${productInfo.brand}`}</div>
  );
};

export default Product;
