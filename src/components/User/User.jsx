import styles from "./styles.module.css";
import classnames from "classnames";

export const User = ({ name, className }) => {
  return <div className={classnames(styles.root, className)}>{name}</div>;
};
