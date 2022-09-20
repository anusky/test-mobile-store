import { useParams } from "react-router-dom";

const Product = () => {
  const { productId } = useParams();
  return <div>{`Product Id: ${productId}`}</div>;
};

export default Product;
