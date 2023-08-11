"use client";

import React from "react";

import Image from "next/image";

interface Card2Props {
  imageSrc: string
  children: React.ReactNode;
}

const Card3: React.FC<Card2Props> = ({ children, imageSrc }) => {
  return (
    <div className="relative h-[455.162px] rounded-2xl shadow-xl border border-slate-200 mx-[20px] md:mx-[40px]">
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
