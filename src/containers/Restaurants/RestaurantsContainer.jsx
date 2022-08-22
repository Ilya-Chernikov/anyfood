import { Restaurants } from "../../components/Restaurants/Restaurants";
import { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectLoadingStatus } from "../../store/entities/restaurant/selectors";
import { loadRestaurantsIfNotExist } from "../../store/entities/restaurant/thunk/loadRestaurantsIfNotExist";

export const RestaurantsContainer = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectLoadingStatus);

  useLayoutEffect(() => {
    const loadFunction = loadRestaurantsIfNotExist();
    dispatch(loadFunction);
  }, []);

  return <Restaurants status={status} />;
};
