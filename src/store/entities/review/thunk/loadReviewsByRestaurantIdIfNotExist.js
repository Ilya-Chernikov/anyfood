import { selectRestaurantReviewsById } from "../../restaurant/selectors";
import { selectReviewIds } from "../seletors";
import { reviewActions } from "../index";

export const loadReviewsByRestaurantIdIfNotExist =
  ({ restaurantId }) =>
  (dispatch, getState) => {
    const restaurantReviewIds = selectRestaurantReviewsById(getState(), {
      id: restaurantId,
    });
    const loadedReviewIds = selectReviewIds(getState());

    if (restaurantReviewIds?.every((id) => loadedReviewIds.includes(id))) {
      return;
    }

    dispatch(reviewActions.startLoading());

    fetch(`http://localhost:3001/api/reviews/?id=${restaurantId}`)
      .then((res) => res.json())
      .then((reviews) => {
        dispatch(reviewActions.finishLoading({ reviews }));
      })
      .catch(() => {
        dispatch(reviewActions.failedLoading());
      });
  };
