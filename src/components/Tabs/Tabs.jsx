import styles from "./styles.module.css";
import classnames from "classnames";

export const Tabs = ({ tabs, renderTab, className }) => {
  return (
    <div className={classnames(styles.root, className)}>
      {tabs?.map((id) =>
        renderTab({
          id,
          className: styles.tab,
        })
      )}
    </div>
  );
};
