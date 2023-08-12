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
    children: React.ReactNode
}

const Card2: React.FC<Card2Props> = ({title, children}) => {
  return (
    <div className="md:px-[22px] px-[18px] md:py-[18px] py-[15px] bg-white rounded-[15px]">
      <h1 className="text-[10px] md:text-[14px] font-semibold text-[#0047AB]">
        {title}
      </h1>
      <div className="font-light mt-2 md:mt-[10px] text-[16px] md:text-[16px]">
      {children}
      </div>
      
    </div>
  );
};
export default Card2;
