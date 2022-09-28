import { json, Outlet, useRouteLoaderData } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import HomeIcon from "./components/Icons/HomeIcon";
import { ProductContextProvider } from "./context/productContext";
import { getCart } from "./utils/cartManagement";
import { PAGE_STRUCTURE } from "./utils/constants";

import { getAlProducts } from "./utils/productManagement";

/* istanbul ignore next */
export const appLoader = async () => {
  const prodRes = await getAlProducts();
  const cart = getCart();

  if (prodRes?.status) {
    throw new Response("Api error", { status: prodRes?.status });
  }
  return json({ productList: prodRes, cart }, { status: 200 });
};

/* istanbul ignore next */
export const appHandle = {
  crumb: () => ({ url: "/", content: <HomeIcon /> }),
};

function App() {
  const { productList, cart } = useRouteLoaderData(
    PAGE_STRUCTURE.home.clientPageId
  );

  return (
    <ProductContextProvider value={{ list: productList, cart }}>
      <Header />
      <div className="my-24 lg:my-32" data-testid="app-container-component">
        <Outlet />
      </div>
    </ProductContextProvider>
  );
}

export default App;
