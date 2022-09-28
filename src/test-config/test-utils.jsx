import "./__mocks__/intersectionObserverMock";

import { render } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import PropTypes from "prop-types";

import productInfo from "./__fixtures__/product.json";
import productList from "./__fixtures__/productList.json";
import cart from "./__fixtures__/cart.json";
import { ProductContextProvider } from "src/context/productContext";
import { PAGE_STRUCTURE } from "src/utils/constants";

const customRender = (ui, options = {}) => {
  const { routerInitialIndex = 0 } = options;

  const AllTheProviders = ({ children }) => {
    const routes = [
      {
        path: "/",
        element: children,
        id: PAGE_STRUCTURE.home.clientPageId,
        loader: () => ({
          productList,
          cart,
        }),
        handle: {
          crumb: () => ({ url: "/", content: "home route" }),
        },
        children: [
          {
            path: "/:productId",
            element: children,
            id: PAGE_STRUCTURE.product.clientPageId,
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
    return (
      <RouterProvider router={router}>
        <ProductContextProvider
          value={{
            list: productList,
            cart: cart,
          }}
        >
          {children}
        </ProductContextProvider>
      </RouterProvider>
    );
  };

  AllTheProviders.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return render(ui, { wrapper: AllTheProviders, ...options });
};

export * from "@testing-library/react";
export { customRender as render };
