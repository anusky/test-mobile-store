import { render, screen, waitFor } from "src/test-config/test-utils";
import ProductList from "..";
import productList from "src/test-config/__fixtures__/productList.json";
import { act } from "react-dom/test-utils";

describe("ProductList coverage", () => {
  it("ProductList renders properly", async () => {
    render(<ProductList list={productList} />);
    expect(
      await screen.findByTestId("productlist-component")
    ).toBeInTheDocument();
  });

  it("matches snapshot", async () => {
    let container;
    await act(() => {
      container = render(<ProductList list={productList} />);
    });
    expect(container.asFragment()).toMatchSnapshot();
  });

  it("ProductList should render 3 items from fixtures", async () => {
    render(<ProductList list={productList} />);

    await waitFor(() => {
      const totalLinks = screen.getAllByRole("link").length;
      expect(totalLinks).toBe(3);
    });
  });

  it("ProductList product link should contain `brand, model` format", async () => {
    // Check made with first fixture product element
    render(<ProductList list={productList} />);
    expect(
      await screen.findByRole("link", { name: /Acer, Iconia Talk S/i })
    ).toBeInTheDocument();
  });

  it("ProductList product link should point to '/:id' page", async () => {
    // Check made with first fixture product element
    render(<ProductList list={productList} />);

    await waitFor(() => {
      const links = screen.getAllByRole("link")[0];
      expect(links).toHaveAttribute("href", "/ZmGrkLRPXOTpxsU4jjAcv");
    });
  });
});
