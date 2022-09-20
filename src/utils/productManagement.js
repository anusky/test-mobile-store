import {
  API_URL,
  DATA_ORIGIN_TYPES,
  EXPIRATION_TIME_LIMIT,
  LOCAL_STORAGE_TYPES,
} from "./constants";

const getDataExpirationDate = () =>
  +window?.localStorage.getItem(LOCAL_STORAGE_TYPES.expiration);

const setDataExpirationDate = () =>
  window?.localStorage.setItem(
    LOCAL_STORAGE_TYPES.expiration,
    Date.now() + EXPIRATION_TIME_LIMIT
  );
const setProductData = (data) =>
  window?.localStorage.setItem(
    LOCAL_STORAGE_TYPES.productData,
    JSON.stringify(data)
  );
const getProductData = () =>
  JSON.parse(window?.localStorage.getItem(LOCAL_STORAGE_TYPES.productData));

const setDataOrigin = (origin) =>
  window?.localStorage.setItem(LOCAL_STORAGE_TYPES.origin, origin);

export const getAlProducts = async () => {
  const expires = getDataExpirationDate();
  if (!expires || expires < Date.now() - EXPIRATION_TIME_LIMIT) {
    const productData = await fetch(API_URL)
      .then((res) => res.json())
      .then((res) => {
        setProductData(res);
        setDataExpirationDate();

        setDataOrigin(DATA_ORIGIN_TYPES.api);
        return res;
      });

    return productData;
  } else {
    const productData = getProductData();

    setDataOrigin(DATA_ORIGIN_TYPES.cache);

    return productData;
  }
};
