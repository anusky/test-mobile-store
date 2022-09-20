import { render, screen } from "@testing-library/react";
import Home from "..";

test("Home renders properly", () => {
  render(<Home />);
  expect(screen.getByTestId("home-page-component")).toBeInTheDocument();
});
