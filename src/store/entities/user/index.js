import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  entities: {},
  ids: [],
  status: "idle", // 'inProgress', 'success', 'failed', 'idle'
};

const SLICE_NAME = "user";

export const userSlice = createSlice({
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
      const users = action.payload.users;

      state.entities = users.reduce((acc, user) => {
        acc[user.id] = user;

        return acc;
      }, {});
      state.ids = users.map(({ id }) => id);
      state.status = "success";

      return state;
    },
  },
});

export const userActions = userSlice.actions;
