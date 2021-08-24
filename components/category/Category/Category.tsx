import React from "react";
import { Pane, Heading, majorScale } from "evergreen-ui";
import { ICategoryProps } from "./interfaces";
import OptionCard from "../OptionCard";

const Category = ({ title, options }: ICategoryProps) => {
  return (
    <Pane
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      margin={majorScale(2)}
    >
      <Heading size={800}>{title}</Heading>

      <Pane
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
      >
        {options.map((option) => (
          <OptionCard {...option} key={option.name} />
        ))}
      </Pane>
    </Pane>
  );
};

export default Category;
