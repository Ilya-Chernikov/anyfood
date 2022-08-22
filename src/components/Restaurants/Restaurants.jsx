import { RestaurantTabsContainer } from "../../containers/RestaurantTabs/RestaurantTabs";
import { Outlet} from "react-router-dom";
import { Search } from "../Search/search";

export const Restaurants = ({ status }) => {
  if (status === "inProgress") {
    return <span>Loading...</span>;
  }

  if (status === "failed") {
    return <span>Failed</span>;
  }

  return (
    <>
      <Search
        searchParam="restaurantName"
        placseHolder="Search for restaurant"
      />
      <RestaurantTabsContainer />
      <Outlet />
    </>
  );
};


