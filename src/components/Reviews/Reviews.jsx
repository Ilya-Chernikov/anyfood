import styles from "./styles.module.css";
import classnames from "classnames";
import { NewReviewForm } from "../NewReviewForm/NewReviewForm";
import React from "react";
import { ReviewContainer } from "../../containers/Review/ReviewContainer";

export const Reviews = ({ reviewIds, className }) => {
  console.log("render Reviews");

  return (
    <div className={classnames(styles.root, className)}>
      <div className={styles.content}>
        {reviewIds.map((id) => (
          <ReviewContainer key={id} id={id} className={styles.review} />
        ))}
      </div>
      <NewReviewForm className={styles.form} />
    </div>
  );
};

export const ReviewsWithMemo = React.memo(Reviews);
