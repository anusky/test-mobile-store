import { act } from "react-dom/test-utils";
import { render, screen } from "src/test-config/test-utils";

import BreadcrumbItem from "../BreadcrumbItem";

describe("BreadcrumbItem coverage", () => {
  it("renders correctly", async () => {
    render(
      <BreadcrumbItem
        crumb={{
          content: "test text",
          url: "/",
        }}
        isLast={false}
      />
    );
    expect(await screen.findByText("test text")).toBeInTheDocument();
  });

  it("Should render two listitem when it is not the last item", async () => {
    render(
      <BreadcrumbItem
        crumb={{
          content: "test text",
          url: "/",
        }}
        isLast={false}
      />
    );

    const totalListItems = await screen.findAllByRole("listitem");
    expect(totalListItems.length).toBe(2);
  });
  it("Should render a single listitem when it is the last item", async () => {
    render(
      <BreadcrumbItem
        crumb={{
          content: "test text",
        }}
        isLast={true}
      />
    );

    const totalListItems = await screen.findAllByRole("listitem");
    expect(totalListItems.length).toBe(1);
  });

  it("snapshot for BreadcrumbItem isLast is true", async () => {
    let container;
    await act(() => {
      container = render(
        <BreadcrumbItem
          crumb={{
            content: "test text",
          }}
          isLast={true}
        />
      );
    });
    expect(container.asFragment()).toMatchSnapshot();
  });
  it("snapshot for BreadcrumbItem when isLast is false", async () => {
    let container;
    await act(() => {
      container = render(
        <BreadcrumbItem
          crumb={{
            content: "test text",
            url: "/",
          }}
          isLast={false}
        />
      );
    });
    expect(container.asFragment()).toMatchSnapshot();
  });
});
