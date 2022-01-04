import React from "react";
import { Company } from "../../backend/types";

interface Props {
  companies: Company[];
}

const CompanyList: React.FC<Props> = ({ companies }): JSX.Element => (
  <ul>
    {companies.map((item) => (
      <li key={item.id}>{item.name}</li>
    ))}
  </ul>
);

export default CompanyList;
