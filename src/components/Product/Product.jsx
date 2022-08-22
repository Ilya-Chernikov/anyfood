import styles from "./styles.module.css";
import classnames from "classnames";

export const Product = ({ name, className }) => {
  if (!name) {
    return null;
  }

  return (
    <div className={classnames(styles.root, className)}>
      <span>{name}</span>
    </div>
  );
};
