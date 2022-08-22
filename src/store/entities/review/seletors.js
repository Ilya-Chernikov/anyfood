import { selectEntitiesModule } from "../selectors";

export const selectReviewModule = (state) => selectEntitiesModule(state).review;

export const selectReviewIds = (state) => selectReviewModule(state)?.ids;

export const selectReviewEntities = (state) =>
  selectReviewModule(state)?.entities;

export const selectReviewById = (state, { id }) =>
  selectReviewEntities(state)?.[id];
