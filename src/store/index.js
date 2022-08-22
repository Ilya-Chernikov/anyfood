import { entitiesReducer } from "./entities/reducer";
import { uiReducer } from "./ui/reducer";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = (state = {}, action = {}) => ({
  entities: entitiesReducer(state.entities, action),
  ui: uiReducer(state.ui, action),
});

// export const store = createStore(
//   rootReducer,
//   applyMiddleware(
// logger,
//   loadRestaurantsIfNotExist,
//   loadProductsByRestaurantIdIfNotExist,
//   loadUsersIfNotExist,
//   loadReviewsByRestaurantIdIfNotExist;
//   )
// );

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
  devTools: process.env.NODE_ENV !== "production",
});
