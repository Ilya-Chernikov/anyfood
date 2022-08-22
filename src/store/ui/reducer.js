import { basketSlice } from "./basket";

export const uiReducer = (state = {}, action) => ({
  basket: basketSlice.reducer(state.basket, action),
});
