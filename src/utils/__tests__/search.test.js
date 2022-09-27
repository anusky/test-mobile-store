const {
  filterProductListBySearchInput,
  getSearchBarMessage,
} = require("../search");

const testList = [
  { model: "Iconia A1-830", brand: "Acer" },
  { model: "Iconia Tab 10", brand: "Acer" },
  { model: "Flash", brand: "Alcatel" },
];
describe("Utils Search filterProductListBySearchInput Behaviour", () => {
  it("should return an empty array if no correct info has been sent", () => {
    expect(filterProductListBySearchInput()).toEqual([]);
  });
  it("should return initial list if no inputValue has been provided ", () => {
    expect(filterProductListBySearchInput("", testList)).toStrictEqual(
      testList
    );
  });
  it("should return two results for `Acer`", () => {
    expect(filterProductListBySearchInput("Acer", testList)).toStrictEqual([
      { model: "Iconia A1-830", brand: "Acer" },
      { model: "Iconia Tab 10", brand: "Acer" },
    ]);
  });

  it("should return same testList for `a`", () => {
    expect(filterProductListBySearchInput("a", testList)).toStrictEqual(
      testList
    );
  });

  it("should return exactly first result for `a1 830`", () => {
    expect(filterProductListBySearchInput("a1 830", testList)).toStrictEqual([
      testList[0],
    ]);
  });
});

describe("Utils Search getSearchBarMessage Behaviour", () => {
  it("should return an empty string when no input was sent", () => {
    expect(getSearchBarMessage()).toBe("");
  });
  it("should return `No results found` when results array is empty", () => {
    expect(getSearchBarMessage("input test", [])).toBe("No results found");
  });
  it("should return `Found X result(s)` depending on results length", () => {
    expect(getSearchBarMessage("input test", [1, 2, 3])).toBe(
      "Found 3 result(s)"
    );
  });
});
