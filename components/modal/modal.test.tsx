import { render, screen } from "@testing-library/react";
import { CompanySpecialities } from "../../backend/types";
import { ApolloWrapper } from "../company-list-item/company-list-item.test";
import { MockedProvider } from "@apollo/client/testing";
import Modal from "./container";

test("<Modal> component renders properly", () => {
  const mockedCompany = {
    id: 1,
    name: "Some company name",
    city: "Some city",
    logo: "./some_logo.png",
    specialities: CompanySpecialities.plumbing,
  };

  // const callback = jest.fn();
  render(
    <MockedProvider>
      <ApolloWrapper>
        <Modal data={mockedCompany} />
      </ApolloWrapper>
    </MockedProvider>
  );

  const wrapper = screen.getByTestId("modal-container-id");
  expect(wrapper).toBeInTheDocument();
});
