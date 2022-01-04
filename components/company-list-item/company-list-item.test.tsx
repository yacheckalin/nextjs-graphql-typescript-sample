import { render, screen } from "@testing-library/react";
import { CompanySpecialities } from "../../backend/types";

import CompanyListItem from "./container";

test("<CompanyList> component renders properly", () => {
  const mockedCompany = {
    id: 1,
    name: "Name",
    logo: "http://placeimg.com/640/480",
    specialities: CompanySpecialities.plumbing,
    city: "New York",
  };
  render(<CompanyListItem company={mockedCompany} />);

  const wrapper = screen.getByTestId("company-list-id");
  expect(wrapper).toBeInTheDocument();
});
