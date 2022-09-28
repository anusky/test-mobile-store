import { useEffect, useRef, useState } from "react";
import { useProductContext } from "src/context/productContext";

const Cart = () => {
  const { cart } = useProductContext();
  const currentCart = useRef(cart);
  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    if (currentCart.current.length !== cart.length) {
      setUpdated(true);
    }
  }, [cart]);

  const handleOnUserCheck = () => {
    setUpdated(false);
  };

  return (
    <span
      data-testid="cart-component"
      className="inline-flex place-items-center gap-x-2 relative"
    >
      ({cart.length})
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
      </svg>
      {updated && (
        <span
          className="flex h-3 w-3 absolute top-1 -right-2"
          onMouseOver={handleOnUserCheck}
          onClick={handleOnUserCheck}
        >
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
        </span>
      )}
    </span>
  );
};

export default Cart;
