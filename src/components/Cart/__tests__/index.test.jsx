import { act } from "react-dom/test-utils";
import { render, screen } from "src/test-config/test-utils";
import Cart from "..";

describe("Cart coverage", () => {
  it("Should render correctly", async () => {
    render(<Cart />);

    expect(await screen.findByTestId("cart-component")).toBeInTheDocument();
  });

  it("matches snapshot ", async () => {
    let container;
    await act(() => {
      container = render(<Cart />);
    });
    expect(container.asFragment()).toMatchSnapshot();
  });
});
