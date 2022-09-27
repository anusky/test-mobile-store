import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import App, { appHandle, appLoader } from "./App";
import Product, { productHandle, productLoader } from "./routes/Product";
import Home from "./routes/Home";

import reportWebVitals from "./reportWebVitals";

import { PAGE_STRUCTURE } from "./utils/constants";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<App />}
      loader={appLoader}
      id={PAGE_STRUCTURE.home.clientPageId}
      handle={appHandle}
    >
      <Route index element={<Home />} />
      <Route
        handle={productHandle}
        path={PAGE_STRUCTURE.product.clientPath}
        element={<Product />}
        loader={productLoader}
        id={PAGE_STRUCTURE.product.clientPageId}
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
