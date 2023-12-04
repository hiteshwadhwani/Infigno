"use client";

import Carousel from "react-multi-carousel";
import { twMerge } from "tailwind-merge";
import { Quicksand } from "next/font/google";
import Image from "next/image";
const font = Quicksand({ subsets: ["latin"] });

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 7,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
}; 
const data = [
  {
    imageUrl: "/images/Counsellors/1-min.png",
    heading: "Runa Sharma",
    subheading: "Mumbai",
  },
  {
    imageUrl: "/images/Counsellors/2-min.png",
    heading: "Asha Harisha",
    subheading: "Mumbai",
  },
  {
    imageUrl: "/images/Counsellors/3-min.png",
    heading: "Sameer Adtani",
    subheading: "Bangalore",
  },
  {
    imageUrl: "/images/Counsellors/4-min.png",
    heading: "Sameer Kumar",
    subheading: "Bangalore",
  },
  {
    imageUrl: "/images/Counsellors/5-min.png",
    heading: "Sangeetha Doke",
    subheading: "Hyderabad",
  },
  {
    imageUrl: "/images/Counsellors/6-min.png",
    heading: "Indrani Mukherjee",
    subheading: "Kolkata",
  },
  {
    imageUrl: "/images/Counsellors/7-min.png",
    heading: "Shahla Khateeb",
    subheading: "Nagpur",
  },
  {
    imageUrl: "/images/Counsellors/8-min.png",
    heading: "Mona Mehta",
    subheading: "Mumbai",
  },
];
const Mentors = () => {
  return (
    <div className="mt-[60px] lg:mt-[100px]">
      <div
        className={twMerge(
          font.className,
          "text-[32px] text-center mx-[20px] leading-[130%]"
        )}
      >
        Meet our <span className="font-bold">Counsellors</span>
      </div>
      <div className="mt-[30px] ">
        <Carousel
          responsive={responsive}
          autoPlay
          arrows={false}
          autoPlaySpeed={1500}
          infinite={true}
          customTransition="all 2s ease"
          transitionDuration={1000}
          containerClass="carousel-container"
        >
          {data.map((item) => (
            <div
              key={item.heading}
              className="flex flex-col gap-[3px] justify-around items-center p-[10px] customShadow rounded-[16px] border border-[#D1D3D4] ml-4 h-[250px]"
            >
              <div className=" relative bg-[#034DB3] bg-[url('/images/cc.svg')] bg-cover w-5/6 h-[156px] overflow-hidden rounded-[16px] border-[1px_solid_#D1D3D4]">
                <Image
                  src={item.imageUrl}
                  alt="mentor image"
                  fill
                  className="absolute z-10 px-4"
                />
              </div>
              <div className="flex flex-col items-center rounded-[5px] bg-[#EDEDED] px-[10px] py-[15px] w-fit">
                <h2 className="text-[12.4px] xl:text-[16px] text-[#231F20] leading-[18px] text-center">
                  {item.heading}
                </h2>
                <div className="text-[10.8px] xl:text-[12px] text-[#808285]">
                  {item.subheading}
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
export default Mentors;
