"use client";

import React from "react";

import Image from "next/image";

interface Card2Props {
  children: React.ReactNode;
}

const Card3: React.FC<Card2Props> = ({ children }) => {
  return (
    <div className="relative h-[455.162px] rounded-2xl shadow-xl border border-slate-200">
      <Image src={"/images/housewife.svg"} alt="asf" fill className="object-cover rounded-2xl -z-10 opacity-90" />
      <div className="p-5">
      {children}
      </div>
      
    </div>
  );
};
export default Card3;
