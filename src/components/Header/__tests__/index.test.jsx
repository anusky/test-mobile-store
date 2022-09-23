import { act } from "react-dom/test-utils";
import { render, screen } from "src/test-config/test-utils";
import Header from "..";

describe("Header coverage", () => {
  it("renders correctly", async () => {
    render(<Header />);

    expect(await screen.findByRole("banner")).toBeInTheDocument();
  });

  xit("matches snapshot", async () => {
    let container;
    await act(() => {
      container = render(<Header />);
    });
    expect(container.asFragment()).toMatchSnapshot();
  });
});
