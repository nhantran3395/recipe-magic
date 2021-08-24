import React from "react";
import { Card, Heading, majorScale } from "evergreen-ui";
import Image from "next/image";
import { IOptionCardProps } from "./interfaces";

const OptionCard = ({ name, thumbnail }: IOptionCardProps) => {
  return (
    <Card
      margin={majorScale(3)}
      elevation={3}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Image src={thumbnail} width={300} height={300}></Image>
      <Heading size={600}>{name}</Heading>
    </Card>
  );
};

export default OptionCard;
