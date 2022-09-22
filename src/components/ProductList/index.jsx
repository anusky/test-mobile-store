import { string, arrayOf, shape } from "prop-types";
import { useMemo } from "react";
import { Link } from "react-router-dom";
const ProductList = ({ list }) => {
  const itemList = useMemo(() => {
    return list.map((product, index) => {
      return (
        <Link
          key={index}
          to={`/${product.id}`}
          className="grid gap-y-4 gap-x-4 justify-center hover:bg-slate-50 rounded-lg py-4 px-3"
        >
          <div className="object-cover">
            <img
              src={product.imgUrl}
              alt={`${product.brand}, ${product.model}`}
            />
          </div>
          <div className="grid">
            <p>
              {product.brand}, {product.model}
            </p>
            <p className="font-bold">{product.price}€</p>
          </div>
        </Link>
      );
    });
  }, [list]);
  return (
    <div
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 justify-center"
      data-testid="productlist-component"
    >
      {itemList}
    </div>
  );
};

export default ProductList;
ProductList.propTypes = {
  list: arrayOf(
    shape({
      id: string,
      brand: string,
      model: string,
      price: string,
      imgUrl: string,
    })
  ),
};
