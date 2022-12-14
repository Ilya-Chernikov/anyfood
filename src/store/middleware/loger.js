export const logger = (store) => (next) => (action) => {
  console.log("Action:", action.type);
  return next(action);
};
