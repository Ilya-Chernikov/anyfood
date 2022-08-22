import React from "react";
import { RESTAURANT_CONTENT_TABS } from "./constants";
import { Tabs } from "../Tabs/Tabs";
import { Tab } from "../Tab/Tab";
import { Link, NavLink } from "react-router-dom";
import RootStyles from "../../RootCss/root.module.css";
import classnames from "classnames";

const RestaurantContentTabs = ({ onTabSelect, className }) => {
  const tabIndexes = RESTAURANT_CONTENT_TABS.map((_, index) => index);

  return (
    <Tabs
      className={className}
      tabs={tabIndexes}
      renderTab={({ id: index, className }) => (
        <NavLink
          to={RESTAURANT_CONTENT_TABS[index]}
          className={({ isActive }) => {
            return classnames({ [RootStyles.NavLink_active]: isActive });
          }}
        >
          <Tab
            key={RESTAURANT_CONTENT_TABS[index]}
            name={RESTAURANT_CONTENT_TABS[index]}
            className={className}
          />
        </NavLink>
      )}
    />
  );
};

export const RestaurantContentTabsWithMemo = React.memo(RestaurantContentTabs);
