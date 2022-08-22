class Router {
  currentRoute = "/";

  subscribers = {};

  constructor() {
    this.currentRoute = window.location.pathname;
  }

  subscribe(key, callback) {
    if (typeof callback === "function") {
      this.subscribers[key] = callback;
      this.subscribers[key](this.currentRoute);
    }

    return () => delete this.subscribers[key];
  }

  sendChanges() {
    Object.keys(this.subscribers).forEach((key) =>
      this.subscribers[key](this.currentRoute)
    );
  }

  setRoute(route, state = {}) {
    this.currentRoute = route;

    window.history.pushState(state, "", route);
    this.sendChanges();
  }
}

export const router = new Router();
