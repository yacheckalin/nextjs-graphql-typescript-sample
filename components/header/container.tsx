import React from "react";
import Search from "../search";

import styles from "./Header.module.css";

interface Props {
  searchCallback: () => void;
}

const Header: React.FC<Props> = ({ searchCallback }): JSX.Element => (
  <header className={styles.container}>
    <h2>Company list</h2>
    <Search callback={searchCallback} />
  </header>
);

export default Header;
