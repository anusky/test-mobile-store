import { render, screen } from "src/test-config/test-utils";
import ProductList from "..";
import productList from "./__fixtures__/productList.json";

test("ProductList renders properly", () => {
  render(<ProductList list={productList} />);
  expect(screen.getByTestId("productlist-component")).toBeInTheDocument();
});

test("ProductList should render 3 items from fixtures", () => {
  render(<ProductList list={productList} />);
  expect(screen.getAllByRole("link").length).toBe(3);
});

test("ProductList product link should contain `brand, model` format", () => {
  // Check made with first fixture product element
  render(<ProductList list={productList} />);
  expect(
    screen.getByRole("link", { name: /Acer, Iconia Talk S/i })
  ).toBeInTheDocument();
});

test("ProductList product link should point to '/:id' page", () => {
  // Check made with first fixture product element
  render(<ProductList list={productList} />);
  expect(screen.getAllByRole("link")[0]).toHaveAttribute(
    "href",
    "/ZmGrkLRPXOTpxsU4jjAcv"
  );
});
