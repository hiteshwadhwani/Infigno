import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

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
    // <div className="flex flex-col justify-between items-center lg:items-start lg:grid lg:grid-cols-2 min-h-[400px] h-fit border border-slate-300 shadow-lg rounded-3xl w-[90vw] md:w-[70vw] mx-auto overflow-hidden mt-5">
    //   <div className="p-6 md:px-20 md:py-12">
    //     <h1 className="text-2xl md:text-3xl">{heading}</h1>
    //     <p className="text-neutral-600 text-base md:text-xl md:mt-5">
    //       {description}
    //     </p>
    //   </div>
    //   <div className="relative h-[200px] w-full lg:h-full">
    //     <Image src={imageSrc} alt="img1" fill className="" />
    //     <Image
    //       src={"/images/bg2.svg"}
    //       alt="img1"
    //       fill
    //       className={`-z-10 ${!show && "hidden"} opacity-75`}
    //     />
    //   </div>
    // </div>
    <div className="min-h-[340px] lg:w-[90%] xl:w-[70%] h-fit rounded-[30px] shadow-xl border border-slate-200 mx-auto mt-[35px] relative flex flex-row overflow-hidden">
      {/* <Image
        src={`images/numbers/${number}.svg`}
        width={50}
        height={50}
        alt="number"
        className="absolute left-8 -top-5"
      /> */}

      <div className="w-[50%] pl-8">
        <h1 className="text-[20px] lg:text-[42px] font-semibold mt-[30px]">
          {heading}
        </h1>
        <div className="mt-[10px] text-[#5F6163] lg:text-[21px] text-[12px]">
          {children}
        </div>
      </div>
      <div className="flex-1 relative">
        <Image
          src={imageSrc}
          fill
          alt="image"
          className={twMerge(className, "absolute bottom-0 right-0")}
        />

        <Image
          src={"/images/bg2.svg"}
          alt="img1"
          fill
          className={`-z-10 ${!show && "hidden"} opacity-75`}
        />
      </div>
    </div>
  );
};
export default Card4;
