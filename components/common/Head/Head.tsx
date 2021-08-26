import React from "react";
import NextHead from "next/head";
import { IHeadProps } from "./interfaces";

const Head = ({ pageName, description }: IHeadProps) => {
  return (
    <NextHead>
      <title>
        {process.env.NEXT_PUBLIC_APP_NAME} | {pageName}
      </title>
      <meta name="description" content={description} />
      <link rel="icon" href={process.env.NEXT_PUBLIC_APP_ICON} />
    </NextHead>
  );
};

export default Head;
