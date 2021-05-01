import { combineReducers } from "redux";
import filmReducer from "./reducers/film";

const appReducer = combineReducers({
  filmReducer,
});

const rootReducer = (state, action) => {
  // when a logout action is dispatched it will reset redux state
  // if (action.type === AuthTypes.LOGOUT_SUCCESS) {
  //   state = undefined;
  // }
  return appReducer(state, action);
};

export default rootReducer;
