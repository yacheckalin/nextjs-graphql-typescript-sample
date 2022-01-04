import { PAGGINATE, TRIGGER_FILTER, TRIGGER_SEARCH } from "./constants";
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

export type Actions = SearchAction | FilterAction | PaginationAction;

const contextReducers = (state: CompanyStateValueI, action: Actions) => {
  switch (action.type) {
    case TRIGGER_SEARCH: {
      return { ...state, search: action.payload.search };
    }
    case TRIGGER_FILTER: {
      return { ...state, filter: action.payload.filter };
    }
    case PAGGINATE: {
      return { ...state, page: action.payload.page };
    }
    default:
      return { ...state };
  }
};

export default contextReducers;
