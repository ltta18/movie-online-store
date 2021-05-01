import { combineReducers } from "redux";
import SearchTypes from "../types/SearchTypes";

function searchByTitle(state = {}, action) {
  switch (action.type) {
    case SearchTypes.SEARCH_BY_TITLE_SUCCESS:
      return { ...action.data.results };
    default:
      return state;
  }
}

function searchByPeople(state = {}, action) {
  switch (action.type) {
    case SearchTypes.SEARCH_BY_PEOPLE_SUCCESS:
      return { ...action.data.results };
    default:
      return state;
  }
}

export default combineReducers({
  searchByTitle,
  searchByPeople,
});
