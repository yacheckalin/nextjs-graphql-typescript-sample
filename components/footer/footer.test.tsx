import { render, screen } from "@testing-library/react";

import Footer from "./container";

test("<Footer> component renders properly", () => {
  render(<Footer />);

  const wrapper = screen.getByTestId("footer-id");
  expect(wrapper).toBeInTheDocument();
});
