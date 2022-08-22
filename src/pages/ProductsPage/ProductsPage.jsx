import { Layout } from "../../components/Layout/Layout";
import { ProductsContainer } from "../../containers/Products/ProductsContainer";
import productStyles from "../../components/Product/styles.module.css";
import { Link } from "react-router-dom";
import { Search } from "../../components/Search/search";

export const ProductsPage = () => {
  return (
    <Layout>
      <Search searchParam="productName" placseHolder="Search for product" />
      <ProductsContainer className={productStyles.product_prPage} />
    </Layout>
  );
};
