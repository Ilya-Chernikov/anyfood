import styles from "./styles.module.css";
import classnames from "classnames";
import { Rating } from "../Rating/Rating";
import { UserContainer } from "../../containers/User/UserContainer";

export const Review = ({ userId, text, rating, className }) => {
  console.log("render Review");
  return (
    <div className={classnames(styles.root, className)}>
      <div className={styles.header}>
        <UserContainer id={userId} />
        <Rating value={rating} size="small" />
      </div>
      <div>{text}</div>
    </div>
  );
};
