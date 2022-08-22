import { Layout } from "../../components/Layout/Layout";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectProductById } from "../../store/entities/product/seletors";
import { ProductContainer } from "../../containers/Product/ProductContainer";
import { selectRestaurantByProductId } from "../../store/entities/restaurant/selectors";

export const ProductPage = () => {
  const { productId } = useParams();
  const restaurantWithProduct = useSelector((state) =>
    selectRestaurantByProductId(state, { id: productId })
  );

  return (
    <Layout>
      <span>
        You can buy this product in restaurant{" "}
        <Link to={`/restaurants/${restaurantWithProduct.id}`}>
          {restaurantWithProduct.name}
        </Link>
      </span>
      <ProductContainer id={productId} />
    </Layout>
  );
};
