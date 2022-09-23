import { act, render, screen } from "src/test-config/test-utils";
import Product from "..";

describe("Product page coverage", () => {
  it("Product page renders properly", async () => {
    render(<Product />, { routerInitialIndex: 1 });
    expect(await screen.findByTestId("product-page-component")).toBeTruthy();
  });

  it("matches snapshot", async () => {
    let asFragment;
    await act(() => {
      const component = render(<Product />, { routerInitialIndex: 1 });

      asFragment = component.asFragment;
    });

    expect(asFragment()).toMatchSnapshot();
  });
});
