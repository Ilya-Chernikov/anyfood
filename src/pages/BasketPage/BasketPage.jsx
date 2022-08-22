import { Layout } from "../../components/Layout/Layout";
import { CartContainer } from "../../containers/Cart/CartContainer";
import styles from "../RestaurantsPage/styles.module.css";

export const BasketPage = () => {
  return (
    <Layout>
      <CartContainer className={styles.cart} />
    </Layout>
  );
};
