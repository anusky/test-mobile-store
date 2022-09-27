import { Outlet, useRouteLoaderData } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import HomeIcon from "./components/Icons/HomeIcon";
import { ProductContextProvider } from "./context/productContext";
import { PAGE_STRUCTURE } from "./utils/constants";

import { getAlProducts } from "./utils/productManagement";

/* istanbul ignore next */
export const appLoader = async () => {
  return await getAlProducts();
};

/* istanbul ignore next */
export const appHandle = {
  crumb: () => ({ url: "/", content: <HomeIcon /> }),
};

function App() {
  const productInfo = useRouteLoaderData(PAGE_STRUCTURE.home.clientPageId);

  return (
    <ProductContextProvider value={{ list: productInfo }}>
      <Header />
      <div className="py-8" data-testid="app-container-component">
        <Outlet />
      </div>
    </ProductContextProvider>
  );
}

export default App;
