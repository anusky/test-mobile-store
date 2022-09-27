import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import { render, screen, waitFor } from "src/test-config/test-utils";
import SearchBar from "..";

describe("SearchBar coverage", () => {
  it("Should render correctly with search role", async () => {
    render(<SearchBar />);

    expect(await screen.findByRole("searchbox")).toBeInTheDocument();
  });

  it("Should render correctly with search role", async () => {
    const handleOnUpdateProductList = jest.fn();
    render(
      <SearchBar
        initialProductList={[
          { model: "test product 1", brand: "test brand" },
          { model: "test product 2", brand: "test brand" },
        ]}
        handleOnUpdateProductList={handleOnUpdateProductList}
      />
    );
    const input = await screen.findByRole("searchbox");

    await userEvent.type(input, "test brand");
    await waitFor(() => expect(handleOnUpdateProductList).toHaveBeenCalled());
  });

  it("When input value matches results a message informing about how many results were found should be shown", async () => {
    const handleOnUpdateProductList = jest.fn();
    render(
      <SearchBar
        initialProductList={[
          { model: "test product 1", brand: "test brand" },
          { model: "test product 2", brand: "test brand" },
        ]}
        handleOnUpdateProductList={handleOnUpdateProductList}
      />
    );
    const input = await screen.findByRole("searchbox");

    await userEvent.type(input, "test brand");

    await waitFor(async () =>
      expect(await screen.findByText("Found 2 result(s)")).toBeInTheDocument()
    );
  });

  it("When input value matches no results a message informing about it should be shown", async () => {
    const handleOnUpdateProductList = jest.fn();
    render(
      <SearchBar
        initialProductList={[
          { model: "test product 1", brand: "test brand" },
          { model: "test product 2", brand: "test brand" },
        ]}
        handleOnUpdateProductList={handleOnUpdateProductList}
      />
    );
    const input = await screen.findByRole("searchbox");

    await userEvent.type(input, "nothing");

    await waitFor(async () =>
      expect(await screen.findByText("No results found")).toBeInTheDocument()
    );
  });

  it("When input value is empty then no total search results should be shown", async () => {
    const handleOnUpdateProductList = jest.fn();
    render(
      <SearchBar
        initialProductList={[
          { model: "test product 1", brand: "test brand" },
          { model: "test product 2", brand: "test brand" },
        ]}
        handleOnUpdateProductList={handleOnUpdateProductList}
      />
    );
    const input = await screen.findByRole("searchbox");

    await userEvent.type(input, "a{Backspace}");

    await waitFor(async () =>
      expect(
        await screen.findByLabelText("Total search results")
      ).toBeEmptyDOMElement()
    );
  });

  it("matches snapshot with Home page route", async () => {
    let container;
    const handleOnUpdateProductList = jest.fn();
    await act(() => {
      container = render(
        <SearchBar
          initialProductList={[
            { model: "test product 1", brand: "test brand" },
            { model: "test product 2", brand: "test brand" },
          ]}
          handleOnUpdateProductList={handleOnUpdateProductList}
        />
      );
    });
    expect(container.asFragment()).toMatchSnapshot();
  });
});
