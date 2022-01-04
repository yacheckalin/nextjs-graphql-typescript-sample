import { render, screen } from "@testing-library/react";

import Layout from "./container";

test("renders layout", () => {
  render(<Layout />);

  const wrapper = screen.getByTestId("layout-id");
  expect(wrapper).toBeInTheDocument();
});
