import { Tabs } from "../../components/Tabs/Tabs";
import { useSelector } from "react-redux";
import {
  selectRestaurantIds,
  selectRestaurantIdsFilteredByName,
} from "../../store/entities/restaurant/selectors";
import { RestaurantTabContainer } from "../RestaurantTab/RestaurantTab";
import { useSearchParams } from "react-router-dom";

export const RestaurantTabsContainer = ({ onTabSelect }) => {
  const [searchParams] = useSearchParams();
  const restaurantIds = useSelector((state) =>
    selectRestaurantIdsFilteredByName(state, {
      name: searchParams.get("restaurantName") || "",
    })
  );

  if (!restaurantIds?.length) {
    return null;
  }

  return (
    <Tabs
      tabs={restaurantIds}
      renderTab={({ id, className }) => (
        <RestaurantTabContainer
          id={id}
          key={id}
          onTabSelect={onTabSelect}
          className={className}
        />
      )}
    />
  );
};
