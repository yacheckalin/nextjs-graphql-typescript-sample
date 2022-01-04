import { render, screen } from "@testing-library/react";

import Main from "./container";

test("<Main> component renders properly", () => {
  render(<Main data={{ companies: [] }} />);

  const wrapper = screen.getByTestId("main-id");
  expect(wrapper).toBeInTheDocument();
});
