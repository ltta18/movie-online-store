import { combineReducers } from "redux";
import FilmTypes from "../types/FilmTypes";

function fetchNowPlaying(state = {}, action) {
  switch (action.type) {
    case FilmTypes.FETCH_NOW_PLAYING_SUCCESS:
      return { ...action.data };
    default:
      return state;
  }
}

function fetchPopular(state = {}, action) {
  switch (action.type) {
    case FilmTypes.FETCH_POPULAR_SUCCESS:
      return { ...action.data };
    default:
      return state;
  }
}

function fetchTopRated(state = {}, action) {
  switch (action.type) {
    case FilmTypes.FETCH_TOP_RATED_SUCCESS:
      return { ...action.data };
    default:
      return state;
  }
}

function fetchRecommendation(state = {}, action) {
  switch (action.type) {
    case FilmTypes.FETCH_RECOMMENDATION:
      return { ...action.data };
    default:
      return state;
  }
}

function fetchDetail(state = {}, action) {
  switch (action.type) {
    case FilmTypes.FETCH_DETAIL_SUCCESS:
      return { ...action.data };
    default:
      return state;
  }
}

export default combineReducers({
  fetchNowPlaying,
  fetchPopular,
  fetchTopRated,
  fetchRecommendation,
  fetchDetail,
});
