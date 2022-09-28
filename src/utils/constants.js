export const LOCAL_STORAGE_TYPES = {
  expiration: "expiration",
  productData: "productdata",
  origin: "origin",
  cart: "cart",
};

export const DATA_ORIGIN_TYPES = {
  cache: "cache",
  api: "api",
};

export const EXPIRATION_TIME_LIMIT = 60_000 * 60; // 1 hour = 360000 ms

const API_URL = "https://front-test-api.herokuapp.com/api";

export const PAGE_STRUCTURE = {
  home: {
    clientPath: "/",
    clientApiLoader: `${API_URL}/product`,
    clientPageId: "product-list-page",
  },
  product: {
    clientPath: "/:productId",
    clientApiLoader: `${API_URL}/product/:id`,
    clientPageId: "product-page",
  },
  cart: {
    clientPath: "/cart",
    clientApiLoader: `${API_URL}/cart`,
    clientPageId: "cart-page",
  },
};

export const PRODUCT_ATTRIBUTES = {
  id: "id",
  colorCode: "colorCode",
  storageCode: "storageCode",
};
