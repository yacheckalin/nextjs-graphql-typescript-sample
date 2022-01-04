import { QueryResult, OperationVariables } from "@apollo/client";
import React from "react";
import { CompaniesQuery } from "../../pages";
import CompanyList from "../company-list";

import styles from "./Main.module.css";

interface Props {
  result: QueryResult<CompaniesQuery, OperationVariables>;
}

const Main: React.FC<Props> = ({ result }): JSX.Element => {
  const data = result.data?.companies;

  return (
    <main className={styles.container}>
      {result.loading && !data ? (
        <p>Loading ...</p>
      ) : result.error ? (
        <p>An error occured ...</p>
      ) : data && data.length > 0 ? (
        <CompanyList companies={data} />
      ) : (
        <p> You donn't have companies yet!</p>
      )}
    </main>
  );
};

export default Main;
