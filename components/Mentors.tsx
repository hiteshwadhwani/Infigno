"use client";

import Carousel from "react-multi-carousel";
import { twMerge } from "tailwind-merge";
import { Quicksand } from "next/font/google";
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
    heading: "Bangalore Medical College",
    subheading: "AIIIMS",
  },
  {
    heading: "Bangalore Medical College",
    subheading: "AIIIMS",
  },
  {
    heading: "Bangalore Medical College",
    subheading: "AIIIMS",
  },
  {
    heading: "Bangalore Medical College",
    subheading: "AIIIMS",
  },
  {
    heading: "Bangalore Medical College",
    subheading: "AIIIMS",
  },
  {
    heading: "Bangalore Medical College",
    subheading: "AIIIMS",
  },
  {
    heading: "Bangalore Medical College",
    subheading: "AIIIMS",
  },
  {
    heading: "Bangalore Medical College",
    subheading: "AIIIMS",
  },
  {
    heading: "Bangalore Medical College",
    subheading: "AIIIMS",
  },
];



const Mentors = () => {
  return (
    <div className="mt-[60px] lg:mt-[100px]">
      <div className={twMerge(font.className, "text-[32px] text-center mx-[20px] leading-[130%]")}>
      Interact with our growing network of <span className="font-bold">80+ Mentors</span>
      </div>
      <div className="mt-[30px]">
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
            <div key={item.heading} className="flex flex-col items-center px-[24px] py-[16px] customShadow rounded-[16px] customBorder ml-4">
                <div className="bg-[#D9D9D9] rounded-full w-[90px] h-[90px]">

                </div>
                <h2 className="text-[14.4px] text-[#0047AB] leading-[18px] mt-[8.8px] text-center">{item.heading}</h2>
                <p className="mt-[8.8px] text-[12.8px] text-[#1E2327]">{item.subheading}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
export default Mentors;
