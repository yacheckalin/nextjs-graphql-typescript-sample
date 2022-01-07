import { render, screen } from "@testing-library/react";
import CompanyContextProvider from "../../lib/company/context";

import CompanyAdress from "./container";

export const ApolloWrapper: React.FC = ({ children }) => (
  <CompanyContextProvider>{children}</CompanyContextProvider>
);

test("<CompanyAddress> component renders properly", () => {
  const mockProps = {
    lat: -55.034,
    lng: 55.034,
  };
  render(
    <ApolloWrapper>
      <CompanyAdress {...mockProps} />
    </ApolloWrapper>
  );

  const wrapper = screen.getByTestId("company-address-id");
  expect(wrapper).toBeInTheDocument();
});
