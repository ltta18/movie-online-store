import CartTypes from "../types/CartTypes";

const initialState = {
  cart: {},
  totalMoney: 0,
};

export default function cart(state = initialState, action) {
  const cart = { ...state.cart };
  switch (action.type) {
    case CartTypes.ADD_FILM:
      const [key, val] = Object.entries(action.payload.film)[0];
      cart[key] = val;
      return { cart, totalMoney: state.totalMoney + 15 };
    case CartTypes.REMOVE_FILM:
      delete cart[action.payload.id];
      return { cart, totalMoney: state.totalMoney - 15 };
    case CartTypes.REMOVE_ALL_FILM:
      return initialState;
    default:
      return state;
  }
}
