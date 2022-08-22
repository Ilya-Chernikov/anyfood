import { NavLink } from "react-router-dom";
import { Tab } from "../Tab/Tab";
import classnames from "classnames";

import styles from "./styles.module.css";
import RootStyles from "../../RootCss/root.module.css";

export const RestaurantTab = ({ id, restaurantName }) => {
  return (
    <NavLink
      to={id}
      className={({ isActive }) =>
        classnames(styles.root, {
          [RootStyles.NavLink_active]: isActive,
        })
      }
    >
      <Tab name={restaurantName} />
    </NavLink>
  );
};
