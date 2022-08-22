import { Layout } from "../../components/Layout/Layout";

import styles from "./styles.module.css";
import { RestaurantsContainer } from "../../containers/Restaurants/RestaurantsContainer";

export const RestaurantsPage = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <RestaurantsContainer />
      </div>
    </Layout>
  );
};
