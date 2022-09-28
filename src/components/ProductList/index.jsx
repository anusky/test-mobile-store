import { string, arrayOf, shape } from "prop-types";
import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";

const THRESHOLD_ELEMENTS = 12;
const ProductList = ({ list }) => {
  const [currentList, setCurrentlist] = useState(
    list.slice(0, THRESHOLD_ELEMENTS)
  );
  const currentListLength = useRef(THRESHOLD_ELEMENTS);
  const firstUpdate = useRef(true);
  const bottomElement = useRef(null);
  const containerElement = useRef(null);

  useEffect(() => {
    let callback = (entries, _observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !firstUpdate.current) {
          const newLength = currentListLength.current + THRESHOLD_ELEMENTS;
          currentListLength.current =
            newLength > list.length ? list.length : newLength;
          setCurrentlist(list.slice(0, currentListLength.current));
        } else {
          firstUpdate.current = false;
        }
      });
      /**
       * Stop obersvers when we have rendered all tuuhe list elements
       */
      currentListLength.current === list.length &&
        _observer.unobserve(bottomElement.current);
    };
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(callback, options);
    /**
     * Prevent from creating an observer when there are not enough elements to list
     */
    if (list.length > 12) {
      observer.observe(bottomElement.current);
    } else {
      observer.unobserve(bottomElement.current);
    }
  }, [list]);

  const itemList = useMemo(() => {
    return currentList.map((product, index) => {
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
  }, [currentList]);
  return (
    <div
      ref={containerElement}
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 justify-center"
      data-testid="productlist-component"
    >
      {itemList}
      <div ref={bottomElement}></div>
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
