import { selectUiModule } from "../selectors";
import { createSelector } from "reselect";
import {
  selectProductEntities,
  selectProductPriceById,
} from "../../entities/product/seletors";

export const selectBasketModule = (state) => selectUiModule(state)?.basket;

export const selectProductIds = createSelector(selectBasketModule, (basket) =>
  Object.keys(basket)
);

export const selectProductCount = (state, { productId }) =>
  selectBasketModule(state)[productId] || 0;

export const createSelectProductSum = () =>
  createSelector(
    [selectProductCount, selectProductPriceById],
    (count, price) => {
      return count * price;
    }
  );

export const selectFinalSum = createSelector(
  [selectBasketModule, selectProductEntities],
  (basket, products) => {
    return Object.keys(basket)?.reduce((sum, key) => {
      return sum + products[key].price * basket[key];
    }, 0);
  }
);
