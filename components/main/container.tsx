import { QueryResult, OperationVariables } from "@apollo/client";
import React from "react";
import { CompaniesQuery } from "../../pages";
import CompanyList from "../company-list";

import styles from "./Main.module.css";

interface Props {
  data: any;
}

const Main: React.FC<Props> = ({ data }): JSX.Element => {
  return (
    <main className={styles.container} data-testid="main-id" aria-busy={false}>
      <CompanyList companies={data.companies} />
    </main>
  );
};

export default Main;
