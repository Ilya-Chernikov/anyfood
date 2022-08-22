import styles from "./styles.module.css";

import { RestaurantContentTabsWithMemo } from "../RestaurantContentTabs/RestaurantContentTabs";

import { Rating } from "../Rating/Rating";
import { Outlet } from "react-router-dom";

export const Restaurant = ({ id, name, rating }) => {

  return (
    <div className={styles.container}>
      <div className={styles.restaurantInfo}>
        <div className={styles.title}>{name}</div>
        <Rating value={rating} />
      </div>
      <RestaurantContentTabsWithMemo className={styles.tabs} />
      <Outlet />
    </div>
  );
};
