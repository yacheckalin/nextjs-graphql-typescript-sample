import React, { useState } from "react";
import debounce from "lodash.debounce";

import styles from "./Search.module.css";
import { DEBOUNCE_SEARCH_VALUE } from "../../lib/constants";
import { useCompanyDispatchContext } from "../../lib/company/context";
import { TRIGGER_SEARCH } from "../../lib/company/constants";

interface Props {
  callback: (args: any) => void;
}

const Search: React.FC<Props> = ({ callback }): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useCompanyDispatchContext();

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchTerm(e.currentTarget.value);
    const debounceRequest = debounce((search) => {
      dispatch({
        type: TRIGGER_SEARCH,
        payload: { search: searchTerm },
      });
      callback({ variables: { input: { search } } });
    }, DEBOUNCE_SEARCH_VALUE);
    debounceRequest(e.currentTarget.value);
  };

  return (
    <div className={styles.search} data-testid="search-id">
      <input
        type="text"
        placeholder="Search..."
        onChange={handleChange}
        value={searchTerm}
      />
    </div>
  );
};

export default Search;
