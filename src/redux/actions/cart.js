import CartTypes from "../types/CartTypes";

export const addFilm = (film) => ({
  type: CartTypes.ADD_FILM,
  payload: { film },
});

export const removeFilm = (id) => ({
  type: CartTypes.REMOVE_FILM,
  payload: { id },
});
