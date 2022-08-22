import { useContext } from "react";
import { RouterContext } from "../context/RouterContext";

export const useNavigate = () => {
  const router = useContext(RouterContext);

  return router.setRoute.bind(router);
};
