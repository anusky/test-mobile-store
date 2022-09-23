import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App, { appLoader } from "./App";
import reportWebVitals from "./reportWebVitals";

import Home from "./routes/Home";
import Product, { productLoader } from "./routes/Product";
import { PAGE_STRUCTURE } from "./utils/constants";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<App />}
      loader={appLoader}
      id={PAGE_STRUCTURE.home.clientPageId}
    >
      <Route index element={<Home />} />
      <Route
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
