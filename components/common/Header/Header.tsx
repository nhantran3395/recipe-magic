import React from "react";
import NextLink from "next/link";
import { Pane, Heading, Link } from "evergreen-ui";
import NavigationBar from "../NavigationBar";

const appName = process.env.NEXT_PUBLIC_APP_NAME;

const Header = () => {
  return (
    <Pane
      width="80%"
      height="100px"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <NextLink href="/">
        <Link
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          cursor="pointer"
        >
          <Heading size={900}>{appName}</Heading>
        </Link>
      </NextLink>
      <NavigationBar />
    </Pane>
  );
};

export default Header;
