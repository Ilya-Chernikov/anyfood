import { Menu } from "../../components/Menu/Menu";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurantProductsById } from "../../store/entities/restaurant/selectors";
import { useEffect } from "react";
import { loadProductsByRestaurantIdIfNotExist } from "../../store/entities/product/thunks/loadProductsByRestaurantIdIfNotExist";
import { useParams } from "react-router-dom";

export const MenuContainer = ({ className, isTouch }) => {
  const { restaurantId } = useParams();
  const dispatch = useDispatch();
  const productIds = useSelector((state) =>
    selectRestaurantProductsById(state, { id: restaurantId })
  );

  useEffect(() => {
    dispatch(loadProductsByRestaurantIdIfNotExist({ restaurantId }));
  }, [restaurantId]);

  return (
    <Menu productIds={productIds} className={className} isTouch={isTouch} />
  );
};
