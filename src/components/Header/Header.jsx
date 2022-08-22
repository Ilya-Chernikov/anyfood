import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import Logo from "./imgs/logo.svg";
import styles from "./styles.module.css";

import { Link } from "react-router-dom";

export const Header = () => {
  const { switchTheme } = useContext(ThemeContext);
  return (
    <header className={styles.root}>
      <Link to="/" className={styles.logo}>
        <img src={Logo} loading="lazy" />
      </Link>
      <button onClick={switchTheme}>SwitchTheme</button>
      <Link to="/restaurants" className={styles.link}>
        Restaurants
      </Link>
      <Link to="/basket" className={styles.link}>
        Basket
      </Link>
      <Link to="/products" className={styles.link}>
        Products
      </Link>
    </header>
  );
};
