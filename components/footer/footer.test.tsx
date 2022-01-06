import { render, screen } from "@testing-library/react";
import { ApolloWrapper } from "../company-list-item/company-list-item.test";

import Footer from "./container";

test("<Footer> component renders properly", () => {
  const callback = jest.fn();
  render(
    <ApolloWrapper>
      <Footer callback={callback} />
    </ApolloWrapper>
  );

  const wrapper = screen.getByTestId("footer-id");
  expect(wrapper).toBeInTheDocument();
});
