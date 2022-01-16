import React from "react";
import { ELEMENTS_PER_PAGE, PAGGINATE } from "../../lib/company/constants";
import {
  useCompanyContext,
  useCompanyDispatchContext,
} from "../../lib/company/context";

import styles from "./Footer.module.css";

interface Props {
  callback: (args: any) => any;
}

const Footer: React.FC<Props> = ({ callback }): JSX.Element => {
  const state = useCompanyContext();
  const dispatch = useCompanyDispatchContext();

  const handleClick = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // scroll to top
    Promise.resolve()
      .then(() => window.scrollTo({ top: 0, behavior: "smooth" }))
      .then(() =>
        callback({
          variables: {
            input: {
              offset: (state.page + 1) * ELEMENTS_PER_PAGE - ELEMENTS_PER_PAGE,
              specialities: state.filter,
            },
          },
        })
      )
      .then(() =>
        dispatch({ type: PAGGINATE, payload: { page: state.page + 1 } })
      );
  };

  return (
    <footer className={styles.container} data-testid="footer-id">
      <button
        className={`${styles.primaryButton}`}
        // disabled={true}
        onClick={handleClick}
      >
        Next
      </button>
    </footer>
  );
};
export default Footer;
