import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../store/entities/restaurant/selectors";
import { RestaurantTab } from "../../components/RestaurantTab/RestaurantTab";

export const RestaurantTabContainer = ({ id }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, { id })
  );

  if (!restaurant) {
    return null;
  }

  return <RestaurantTab id={id} restaurantName={restaurant.name} />;
};
