import { useRoute } from "../../hooks/useRoute";

export const Routes = ({ children }) => {
  const route = useRoute();

  return (
    <>
      {children.find(
        (routeElement) =>
          !routeElement.props.path ||
          (route && routeElement.props.path.indexOf(route) !== -1)
      )}
    </>
  );
};
