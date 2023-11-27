"use client";

import Carousel from "react-multi-carousel";
import { twMerge } from "tailwind-merge";
import { Quicksand } from "next/font/google";
import Image from "next/image";
const font = Quicksand({ subsets: ["latin"] });

const responsive = {
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
    items: 1,
  },
};

const data = [
  {
    imageUrl: "/images/Counsellors/c1.svg",
    heading: "Sameer Adtani",
    subheading:"Bangalore",
  },
  {
    imageUrl: "/images/Counsellors/c2.svg",
    heading: "Sameer kumar Poruri",
    subheading:"Bangalore",
  },
  {
    imageUrl: "/images/Counsellors/c3.svg",
    heading: "Sangeetha Doke",
    subheading:"Hyderabad",
  },
  {
    imageUrl: "/images/Counsellors/c4.svg",
    heading: "Indrani Mukherjee",
    subheading:"Kolkata",
  },
  {
    imageUrl: "/images/Counsellors/c1.svg",
    heading: "Sameer Adtani",
    subheading:"Bangalore",
  },
  {
    imageUrl: "/images/Counsellors/c2.svg",
    heading: "Sameer kumar Poruri",
    subheading:"Bangalore",
  },
  {
    imageUrl: "/images/Counsellors/c3.svg",
    heading: "Sangeetha Doke",
    subheading:"Hyderabad",
  },
  {
    imageUrl: "/images/Counsellors/c4.svg",
    heading: "Indrani Mukherjee",
    subheading:"Kolkata",
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
          Meet our {" "}
          <span className="font-bold">Counsellors</span>
        </div>
        <div className="mt-[30px] ">
          <Carousel
            responsive={responsive}
            autoPlay
            arrows={false}
            autoPlaySpeed={1500}
            infinite={true}
            centerMode={true}
            customTransition="all 2s ease"
            transitionDuration={1000}
            containerClass="carousel-container"
          >
            {data.map((item) => (
              <div
                key={item.heading}
                className="flex flex-col gap-[3px] justify-around items-center p-[10px] customShadow rounded-[16px] border border-[#D1D3D4] ml-4 h-[250px]"
              >
                <div className="bg-[#034DB3] bg-none bg-right  md:bg-rocket bg-no-repeat bg-cover w-5/6 md:w-[220px] h-[156px] relative overflow-hidden rounded-[16px] border-[1px_solid_#D1D3D4]">
                  <Image
                    src={item.imageUrl}
                    alt="mentor image"
                    fill
                    className="object-cover "
                  />
                </div>
                <div className="flex flex-col items-center rounded-[5px] bg-[#EDEDED] px-[10px] py-[15px] md:w-[220px] w-[140px]">
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