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
    imageUrl: "/images/mentors/Pranav Suresh.jpg",
    heading: "BITS Pilani",
  },
  {
    imageUrl: "/images/mentors/Harshi Sharma.png",
    heading: "IIT Kharagpur",
  },
  {
    imageUrl: "/images/mentors/Ayndru Uniyal.jpg",
    heading: "IIM Indore",
  },
  {
    imageUrl: "/images/mentors/Srinivasan G.jpeg",
    heading: "Axis Bank",
    subheading: "BITS Pilani",
  },
  {
    imageUrl: "/images/mentors/Kinjal Thakkar.jpg",
    heading: "JP Morgan Chase",
    subheading: "Chartered Accountant",
  },
  {
    imageUrl: "/images/mentors/Kanika Mitharwala.jpg",
    heading: "UnSchool",
    subheading: "Hindu College, DU",
  },
  {
    imageUrl: "/images/mentors/bhavay Agarwal.png",
    heading: "SRCC",
  },
  {
    imageUrl: "/images/mentors/Gurudatt Rao.png",
    heading: "Zargun Electronics & Science Pvt. Ltd.",
    subheading: "SPCE",
  },
  {
    imageUrl: "/images/mentors/Pari Gupta.jpg",
    heading: "SRCC",
  },
  {
    imageUrl: "/images/mentors/Isha Tavare.jpeg",
    heading: "SRCC",
  },
  {
    imageUrl: "/images/mentors/Savi Kankani.jpg",
    heading: "Deloitte / Hindustan Unilever",
    subheading: "IIM Lucknow",
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
        Interact with our growing network of{" "}
        <span className="font-bold">150+ Mentors</span>
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
            <div
              key={item.heading}
              className="flex flex-col justify-around items-center px-[24px] py-[16px] customShadow rounded-[16px] customBorder ml-4 h-[192px]"
            >
              <div className="bg-[#D9D9D9] rounded-full w-[90px] h-[90px] relative overflow-hidden ">
                <Image
                  src={item.imageUrl}
                  alt="mentor image"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col items-center">
                <h2 className="text-[12.4px] xl:text-[14.4px] text-[#0047AB] leading-[18px] text-center">
                  {item.heading}
                </h2>
                <div className="text-[10.8px] xl:text-[12.8px] text-[#1E2327]">
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
