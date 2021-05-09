import HistoryTypes from "../types/HistoryTypes";

export default function history(state = [], action) {
  switch (action.type) {
    case HistoryTypes.ADD_HISTORY:
      return [...state, action.payload.text];
    case HistoryTypes.REMOVE_HISTORY:
      const history = [...state];
      history.splice(action.payload.index, 1);
      return history;
    case HistoryTypes.REMOVE_ALL_HISTORY:
      return [];
    default:
      return state;
  }
}
