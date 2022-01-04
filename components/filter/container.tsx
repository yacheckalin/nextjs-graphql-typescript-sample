import React, { useState } from "react";
import { CompanySpecialities } from "../../backend/types";
import { TRIGGER_FILTER, TRIGGER_SEARCH } from "../../lib/company/constants";
import { useCompanyDispatchContext } from "../../lib/company/context";

import styles from "./Filter.module.css";

interface Props {
  callback: (args: any) => void;
}

const Filter: React.FC<Props> = ({ callback }): JSX.Element => {
  const dispatch = useCompanyDispatchContext();
  const [currentFilters, setCurrentFilters] = useState<string[]>([]);

  //TODO: This part could be changed for dynamic fetching from DB
  const filters = Object.keys(CompanySpecialities);

  const handleClick = (e: React.FormEvent<HTMLInputElement>) => {
    const name = e.currentTarget.name;

    let arr = [...currentFilters];
    if (arr.includes(name)) {
      arr = arr.filter((item) => item != name);
    } else {
      arr.push(name);
    }

    setCurrentFilters(arr);

    dispatch({
      type: TRIGGER_FILTER,
      payload: { filter: [...arr] },
    });
    callback({ variables: { input: { specialities: [...arr] } } });
  };

  return (
    <div className={styles.container} data-testid="filter-id">
      {filters.map((item, index) => (
        <div key={index} className={styles.item}>
          <label htmlFor={`filter-${item}-${index}`}>{item}</label>
          <input
            type="checkbox"
            id={`filter-${item}-${index}`}
            name={item}
            onClick={handleClick}
          />
        </div>
      ))}
    </div>
  );
};

export default Filter;
