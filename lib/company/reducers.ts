import { TRIGGER_SEARCH } from "./constants";
import { CompanyStateValueI } from "./context";

interface Action<T> {
  type: T;
}

interface SearchAction extends Action<typeof TRIGGER_SEARCH> {
  payload: {
    search?: string;
  };
}

export type Actions = SearchAction;

const contextReducers = (state: CompanyStateValueI, action: Actions) => {
  switch (action.type) {
    case TRIGGER_SEARCH: {
      return { ...state, search: action.payload.search };
    }
    default:
      return { ...state };
  }
};

export default contextReducers;
