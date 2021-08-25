import React, { useState } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { Pane, Tablist, Tab, Link } from "evergreen-ui";
import routes from "../../../routes";
import { IRoute } from "../../../routes/interfaces";

const NavigationBar = () => {
  const router = useRouter();
  const currentRouteIdx = routes.findIndex(
    (route) => route.path === router.pathname
  );

  const [selectedIndex, setSelectedIndex] = useState<number>(currentRouteIdx);
  const [tabs] = React.useState<IRoute[]>(routes);

  return (
    <Pane>
      <Tablist>
        {tabs.map((tab, index) => (
          <NextLink href={tab.path} key={tab.name}>
            <Tab
              id={tab.name}
              onSelect={() => setSelectedIndex(index)}
              isSelected={index === selectedIndex}
              aria-controls={`panel-${tab.name}`}
            >
              <Link>{tab.name}</Link>
            </Tab>
          </NextLink>
        ))}
      </Tablist>
    </Pane>
  );
};

export default NavigationBar;
