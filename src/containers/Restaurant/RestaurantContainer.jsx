import { useDispatch, useSelector } from "react-redux";
import {
  selectRestaurantById,
  selectRestaurantRating,
} from "../../store/entities/restaurant/selectors";
import { Restaurant } from "../../components/Restaurant/Restaurant";
import { useEffect } from "react";
import { loadReviewsByRestaurantIdIfNotExist } from "../../store/entities/review/thunk/loadReviewsByRestaurantIdIfNotExist";
import { useParams } from "react-router-dom";

export const RestaurantContainer = () => {
  const { restaurantId } = useParams();
  const dispatch = useDispatch();
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, { id: restaurantId })
  );

  const rating = useSelector((state) =>
    selectRestaurantRating(state, { id: restaurantId })
  );

  useEffect(() => {
    dispatch(loadReviewsByRestaurantIdIfNotExist({ restaurantId }));
  }, [restaurantId]);

  if (!restaurant?.name) {
    return null;
  }

  return (
    <Restaurant id={restaurantId} rating={rating} name={restaurant.name} />
  );
};
