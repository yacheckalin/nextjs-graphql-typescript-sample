import React from "react";

import styles from "./Footer.module.css";

const Footer: React.FC = (): JSX.Element => (
  <footer className={styles.container}>
    <button className={`${styles.primaryButton}`}>Load More</button>
  </footer>
);
export default Footer;
