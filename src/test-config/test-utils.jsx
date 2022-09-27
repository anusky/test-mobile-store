import { render } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import PropTypes from "prop-types";

import productInfo from "./__fixtures__/product.json";
import productList from "./__fixtures__/productList.json";

const customRender = (ui, options = {}) => {
  const { routerInitialIndex = 0 } = options;

  const AllTheProviders = ({ children }) => {
    const routes = [
      {
        path: "/",
        element: children,
        loader: () => productList,
        handle: {
          crumb: () => ({ url: "/", content: "home route" }),
        },
        children: [
          {
            path: "/:productId",
            element: children,
            id: "product-page",
            loader: () => productInfo,
            handle: {
              crumb: () => ({ url: "/", content: "product route" }),
            },
          },
        ],
      },
    ];

    const router = createMemoryRouter(routes, {
      initialEntries: ["/", "/123"],
      initialIndex: routerInitialIndex,
    });
    return <RouterProvider router={router}>{children}</RouterProvider>;
  };

  AllTheProviders.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return render(ui, { wrapper: AllTheProviders, ...options });
};

export * from "@testing-library/react";
export { customRender as render };
