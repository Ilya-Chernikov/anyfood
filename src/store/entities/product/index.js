import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  entities: {},
  ids: [],
  status: "idle", // 'inProgress', 'success', 'failed', 'idle'
};

const SLICE_NAME = "product";

export const productSlice = createSlice({
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
      const products = action.payload.products;

      state.entities = products.reduce(
        (acc, product) => {
          acc[product.id] = product;

          return acc;
        },
        { ...state.entities }
      );
      state.ids = [...new Set([...products.map(({ id }) => id), ...state.ids])];
      state.status = action.payload.status;

      return state;
    },
  },
});

export const productActions = productSlice.actions;
