import React from "react";
import { Company } from "../../backend/types";
import Image from "next/image";

import styles from "./CompanyListItem.module.css";
import {
  useCompanyContext,
  useCompanyDispatchContext,
} from "../../lib/company/context";
import { TRIGGER_MODAL } from "../../lib/company/constants";

interface Props {
  company: Company;
}

const CompanyListItem: React.FC<Props> = ({ company }): JSX.Element => {
  const state = useCompanyContext();
  const dispatch = useCompanyDispatchContext();

  const clickHandler = () => {
    dispatch({
      type: TRIGGER_MODAL,
      payload: { modal: { open: true, data: { ...company } } },
    });
  };

  return (
    <div
      className={styles.container}
      data-testid="company-list-id"
      onClick={clickHandler}
    >
      <Image
        alt=""
        src={company.logo}
        width={168}
        height={168}
        className={styles.logo}
      />
      <div>
        <p className={styles.name}>
          {company.name} : [{company.id}]
        </p>
        <p className={styles.details}>{company.specialities}</p>
        <p className={styles.details}>{company.city}</p>
      </div>
    </div>
  );
};

export default CompanyListItem;
