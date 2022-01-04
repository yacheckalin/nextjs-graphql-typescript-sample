import React from "react";
import { Company } from "../../backend/types";
import CompanyListItem from "../company-list-item/container";

interface Props {
  companies: Company[];
}

const CompanyList: React.FC<Props> = ({ companies }): JSX.Element => (
  <ul>
    {companies.map((item) => (
      <CompanyListItem company={item} key={item.id} />
    ))}
  </ul>
);

export default CompanyList;
