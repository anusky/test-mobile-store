import { act } from "react-dom/test-utils";
import { render, screen } from "src/test-config/test-utils";
import Breadcrumb from "..";

describe("Breadcrumb coverage", () => {
  it("Should render navigation when the router points to /productId", async () => {
    render(<Breadcrumb />, { routerInitialIndex: 1 });

    expect(await screen.findByRole("navigation")).toBeInTheDocument();
  });

  it("Should render {home route > product route} navigation when the router points to /productId", async () => {
    render(<Breadcrumb />, { routerInitialIndex: 1 });

    const totalListItems = await screen.findAllByRole("listitem");
    expect(totalListItems.length).toBe(3);
    expect(await screen.findByText(/home route/i)).toBeInTheDocument();
    expect(await screen.findByText(/product route/i)).toBeInTheDocument();
  });

  it("Should not render any navigation on home route - default one", async () => {
    await act(() => {
      render(<Breadcrumb />);
    });
    expect(screen.queryByRole("navigation")).not.toBeInTheDocument();
  });

  it("matches snapshot with Home page route", async () => {
    let container;
    await act(() => {
      container = render(<Breadcrumb />);
    });
    expect(container.asFragment()).toMatchSnapshot();
  });
  it("matches snapshot with Product page route", async () => {
    let container;
    await act(() => {
      container = render(<Breadcrumb />, { routerInitialIndex: 1 });
    });
    expect(container.asFragment()).toMatchSnapshot();
  });
});
