import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

export function useDispatch() {
  const store = useContext(StoreContext);

  return store.dispatch.bind(store);
}
