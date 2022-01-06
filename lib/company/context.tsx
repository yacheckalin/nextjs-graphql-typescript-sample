import React, { createContext, useContext, useReducer } from "react";
import { Company } from "../../backend/types";
import contextReducers, { Actions } from "./reducers";

export interface CompanyStateValueI {
  filter?: string[];
  page: number;
  search?: string;
  modal: {
    open: boolean;
    data: Company | null;
  };
}
export const companyStateValue = {
  filter: [],
  page: 1,
  search: "",
  modal: {
    open: false,
    data: null,
  },
};

export const CompanyStateContext =
  createContext<CompanyStateValueI>(companyStateValue);
export const CompanyDispatchContext = createContext<
  React.Dispatch<Actions> | undefined
>(undefined);

export const useCompanyContext = () => {
  const context = useContext(CompanyStateContext);

  if (!context) {
    throw new Error(
      "useCompanyContext should be used withtin a CompanyContextProvider"
    );
  }
  return context;
};

export const useCompanyDispatchContext = () => {
  const context = useContext(CompanyDispatchContext);
  if (!context) {
    throw new Error(
      "useCompanyDispatchContext shoudl be used withing a CompanyDispatchContextProvider"
    );
  }
  return context;
};

const CompanyContextProvider: React.FC = ({ children }): JSX.Element => {
  const [state, dispatch] = useReducer(contextReducers, companyStateValue);

  return (
    <CompanyStateContext.Provider value={state}>
      <CompanyDispatchContext.Provider value={dispatch}>
        {children}
      </CompanyDispatchContext.Provider>
    </CompanyStateContext.Provider>
  );
};

export default CompanyContextProvider;
