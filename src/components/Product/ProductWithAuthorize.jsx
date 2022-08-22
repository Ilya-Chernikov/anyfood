import { WithAuthorize } from "../../hoc/WithAuthorize";
import { ProductWithSale } from "./ProductWithSale";
import { Product } from "./Product";

export const ProductWithAuthorize = WithAuthorize({
  ComponentForAuthorized: ProductWithSale,
  ComponentForUnauthorized: Product,
});
