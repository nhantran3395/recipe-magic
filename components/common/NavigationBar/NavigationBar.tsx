import React, { useState } from "react";
import NextLink from "next/link";
import { Pane, Tablist, Tab, Link } from "evergreen-ui";
import { IRoute } from "./interfaces";

const homeRoute = { name: "Start Here", path: "/" };
const recipesRoute = { name: "Recipes", path: "/recipes" };
const savedRecipesRoute = { name: "Saved Recipes", path: "/savedRecipes" };

const routes = [homeRoute, recipesRoute, savedRecipesRoute];

const NavigationBar = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [tabs] = React.useState<IRoute[]>(routes);

  return (
    <Pane>
      <Tablist>
        {tabs.map((tab, index) => (
          <Tab
            key={tab.name}
            id={tab.name}
            onSelect={() => setSelectedIndex(index)}
            isSelected={index === selectedIndex}
            aria-controls={`panel-${tab.name}`}
          >
            <NextLink href={tab.path}>
              <Link>{tab.name}</Link>
            </NextLink>
          </Tab>
        ))}
      </Tablist>
    </Pane>
  );
};

export default NavigationBar;
