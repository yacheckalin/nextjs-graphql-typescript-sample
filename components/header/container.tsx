import React from "react";

import styles from "./Header.module.css";

const Header: React.FC = (): JSX.Element => (
  <header className={styles.container}>
    <h2>Company list</h2>
    <div className={styles.search}>
      <input type="text" placeholder="Search..." />
    </div>
  </header>
);

export default Header;
