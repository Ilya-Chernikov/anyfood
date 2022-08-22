import { useSelector } from "react-redux";
import { selectReviewById } from "../../store/entities/review/seletors";
import { Review } from "../../components/Review/Review";

export const ReviewContainer = ({ id, className }) => {
  const review = useSelector((state) => selectReviewById(state, { id }));

  if (!review) {
    return null;
  }

  const { text, rating, userId } = review;

  return (
    <Review rating={rating} text={text} userId={userId} className={className} />
  );
};
