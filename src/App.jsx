import { Outlet, useRouteLoaderData } from "react-router-dom";

import "./App.css";
import { ProductContextProvider } from "./context/productContext";
import { PAGE_STRUCTURE } from "./utils/constants";

import { getAlProducts } from "./utils/productManagement";

export const appLoader = async () => {
  return await getAlProducts();
};

function App() {
  const productInfo = useRouteLoaderData(PAGE_STRUCTURE.home.clientPageId);

  return (
    <ProductContextProvider value={{ list: productInfo }}>
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

        <Outlet />
      </div>
    </ProductContextProvider>
  );
}

export default App;
