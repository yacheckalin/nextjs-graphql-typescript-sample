import { render, screen } from "@testing-library/react";
import CompanyContextProvider from "../../lib/company/context";

import Header from "./container";

test("<Header> component renders properly", () => {
  const callback = jest.fn();
  render(
    <CompanyContextProvider>
      <Header searchCallback={callback} />
    </CompanyContextProvider>
  );

  const wrapper = screen.getByTestId("header-id");
  expect(wrapper).toBeInTheDocument();
});
