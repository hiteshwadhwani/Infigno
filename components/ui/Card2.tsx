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
    <div className="px-[26px] md:py-[18px] py-[18px] bg-white rounded-[10px] customShadow z-10 leading-[130%]">
      <h1 className="text-[12px] md:text-[14px] font-semibold text-[#0047AB]">
        {title}
      </h1>
      <div className="font-light mt-1 md:mt-[10px] text-[14px] md:text-[16px] leading-[130%]">
      {children}
      </div>
      
    </div>
  );
};
export default Card2;
