import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";

interface Card2Props {
  title: string;
  children: React.ReactNode;
}

const Card2: React.FC<Card2Props> = ({ title, children }) => {
  return (
    <div className="flex px-[26px] md:py-[18px] py-[18px] bg-gradient-to-r from-[#0047AB] to-[#1E86FF] rounded-[10px] shadow-[0px_0px_20px_0px_#00000033] z-10 leading-[130%]">
      <div className="flex-1">
        <h1 className="text-[12px] md:text-[24px] font-[700] text-[#FDE74C]">
          {title}
        </h1>
        <div className="font-light text-[#FFFFFF] mt-1 md:mt-[10px] text-[14px] md:text-[16px] leading-[130%]">
          {children}
        </div>
      </div>
      <div className="flex items-center">
        <Image src={"/images/tick.svg"} alt="tick" width={50} height={50} />
      </div>
    </div>
  );
};

export default Card2;
