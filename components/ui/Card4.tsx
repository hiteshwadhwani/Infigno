import Image from "next/image";
import React from "react";

interface Card4Props {
  heading: string;
  description: string;
  imageSrc: string;
  show: boolean;
}

const Card4: React.FC<Card4Props> = ({
  heading,
  description,
  imageSrc,
  show,
}) => {
  return (
    <div className="flex flex-col justify-between items-center md:items-start md:grid md:grid-cols-2 h-[400px] border border-slate-300 shadow-lg rounded-3xl w-[90vw] md:w-[70vw] m-auto overflow-hidden">
      <div className="p-6 md:px-20 md:py-12">
        <h1 className="text-2xl md:text-3xl">{heading}</h1>
        <p className="text-neutral-600 text-base md:text-xl md:mt-5">
          {description}
        </p>
      </div>
      <div className="relative h-[200px] w-full md:h-full">
        <Image src={imageSrc} alt="img1" fill className="" />
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
