import { act } from "react-dom/test-utils";
import { render, screen } from "src/test-config/test-utils";
import App from "../App";

describe("App coverage", () => {
  it("renders learn react link", async () => {
    render(<App />);

    expect(await screen.findByText(/learn react/i)).toBeInTheDocument();
  });

  it("matches snapshot", async () => {
    let container;
    await act(() => {
      container = render(<App />);
    });
    expect(container.asFragment()).toMatchSnapshot();
  });
});
