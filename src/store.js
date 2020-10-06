import { createStore } from "redux";
import reducer from "./reducers";

const store = createStore(reducer);

const originalDispatch = store.dispatch;

store.dispatch = (action) => {
  if (typeof action === "string") {
    return originalDispatch({
      type: action,
    });
  }

  return originalDispatch(action);
};

export default store;
