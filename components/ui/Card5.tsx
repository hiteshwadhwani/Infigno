import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

interface Card4Props {
  imageSrc?: string;
  heading?: string;
  subheading?: string;
  description?: string;
  mainClass?: string;
  headingClass?: string;
}

const Card5: React.FC<Card4Props> = ({
  imageSrc,
  heading,
  subheading,
  description,
  mainClass,
  headingClass,
}) => {
  return (
    <div
      className={twMerge(
        "flex items-center flex-col py-5 border border-[#D1D3D4] rounded-2xl stroke-[#D1D3D4]",
        mainClass
      )}
    >
      {imageSrc && (
        <div className="relative w-full h-full">
          <Image src={imageSrc} alt="image" fill />
        </div>
      )}
      <div className="mt-5">

      
      <div className={twMerge("font-semibold", headingClass)}>{heading}</div>
      <div className="text-[#979797] text-sm ">{subheading}</div>
      <div className="mt-[20px] font-light">{description}</div>
      </div>
    </div>
  );
};
export default Card5;
