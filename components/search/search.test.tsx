import { render, screen } from "@testing-library/react";
import CompanyContextProvider from "../../lib/company/context";

import Search from "./container";

test("<Search> component renders properly", () => {
  const callback = jest.fn();
  render(
    <CompanyContextProvider>
      <Search callback={callback} />
    </CompanyContextProvider>
  );

  const wrapper = screen.getByTestId("search-id");
  expect(wrapper).toBeInTheDocument();
});
