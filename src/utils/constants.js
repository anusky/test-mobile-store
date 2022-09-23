export const LOCAL_STORAGE_TYPES = {
  expiration: "expiration",
  productData: "productdata",
  origin: "origin",
};

export const DATA_ORIGIN_TYPES = {
  cache: "cache",
  api: "api",
};

export const EXPIRATION_TIME_LIMIT = 5_000;

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
};
