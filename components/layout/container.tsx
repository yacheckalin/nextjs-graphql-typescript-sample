import React from "react";
import styles from "./Layout.module.css";

const Layout: React.FC = ({ children }): JSX.Element => (
  <div className={styles.container} data-testid="layout-id">
    {children}
  </div>
);

export default Layout;
