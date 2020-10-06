import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
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
  applyMiddleware(thunkMiddleware, stringMiddleWare, logMiddleware)
);

const delayedAction = (timeout) => (dispatch) => {
  setTimeout(() => dispatch ({
    type: "DELAYED_ACTION"
  }), timeout)
}

store.dispatch(delayedAction(3000));

export default store;
