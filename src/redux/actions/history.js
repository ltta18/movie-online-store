import HistoryTypes from "../types/HistoryTypes";

export const addHistory = (text) => ({
  type: HistoryTypes.ADD_HISTORY,
  payload: { text },
});

export const removeHistory = (index) => ({
  type: HistoryTypes.REMOVE_HISTORY,
  payload: { index },
});

export const removeAllHistory = () => ({
  type: HistoryTypes.REMOVE_ALL_HISTORY,
  payload: {},
});
