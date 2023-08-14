"use client";

import React from "react";

import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface Card2Props {
  imageSrc: string
  children: React.ReactNode;
  className?: string
}

const Card3: React.FC<Card2Props> = ({ children, imageSrc , className}) => {
  return (
    <div className={twMerge("relative h-[400px] rounded-2xl mx-[10px] md:mx-[10px]", className)}>
      <Image
        src={imageSrc}
        alt="asf"
        fill
        className="object-cover rounded-2xl -z-10"
      />
      <div className="p-5">{children}</div>
    </div>
  );
};
export default Card3;
