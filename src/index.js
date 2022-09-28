import ReactDOM from "react-dom/client";
import PropTypes from "prop-types";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import App, { appHandle, appLoader } from "./App";
import Product, {
  productAction,
  productHandle,
  productLoader,
} from "./routes/Product";
import Home from "./routes/Home";

import reportWebVitals from "./reportWebVitals";

import { PAGE_STRUCTURE } from "./utils/constants";

const ErrorLoader = ({ message }) => {
  return <div className="">{message}</div>;
};
ErrorLoader.propTypes = {
  message: PropTypes.string,
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path={PAGE_STRUCTURE.home.clientPath}
      element={<App />}
      loader={appLoader}
      id={PAGE_STRUCTURE.home.clientPageId}
      handle={appHandle}
      errorElement={<ErrorLoader message="App" />}
    >
      <Route
        index
        element={<Home />}
        errorElement={<ErrorLoader message="Hime" />}
      />
      <Route
        handle={productHandle}
        path={PAGE_STRUCTURE.product.clientPath}
        element={<Product />}
        loader={productLoader}
        action={productAction}
        id={PAGE_STRUCTURE.product.clientPageId}
        errorElement={<ErrorLoader message="Product" />}
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
