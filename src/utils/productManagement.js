import {
  DATA_ORIGIN_TYPES,
  EXPIRATION_TIME_LIMIT,
  LOCAL_STORAGE_TYPES,
  PAGE_STRUCTURE,
} from "./constants";

/**
 * @private
 * @function getDataExpirationDate get the expiration date from localStorage
 * @returns expiration date from localStorage
 */
const getDataExpirationDate = () =>
  +window?.localStorage.getItem(LOCAL_STORAGE_TYPES.expiration);

/**
 * @private
 * @function setDataExpirationDate sets the expiration date on localStorage
 */
const setDataExpirationDate = () =>
  window?.localStorage.setItem(
    LOCAL_STORAGE_TYPES.expiration,
    Date.now() + EXPIRATION_TIME_LIMIT
  );

/**
 * @private
 * @function  etProductData saves in localStorage the current product information
 * @param {object} data product information
 */
const setProductData = (data) =>
  window?.localStorage.setItem(
    LOCAL_STORAGE_TYPES.productData,
    JSON.stringify(data)
  );

/**
 * @private
 * @function getProductData
 * @returns product information from localStorage
 */
const getProductData = () =>
  JSON.parse(window?.localStorage.getItem(LOCAL_STORAGE_TYPES.productData));

/**
 * @private
 * @function setDataOrigin sets if data was retrieved from api or localStorage
 * @param {string} origin
 */
const setDataOrigin = (origin) =>
  window?.localStorage.setItem(LOCAL_STORAGE_TYPES.origin, origin);

/**
 * @function getAlProducts
 * @description retrieves product list from api or from localStorage. It depends on if expiration time was reached or not.
 * @returns list of products
 */
export const getAlProducts = async () => {
  const expires = getDataExpirationDate();
  if (!expires || expires < Date.now() - EXPIRATION_TIME_LIMIT) {
    const productData = await fetch(PAGE_STRUCTURE.home.clientApiLoader)
      .then((res) => res.json())
      .then((res) => {
        setProductData(res);
        setDataExpirationDate();

        setDataOrigin(DATA_ORIGIN_TYPES.api);
        return res;
      })
      .catch(() => ({
        status: 500,
      }));

    return productData;
  } else {
    const productData = getProductData();

    setDataOrigin(DATA_ORIGIN_TYPES.cache);

    return productData;
  }
};

/**
 * @private
 * @function getProductByIdUrl get the correct product api url
 * @param {string} id
 * @returns product url
 */
const getProductByIdUrl = (id) =>
  PAGE_STRUCTURE.product.clientApiLoader.replace(":id", id);

/**
 * @function getProductById
 * @param {string} id
 * @description retrieves product information from api using its ID
 * @returns product info
 */
export const getProductById = async (id) => {
  return await fetch(getProductByIdUrl(id))
    .then((res) => res.json())
    .then((res) => {
      if (res.code === 0) {
        return { status: 404 };
      }
      return res;
    })
    .catch(() => ({
      status: 400,
    }));
};
