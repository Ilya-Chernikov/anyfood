import { restaurantSlice } from "./restaurant";
import { productSlice } from "./product";
import { reviewSlice } from "./review";
import { userSlice } from "./user";

export const entitiesReducer = (state = {}, action) => ({
  restaurant: restaurantSlice.reducer(state.restaurant, action),
  product: productSlice.reducer(state.product, action),
  review: reviewSlice.reducer(state.review, action),
  user: userSlice.reducer(state.user, action),
});
