import React from "react";
import { Company } from "../../backend/types";
import Image from "next/image";

import styles from "./CompanyListItem.module.css";

interface Props {
  company: Company;
}

const CompanyListItem: React.FC<Props> = ({ company }): JSX.Element => (
  <div className={styles.container} data-testid="company-list-id">
    <Image
      alt=""
      src={company.logo}
      width={168}
      height={168}
      className={styles.logo}
    />
    <div>
      <p className={styles.name}>{company.name}</p>
      <p className={styles.details}>{company.specialities}</p>
      <p className={styles.details}>{company.city}</p>
    </div>
  </div>
);

export default CompanyListItem;
