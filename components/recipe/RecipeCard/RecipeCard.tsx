import React from "react";
import { Card, Heading, majorScale } from "evergreen-ui";
import Image from "next/image";
import { IRecipeCardProps } from "./interfaces";

const RecipeCard = ({ label, image, source, sourceUrl }: IRecipeCardProps) => {
  return (
    <Card
      margin={majorScale(3)}
      elevation={3}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      flex="1 1 30%"
    >
      <Image src={image} width={300} height={300}></Image>
      <Heading size={600}>{label}</Heading>
    </Card>
  );
};

export default RecipeCard;
