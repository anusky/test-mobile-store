import { act } from "react-dom/test-utils";
import { render, screen } from "src/test-config/test-utils";
import Breadcrumb from "..";

describe("Breadcrumb coverage", () => {
  it("renders correctly", async () => {
    render(<Breadcrumb />);

    expect(await screen.findByRole("navigation")).toBeInTheDocument();
  });

  xit("matches snapshot", async () => {
    let container;
    await act(() => {
      container = render(<Breadcrumb />);
    });
    expect(container.asFragment()).toMatchSnapshot();
  });
});
