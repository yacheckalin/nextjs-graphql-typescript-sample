import React from "react";

import styles from "./Footer.module.css";

const Footer: React.FC = (): JSX.Element => (
  <footer className={styles.container} data-testid="footer-id">
    <button className={`${styles.primaryButton}`} disabled={true}>
      Load More
    </button>
  </footer>
);
export default Footer;
