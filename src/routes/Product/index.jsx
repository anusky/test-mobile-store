import { useParams } from "react-router-dom";

const Product = () => {
  const { productId } = useParams();
  return (
    <div data-testid="product-page-component">{`Product Id: ${productId}`}</div>
  );
};

export default Product;
