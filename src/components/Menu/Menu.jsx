import React from "react";
import styles from "./styles.module.css";
import classnames from "classnames";
import { ProductWithAuthorize } from "../Product/ProductWithAuthorize";
import { ProductContainer } from "../../containers/Product/ProductContainer";

export const Menu = ({ productIds, className }) => {
  return (
    <div className={classnames(styles.root, className)}>
      <div className={styles.content}>
        {productIds.map((id) => (
          <ProductContainer key={id} id={id} className={styles.product} />
        ))}
      </div>
    </div>
  );
};

export const MenuWithMemo = React.memo(Menu);
