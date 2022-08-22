import { useDispatch, useSelector } from "react-redux";
import { selectProductById } from "../../store/entities/product/seletors";
import { ProductWithAuthorize } from "../../components/Product/ProductWithAuthorize";
import { useCallback } from "react";
import {
  createSelectProductSum,
  selectProductCount,
} from "../../store/ui/basket/selectors";
import { basketActions } from "../../store/ui/basket";

export const ProductContainer = ({ id, className }) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => selectProductById(state, { id }));
  const productCount = useSelector((state) =>
    selectProductCount(state, { productId: id })
  );

  const selectProductSum = useCallback(createSelectProductSum(), []);
  const sum = useSelector((state) =>
    selectProductSum(state, { productId: id })
  );

  const increment = useCallback(
    () => dispatch(basketActions.addProduct({ productId: id })),
    [id]
  );
  const decrement = useCallback(
    () => dispatch(basketActions.removeProduct({ productId: id })),
    [id]
  );

  if (!product) {
    return null;
  }

  return (
    <ProductWithAuthorize
      name={product.name}
      price={product.price}
      className={className}
      count={productCount}
      decrement={decrement}
      increment={increment}
      sum={sum}
    />
  );
};
