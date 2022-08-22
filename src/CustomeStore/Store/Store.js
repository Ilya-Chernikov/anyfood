class Store {
  state;

  rootReducer;

  subscribers = {};

  constructor(rootReducer) {
    this.rootReducer = rootReducer;
    this.state = this.rootReducer();
  }

  subscribe(key, callback) {
    if (typeof callback === "function") {
      this.subscribers[key] = callback;
      this.subscribers[key](this.state);
    }
  }

  unsubscribe(key) {
    delete this.subscribers[key];
  }

  sendState() {
    Object.keys(this.subscribers).forEach((key) =>
      this.subscribers[key](this.state)
    );
  }

  dispatch(action) {
    this.state = this.rootReducer(this.state, action);
    this.sendState();
  }
}

export const createStore = (() => {
  let store;

  return (rootReducer) => {
    if (!store) {
      store = new Store(rootReducer);
    }

    return store;
  };
})();
