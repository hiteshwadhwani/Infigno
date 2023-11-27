import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface Card2Props {
  imageSrc: string;
  children: React.ReactNode;
  className?: string;
}

const Card3: React.FC<Card2Props> = ({ children, imageSrc, className }) => {
  return (
    <div
      className={twMerge(
        "flex flex-col  rounded-2xl mx-2 md:mx-2 shadow-[0px_0px_10px_0px_#00000040]", 
        className
      )}
      style={{ width: "255px", height: "350px" }}
    >
      <div className="flex-grow p-[20px]">
        <span className="text-[12px] font-[400] mb-5">If you are</span>
        <div>{children}</div>
      </div>
      <div className="flex-shrink-0 h-[200px] relative overflow-hidden">
        <Image
          src={imageSrc}
          alt="asf"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default Card3;
