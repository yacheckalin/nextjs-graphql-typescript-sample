import { render, screen } from "@testing-library/react";

import Search from "./container";

test("<Search> component renders properly", () => {
  const callback = jest.fn();
  render(<Search callback={callback} />);

  const wrapper = screen.getByTestId("search-id");
  expect(wrapper).toBeInTheDocument();
});
