import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers";

const logMiddleware = ({ getState }) => (next) => (action) => {
  console.log(action.type, getState());
  return next(action);
};

const stringMiddleWare = () => (next) => (action) => {
  if (typeof action === "string") {
    return next({
      type: action,
    });
  }

  return next(action);
};

const store = createStore(
  reducer,
  applyMiddleware(stringMiddleWare, logMiddleware)
);

store.dispatch("HELLO_WORLD");

export default store;
