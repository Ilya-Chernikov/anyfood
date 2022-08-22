export const customThunkMiddleware = (store) => (next) => (action) => {
  if (typeof action === "function") {
    action(store.dispatch.bind(store), store.getState.bind(store));
  } else {
    next(action);
  }
};
