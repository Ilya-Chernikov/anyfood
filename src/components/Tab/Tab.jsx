import classnames from "classnames";

import styles from "./styles.module.css";

export const Tab = ({ name, onClick, className }) => {
  return (
    <button className={classnames(styles.root, className)} onClick={onClick}>
      {name}
    </button>
  );
};
