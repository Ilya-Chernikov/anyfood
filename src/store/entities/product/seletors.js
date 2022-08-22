import { selectEntitiesModule } from "../selectors";

export const selectProductModule = (state) =>
  selectEntitiesModule(state).product;

export const selectProductIds = (state) => selectProductModule(state)?.ids;
export const selectProductEntities = (state) =>
  selectProductModule(state)?.entities;

export const selectProductEntitiesFilteredByProductName = (state, { name }) => {
  if (!name || name === "") return selectProductEntities(state);

  return Object.values(selectProductEntities(state)).filter((productObj) =>
    productObj.name.toLowerCase().includes(name.toLowerCase())
  );
};

export const selectProductById = (state, { id }) =>
  selectProductEntities(state)?.[id];

export const selectProductPriceById = (state, { productId }) =>
  selectProductById(state, { id: productId })?.price || 0;

export const selectLoadingStatus = (state) => selectProductModule(state).status;
