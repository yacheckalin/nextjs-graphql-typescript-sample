import { Company } from "../../backend/types";
import {
  PAGGINATE,
  TRIGGER_FILTER,
  TRIGGER_MODAL,
  TRIGGER_SEARCH,
} from "./constants";
import { CompanyStateValueI } from "./context";

interface Action<T> {
  type: T;
}

interface SearchAction extends Action<typeof TRIGGER_SEARCH> {
  payload: {
    search?: string;
  };
}
interface FilterAction extends Action<typeof TRIGGER_FILTER> {
  payload: {
    filter?: string[];
  };
}

interface PaginationAction extends Action<typeof PAGGINATE> {
  payload: {
    page: number;
  };
}

interface ModalInitAction extends Action<typeof TRIGGER_MODAL> {
  payload: {
    modal: {
      data: Company;
      open: boolean;
    };
  };
}

export type Actions =
  | SearchAction
  | FilterAction
  | PaginationAction
  | ModalInitAction;

const contextReducers = (state: CompanyStateValueI, action: Actions) => {
  switch (action.type) {
    case TRIGGER_SEARCH: {
      return { ...state, search: action.payload.search, page: 1 };
    }
    case TRIGGER_FILTER: {
      return { ...state, filter: action.payload.filter, page: 1 };
    }
    case PAGGINATE: {
      return { ...state, page: action.payload.page };
    }
    case TRIGGER_MODAL: {
      return { ...state, modal: { ...action.payload.modal } };
    }
    default:
      return { ...state };
  }
};

export default contextReducers;
