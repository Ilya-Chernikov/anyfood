import { useRoute } from "../../hooks/useRoute";

export const Route = ({ path, element }) => {
  const route = useRoute();
  console.log(route);

  if (!path || !route || path.indexOf(route) === -1) {
    return null;
  }

  return element;
};
