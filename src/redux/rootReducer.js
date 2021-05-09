import { combineReducers } from "redux";
import filmReducer from "./reducers/film";
import searchReducer from "./reducers/search";
import cartReducer from "./reducers/cart";
import historyReducer from "./reducers/history";

const appReducer = combineReducers({
  filmReducer,
  searchReducer,
  cartReducer,
  historyReducer,
});

const rootReducer = (state, action) => {
  // when a logout action is dispatched it will reset redux state
  // if (action.type === AuthTypes.LOGOUT_SUCCESS) {
  //   state = undefined;
  // }
  return appReducer(state, action);
};

export default rootReducer;
