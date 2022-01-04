import React from "react";
import { Company } from "../../backend/types";

interface Props {
  company: Company;
}

const CompanyListItem: React.FC<Props> = ({ company }): JSX.Element => (
  <li>{company.name}</li>
);

export default CompanyListItem;
