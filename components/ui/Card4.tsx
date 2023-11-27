import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";
import { Quicksand } from "next/font/google";
const font = Quicksand({ subsets: ["latin"] });

interface Card4Props {
  heading: string;
  children: React.ReactNode;
  imageSrc: string;
  show?: boolean;
  number?: string;
  className?: string;
}

const Card4: React.FC<Card4Props> = ({
  heading,
  children,
  imageSrc,
  show = false,
  number,
  className,
}) => {
  return (
    <div className="min-h-[340px] h-fit rounded-[30px] mx-[100px] mt-[35px] relative flex flex-row justify-between customShadow">
      <div className="w-[50%] p-8 px-[80px]">
        <Image
          src={`/images/numbers/${number}.svg`}
          width={50}
          height={50}
          alt="number"
          className="mt-[15px] absolute -z-15 -top-9"
        />
        <h1
          className={twMerge(
            "text-[20px] lg:text-[42px] font-[700] mt-[15px] leading-[110%]",
            font.className
          )}
        >
          {heading}
        </h1>
        <div className="mt-[10px] text-[#5F6163] lg:text-[21px] text-[12px] leading-[130%]">
          {children}
        </div>
      </div>
      <div className="flex-1 relative">
        <Image
          src={imageSrc}
          fill
          alt="image"
          className={twMerge(className, "")}
        />

        <Image
          src={"/images/rocket.svg"}
          alt="img1"
          fill
          className={`-z-10 ${!show && "hidden"} opacity-75`}
        />
      </div>
    </div>
  );
};
export default Card4;
