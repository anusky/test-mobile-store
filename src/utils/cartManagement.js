import { LOCAL_STORAGE_TYPES, PAGE_STRUCTURE } from "./constants";

const setCart = (data) =>
  window?.localStorage.setItem(LOCAL_STORAGE_TYPES.cart, JSON.stringify(data));

export const getCart = () =>
  JSON.parse(window?.localStorage.getItem(LOCAL_STORAGE_TYPES.cart)) || [];

export const addProductToCart = async (productInfo) => {
  return await fetch(PAGE_STRUCTURE.cart.clientApiLoader, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productInfo),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.count) {
        const currentCart = getCart();
        setCart([...currentCart, productInfo]);
        return { productInfo };
      }
    })
    .catch((err) => {
      console.error("Error adding product to cart ", err);
      return { error: true };
    });
};
