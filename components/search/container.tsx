import React, { useState } from "react";
import debounce from "lodash.debounce";

import styles from "./Search.module.css";
import { DEBOUNCE_SEARCH_VALUE } from "../../lib/constants";

interface Props {
  callback: (args: any) => void;
}

const Search: React.FC<Props> = ({ callback }): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchTerm(e.currentTarget.value);
    const debounceRequest = debounce(
      (search) => callback({ variables: { input: { search } } }),
      DEBOUNCE_SEARCH_VALUE
    );
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
