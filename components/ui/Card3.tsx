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
        " relative flex flex-col gap-2 rounded-2xl mx-2 md:mx-2 shadow-[0px_0px_10px_0px_#00000040]",
        className
      )}
      style={{ width: "255px", height: "350px" }}
    >
      <div className="flex-grow absolute p-[20px] h-[140px] z-20 bg-white">
        <span className="text-[12px] font-[400] mb-5">If you are</span>
        <div>{children}</div>
      </div>
      <div className=" h-full relative  bg-right bg-rocket bg-no-repeat bg-fill overflow-hidden">

        <Image
          src={imageSrc}
          alt="asf"
          fill
          className="object-cover absolute z-10"
        />
      </div>

    </div>
  );
};

export default Card3;
