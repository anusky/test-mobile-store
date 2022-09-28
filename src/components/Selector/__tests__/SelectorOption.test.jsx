import { act } from "react-dom/test-utils";
import { render, screen } from "src/test-config/test-utils";

import SelectorOption from "../SelectorOption";

describe("SelectorOption coverage", () => {
  const props = { label: "test name", value: 123 };

  it("Should render correctly", async () => {
    render(<SelectorOption {...props} />);

    expect(await screen.findByRole("option")).toBeInTheDocument();
  });

  it("matches snapshot ", async () => {
    let container;
    await act(() => {
      container = render(<SelectorOption {...props} />);
    });
    expect(container.asFragment()).toMatchSnapshot();
  });
});
