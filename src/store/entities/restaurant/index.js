import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  entities: {},
  ids: [],
  status: "idle", // 'inProgress', 'success', 'failed', 'idle'
};

const SLICE_NAME = "restaurant";

export const restaurantSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    startLoading: (state) => {
      state.entities = {};
      state.ids = [];
      state.status = "inProgress";

      return state;
    },
    failedLoading: (state) => {
      state.entities = {};
      state.ids = [];
      state.status = "failed";

      return state;
    },
    finishLoading: (state, action) => {
      const restaurants = action.payload.restaurants;

      state.entities = restaurants.reduce((acc, restaurant) => {
        acc[restaurant.id] = restaurant;

        return acc;
      }, {});
      state.ids = restaurants.map(({ id }) => id);
      state.status = "success";

      return state;
    },
  },
});

export const restaurantActions = restaurantSlice.actions;

// const testAction = createAction("testAction");
//
// const testReducer = createReducer({}, (builder) => {
//   builder.addCase(testAction, (state, action) => {
//     state.count = 56;
//   }).addCase().addCase().addCase().addDefaultCase();
// });
