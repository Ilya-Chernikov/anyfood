import {
  selectProductEntitiesFilteredByProductName,
  selectProductIds,
} from "../../store/entities/product/seletors";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadAllProductsIfNotExists } from "../../store/entities/product/thunks/loadAllProductsIfNotExists";
import { Product } from "../../components/Product/Product";
import { Link, useSearchParams } from "react-router-dom";
import rootCssStyles from "../../RootCss/root.module.css";
import classnames from "classnames";

export const ProductsContainer = ({ className }) => {
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadAllProductsIfNotExists());
  }, []);
  const productsEntities = useSelector((state) =>
    selectProductEntitiesFilteredByProductName(state, {
      name: searchParams.get("productName") || "",
    })
  );
  return Object.values(productsEntities).map((product) => {
    return (
      <Link
        to={`/product/${product.id}`}
        className={classnames(rootCssStyles.link, rootCssStyles.link_black)}
      >
        <Product name={product.name} className={className} key={product.id} />
      </Link>
    );
  });
};
