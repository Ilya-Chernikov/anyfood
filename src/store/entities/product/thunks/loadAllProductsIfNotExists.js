import { selectLoadingStatus } from "../seletors";
import { productActions } from "../index";

export const loadAllProductsIfNotExists = () => (dispatch, getState) => {
  const state = getState();
  if (selectLoadingStatus(state) === "AllLoaded") return;

  dispatch(productActions.startLoading());

  fetch(`http://localhost:3001/api/products/`)
    .then((res) => res.json())
    .then((products) => {
      dispatch(productActions.finishLoading({ products, status: "AllLoaded" }));
    })
    .catch(() => {
      dispatch(productActions.failedLoading());
    });
};
