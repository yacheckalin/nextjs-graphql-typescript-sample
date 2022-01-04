import React from "react";
import { Company } from "../../backend/types";
import CompanyListItem from "../company-list-item";

import style from "./CompanyList.module.css";

interface Props {
  companies: Company[];
}

const CompanyList: React.FC<Props> = ({ companies }): JSX.Element => (
  <>
    {companies.map((item) => (
      <CompanyListItem company={item} key={item.id} />
    ))}
  </>
);

export default CompanyList;
