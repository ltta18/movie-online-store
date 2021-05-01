import { combineReducers } from "redux";
import FilmTypes from "../types/FilmTypes";

function fetchNowPlaying(state = {}, action) {
  switch (action.type) {
    case FilmTypes.FETCH_NOW_PLAYING_SUCCESS:
      return { ...action.data.results };
    default:
      return state;
  }
}

export default combineReducers({
  fetchNowPlaying,
});
