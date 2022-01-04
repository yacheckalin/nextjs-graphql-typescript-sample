import { render, screen } from "@testing-library/react";

import Header from "./container";

test("<Header> component renders properly", () => {
  const callback = jest.fn();
  render(<Header searchCallback={callback} />);

  const wrapper = screen.getByTestId("header-id");
  expect(wrapper).toBeInTheDocument();
});
