import { useDispatch, useSelector } from "react-redux";
import { selectRestaurantReviewsById } from "../../store/entities/restaurant/selectors";
import { Reviews } from "../../components/Reviews/Reviews";
import { useEffect } from "react";
import { loadUsersIfNotExist } from "../../store/entities/user/thunk/loadUsersIfNotExist";
import { useParams } from "react-router-dom";

export const ReviewsContainer = ({ className }) => {
  const { restaurantId } = useParams();
  const dispatch = useDispatch();
  const reviewIds = useSelector((state) =>
    selectRestaurantReviewsById(state, { id: restaurantId })
  );

  useEffect(() => {
    dispatch(loadUsersIfNotExist());
  }, []);

  if (!reviewIds?.length) {
    return null;
  }

  return <Reviews reviewIds={reviewIds} className={className} />;
};
