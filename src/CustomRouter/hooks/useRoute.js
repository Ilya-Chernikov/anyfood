import { useContext, useEffect, useState } from "react";
import { RouterContext } from "../context/RouterContext";
import { nanoid } from "nanoid";

export const useRoute = () => {
  const [route, setRoute] = useState();
  const router = useContext(RouterContext);

  useEffect(() => {
    const elementKey = nanoid();
    const unsubscribe = router.subscribe(elementKey, (route) =>
      setRoute(route)
    );

    return unsubscribe;
  }, []);

  return route;
};
