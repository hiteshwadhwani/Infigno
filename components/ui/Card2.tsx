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
    <div className="px-[26px] md:py-[18px] py-[18px] bg-white rounded-[15px] customShadow z-10">
      <h1 className="text-[14px] md:text-[14px] font-semibold text-[#0047AB]">
        {title}
      </h1>
      <div className="font-light mt-2 md:mt-[10px] text-[16px] md:text-[16px]">
      {children}
      </div>
      
    </div>
  );
};
export default Card2;
