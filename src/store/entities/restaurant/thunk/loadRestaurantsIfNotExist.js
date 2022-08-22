import { selectLoadingStatus, selectRestaurantIds } from "../selectors";
import { restaurantActions } from "../index";

export function loadRestaurantsIfNotExist() {
  return function (dispatch, getState) {
    const state = getState();

    if (
      selectRestaurantIds(state)?.length !== 0 ||
      selectLoadingStatus(state) === "inProgress"
    ) {
      return;
    }

    dispatch(restaurantActions.startLoading());

    fetch("http://localhost:3001/api/restaurants/")
      .then((res) => res.json())
      .then((restaurants) => {
        dispatch(restaurantActions.finishLoading({ restaurants }));
      })
      .catch((error) => {
        console.log(error);
        dispatch(restaurantActions.failedLoading());
      });
  };
}
