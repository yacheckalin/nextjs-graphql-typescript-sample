import { TRIGGER_FILTER, TRIGGER_SEARCH } from "./constants";
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

export type Actions = SearchAction | FilterAction;

const contextReducers = (state: CompanyStateValueI, action: Actions) => {
  switch (action.type) {
    case TRIGGER_SEARCH: {
      return { ...state, search: action.payload.search };
    }
    case TRIGGER_FILTER: {
      return { ...state, filter: action.payload.filter };
    }
    default:
      return { ...state };
  }
};

export default contextReducers;
