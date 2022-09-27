import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import { render, screen, waitFor } from "src/test-config/test-utils";
import Home from "..";

describe("Home coverage", () => {
  it("Home renders properly", async () => {
    render(<Home />);
    expect(
      await screen.findByTestId("home-page-component")
    ).toBeInTheDocument();
  });

  it("matches snapshot", async () => {
    let container;
    await act(() => {
      container = render(<Home />);
    });
    expect(container.asFragment()).toMatchSnapshot();
  });
});
