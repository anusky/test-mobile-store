const { isEmpty } = require("..");

describe("Utils isEmpty Behaviour", () => {
  test("isEmpty works with object", () => {
    expect(isEmpty({})).toBe(true);
  });
  test("isEmpty works with string", () => {
    expect(isEmpty("")).toBe(true);
  });
  test("isEmpty works with undefined values", () => {
    expect(isEmpty()).toBe(true);
  });
  test("isEmpty works with empty arrays", () => {
    expect(isEmpty([])).toBe(true);
  });
  test("isEmpty works with null value", () => {
    expect(isEmpty(null)).toBe(true);
  });
});
