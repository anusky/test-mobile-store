import { act } from "react-dom/test-utils";
import { render, screen } from "src/test-config/test-utils";
import Selector from "..";

describe("Selector coverage", () => {
  const props = {
    name: "selector-name",
    title: "Selector Test",
    options: [{ name: "test name", code: 123 }],
  };

  it("Should render correctly", async () => {
    render(<Selector {...props} />);

    expect(await screen.findByRole("combobox")).toBeInTheDocument();
  });

  it("matches snapshot ", async () => {
    let container;
    await act(() => {
      container = render(<Selector {...props} />);
    });
    expect(container.asFragment()).toMatchSnapshot();
  });
});
