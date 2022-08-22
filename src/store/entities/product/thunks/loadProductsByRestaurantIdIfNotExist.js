import { selectRestaurantProductsById } from "../../restaurant/selectors";
import { selectProductIds } from "../seletors";
import { productActions } from "../index";

export const loadProductsByRestaurantIdIfNotExist =
  ({ restaurantId }) =>
  (dispatch, getState) => {
    const state = getState();

    const restaurantProductIds = selectRestaurantProductsById(state, {
      id: restaurantId,
    });
    const loadedProductIds = selectProductIds(state);

    if (restaurantProductIds.every((id) => loadedProductIds.includes(id))) {
      return;
    }

    dispatch(productActions.startLoading());

    fetch(`http://localhost:3001/api/products/?id=${restaurantId}`)
      .then((res) => res.json())
      .then((products) => {
        dispatch(productActions.finishLoading({ products, status: "success" }));
      })
      .catch(() => {
        dispatch(productActions.failedLoading());
      });
  };
