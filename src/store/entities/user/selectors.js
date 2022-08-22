import { selectEntitiesModule } from "../selectors";

export const selectUserModule = (state) => selectEntitiesModule(state).user;

export const selectUserIds = (state) => selectUserModule(state)?.ids;

export const selectUserById = (state, { id }) =>
  selectUserModule(state)?.entities[id];

export const selectLoadingStatus = (state) => selectUserModule(state).status;
