import React from "react";

import classes from "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = props => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" exact>
      Search
    </NavigationItem>
    <NavigationItem link="/auth" exact>
      Sign In
    </NavigationItem>
  </ul>
);

export default navigationItems;
