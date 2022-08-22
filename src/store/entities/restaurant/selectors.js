import { selectReviewEntities } from "../review/seletors";
import { createSelector } from "reselect";
import { selectEntitiesModule } from "../selectors";

export const selectRestaurantModule = (state) =>
  selectEntitiesModule(state).restaurant;

export const selectRestaurantIds = (state) =>
  selectRestaurantModule(state)?.ids;

export const selectRestaurantIdsFilteredByName = (state, { name }) =>
  selectRestaurantModule(state)?.ids?.filter(
    (id) =>
      selectRestaurantById(state, { id })
        .name.toLowerCase()
        .indexOf(name.toLowerCase()) !== -1
  );

export const selectRestaurantById = (state, { id }) =>
  selectRestaurantModule(state)?.entities[id];

export const selectRestaurantProductsById = (state, { id }) =>
  selectRestaurantById(state, { id })?.menu;

export const selectRestaurantReviewsById = (state, { id }) =>
  selectRestaurantById(state, { id })?.reviews;

export const selectRestaurantRating = createSelector(
  [selectRestaurantReviewsById, selectReviewEntities],
  (reviewIds, reviewEntities) => {
    return Math.floor(
      reviewIds?.reduce(
        (sum, id) => sum + (reviewEntities[id]?.rating || 0) / reviewIds.length,
        0
      )
    );
  }
);

export const selectRestaurantByProductId = (state, { id }) => {
  return Object.values(selectRestaurantModule(state).entities).find(
    (restaurant) => restaurant.menu.includes(id)
  );
};

export const selectLoadingStatus = (state) =>
  selectRestaurantModule(state).status;
