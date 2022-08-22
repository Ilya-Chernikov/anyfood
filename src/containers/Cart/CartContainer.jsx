import { Cart } from "../../components/Cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFinalSum,
  selectProductIds,
} from "../../store/ui/basket/selectors";
import { useCallback } from "react";
import { basketActions } from "../../store/ui/basket";

export const CartContainer = ({ className }) => {
  const dispatch = useDispatch();
  const productIds = useSelector(selectProductIds);
  const finalSum = useSelector(selectFinalSum);

  const clearCart = useCallback(() => {
    dispatch(basketActions.clean());
  }, []);

  return (
    <Cart
      productIds={productIds}
      finalSum={finalSum}
      onClearClick={clearCart}
      className={className}
    />
  );
};
