import React from "react";
import { Company } from "../../backend/types";
import CompanyListItem from "../company-list-item";

interface Props {
  companies: Company[];
}

const CompanyList: React.FC<Props> = ({ companies }): JSX.Element => (
  <>
    {companies.map((item) => (
      <CompanyListItem company={item} key={item._id} />
    ))}
  </>
);

export default CompanyList;
