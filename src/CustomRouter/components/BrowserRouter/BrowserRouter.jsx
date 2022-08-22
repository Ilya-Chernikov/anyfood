import { RouterContext } from "../../context/RouterContext";
import { router } from "../../Router";

export const BrowserRouter = ({ children }) => (
  <RouterContext.Provider value={router}>{children}</RouterContext.Provider>
);
