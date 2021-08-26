import React from "react";
import { Pane } from "evergreen-ui";
import Category from "../Category";
import { ICategoryListProps } from "./interfaces";

const CategoryList = ({ categories }: ICategoryListProps) => {
  return (
    <Pane>
      {categories.map((category) => (
        <Category {...category} key={category.title} />
      ))}
    </Pane>
  );
};

export default CategoryList;
