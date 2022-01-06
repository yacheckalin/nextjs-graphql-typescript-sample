import { render, screen } from "@testing-library/react";
import { CompanySpecialities } from "../../backend/types";
import CompanyContextProvider, {
  CompanyDispatchContext,
} from "../../lib/company/context";

import CompanyListItem from "./container";

export const ApolloWrapper: React.FC = ({ children }) => (
  <CompanyContextProvider>{children}</CompanyContextProvider>
);

test("<CompanyList> component renders properly", () => {
  const mockedCompany = {
    id: 1,
    name: "Name",
    logo: "http://placeimg.com/640/480",
    specialities: CompanySpecialities.plumbing,
    city: "New York",
  };

  render(
    <ApolloWrapper>
      <CompanyListItem company={mockedCompany} />
    </ApolloWrapper>
  );

  const wrapper = screen.getByTestId("company-list-id");
  expect(wrapper).toBeInTheDocument();
});
