import { LOCAL_STORAGE_TYPES, PAGE_STRUCTURE } from "./constants";

/**
 * @private
 * @function setCart
 * @param {object} data current cart
 */
const setCart = (data) =>
  window?.localStorage.setItem(LOCAL_STORAGE_TYPES.cart, JSON.stringify(data));

/**
 * @function getCart retrieve cart from localStorage
 * @returns current cart list
 */
export const getCart = () =>
  JSON.parse(window?.localStorage.getItem(LOCAL_STORAGE_TYPES.cart)) || [];

/**
 * @function addProductToCart add a product in the cart and stores it in localStorage
 * @param {object} productInfo
 * @returns the product if everything worked or error otherwise
 */
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
