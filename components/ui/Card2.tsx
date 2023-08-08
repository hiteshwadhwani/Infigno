"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";

interface Card2Props{
    title: string,
    description: string
}

const Card2: React.FC<Card2Props> = ({title, description}) => {
  return (
    <Card className="h-fit rounded-3xl">
      <CardHeader>
        <CardTitle className="text-[#034DB3]">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
    </Card>
  );
};
export default Card2;
