import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { Company } from "../../backend/types";
import { ELEMENTS_PER_PAGE, TRIGGER_MODAL } from "../../lib/company/constants";
import {
  useCompanyContext,
  useCompanyDispatchContext,
} from "../../lib/company/context";
import { GET_ALL_COMPANIES_QUERY, UPDATE_COMPANY_BY_ID } from "../../pages";

import buttons from "../footer/Footer.module.css";
import styles from "./Modal.module.css";

interface Props {
  data: Company;
}

const Modal: React.FC<Props> = ({ data }) => {
  const dispatch = useCompanyDispatchContext();
  const context = useCompanyContext();

  const [updateCompany, { data: updatedData, loading, error }] =
    useMutation(UPDATE_COMPANY_BY_ID);

  const [company, setCompany] = useState<Company>(data);

  const closeModalHandler = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch({
      type: TRIGGER_MODAL,
      payload: { modal: { open: false, data } },
    });
  };

  const saveModalHandler = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const result = await updateCompany({
        variables: {
          input: {
            id: company.id,
            name: company.name,
            city: company.city,
            specialities: company.specialities,
            logo: company.logo,
          },
        },
        refetchQueries: [
          {
            query: GET_ALL_COMPANIES_QUERY,
            variables: {
              input: {
                limit: ELEMENTS_PER_PAGE,
                specialities: context.filter,
                offset: context.page,
                search: context.search,
              },
            },
            fetchPolicy: "cache-first",
          },
        ],
      });

      if (result.data?.updateCompany) {
        dispatch({
          type: TRIGGER_MODAL,
          payload: { modal: { open: false, data: { ...company } } },
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  const changeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setCompany((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className={`${styles.containerOpen}`} data-testid="modal-container-id">
      <div className={styles.wrapper}>
        <div className={styles.header}>Edit user</div>
        <div className={styles.error}>{error}</div>
        <div className={styles.content}>
          <img src="./map.png" alt="" />
          <form action="#" className={styles.form}>
            <div className={styles.control}>
              <label htmlFor="name">Company name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={company?.name}
                onChange={changeHandler}
              />
            </div>

            <div className={styles.control}>
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                name="city"
                value={company?.city}
                onChange={changeHandler}
              />
            </div>
            <div className={styles.control}>
              <label htmlFor="specialities">{data.specialities}</label>
              <input
                type="text"
                id="specialities"
                name="specialities"
                value={company?.specialities}
                onChange={changeHandler}
              />
            </div>
          </form>
        </div>
        <div className={styles.footer}>
          <button className={buttons.primaryButton} onClick={saveModalHandler}>
            Save
          </button>
          <button
            className={buttons.secondaryButton}
            onClick={closeModalHandler}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
