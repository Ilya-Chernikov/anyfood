import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  entities: {},
  ids: [],
  status: "idle", // 'inProgress', 'success', 'failed', 'idle'
};

const SLICE_NAME = "review";

export const reviewSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    startLoading: (state) => {
      state.status = "inProgress";

      return state;
    },
    failedLoading: (state) => {
      state.status = "failed";

      return state;
    },
    finishLoading: (state, action) => {
      const reviews = action.payload.reviews;

      state.entities = reviews.reduce(
        (acc, review) => {
          acc[review.id] = review;

          return acc;
        },
        { ...state.entities }
      );
      state.ids = [...reviews.map(({ id }) => id), ...state.ids];
      state.status = "success";

      return state;
    },
  },
});

export const reviewActions = reviewSlice.actions;
