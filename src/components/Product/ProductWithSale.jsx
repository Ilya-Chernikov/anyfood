import styles from "./styles.module.css";
import classnames from "classnames";
import { useContext, useMemo } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

export const ProductWithSale = ({
  count,
  decrement,
  increment,
  name,
  price,
  className,
  sum,
}) => {
  const ThemeValue = useContext(ThemeContext);
  if (!name) {
    return null;
  }
  return (
    <div className={classnames(styles.root, className)}>
      <span className={styles.productName}>{name}</span>
      <div className={styles.actions}>
        <button
          onClick={decrement}
          className={classnames(
            styles.action,
            styles[`action_${ThemeValue.theme}`]
          )}
        >
          -
        </button>
        {count}
        <button
          onClick={increment}
          className={classnames(
            styles.action,
            styles[`action_${ThemeValue.theme}`]
          )}
        >
          +
        </button>
      </div>
      <span className={styles.sum}>{sum} р</span>
    </div>
  );
};
