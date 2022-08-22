import React, { useMemo, useState } from "react";
import { RestaurantsPage } from "./pages/RestaurantsPage/RestaurantsPage";
import { ThemeContext } from "./contexts/ThemeContext";
import { Provider } from "react-redux";
import { store } from "./store";
import { BasketPage } from "./pages/BasketPage/BasketPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { RestaurantsContainer } from "./containers/Restaurants/RestaurantsContainer";
import { RestaurantContainer } from "./containers/Restaurant/RestaurantContainer";
import { MenuContainer } from "./containers/Menu/MenuContainer";
import { ReviewsContainer } from "./containers/Reviews/ReviewsContainer";
import RestaurantStyles from "./components/Restaurant/styles.module.css";
import { ProductsPage } from "./pages/ProductsPage/ProductsPage";
import { ProductPage } from "./pages/ProductPage/ProductPage";

export const App = () => {
  const [theme, setTheme] = useState("dark");
  const themeState = useMemo(
    () => ({
      theme,
      switchTheme: () => setTheme(theme === "dark" ? "light" : "dark"),
    }),
    [theme]
  );

  return (
    <Provider store={store}>
      <ThemeContext.Provider value={themeState}>
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="restaurants" element={<RestaurantsPage />}>
              <Route index element={<div>select restaurant</div>} />
              <Route path=":restaurantId" element={<RestaurantContainer />}>
                <Route
                  index
                  path="*"
                  element={<MenuContainer className={RestaurantStyles.menu} />}
                />
                <Route
                  path="reviews"
                  element={
                    <ReviewsContainer className={RestaurantStyles.reviews} />
                  }
                />
              </Route>
            </Route>
            <Route path="basket" element={<BasketPage />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="product/:productId" element={<ProductPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </Provider>
  );
};
