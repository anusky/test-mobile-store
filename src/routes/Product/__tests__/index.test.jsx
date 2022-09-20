import { render, screen } from "@testing-library/react";
import Product from "..";

test("Product page renders properly", () => {
  render(<Product />);
  expect(screen.getByTestId("product-page-component")).toBeInTheDocument();
});
