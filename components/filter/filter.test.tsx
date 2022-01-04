import { render, screen } from "@testing-library/react";
import CompanyContextProvider from "../../lib/company/context";

import Filter from "./container";

test("<Filter> component renders properly", () => {
  const callback = jest.fn();
  render(
    <CompanyContextProvider>
      <Filter callback={callback} />
    </CompanyContextProvider>
  );

  const wrapper = screen.getByTestId("filter-id");
  expect(wrapper).toBeInTheDocument();
});
