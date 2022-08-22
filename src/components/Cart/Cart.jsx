import styles from "./styles.module.css";
import classnames from "classnames";
import { ProductContainer } from "../../containers/Product/ProductContainer";

export const Cart = ({ productIds, finalSum, onClearClick, className }) => {
  return (
    <div className={classnames(styles.root, className)}>
      <span className={styles.title}>Basket</span>
      <div className={styles.content}>
        {productIds.map((id) => (
          <ProductContainer key={id} id={id} className={styles.product} />
        ))}
      </div>
      <div className={styles.finalSum}>sum: {finalSum} p</div>
      <button onClick={onClearClick}>Clear</button>
    </div>
  );
};
