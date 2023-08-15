"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Quicksand } from "next/font/google";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
const font = Quicksand({ subsets: ["latin"] });
import "react-multi-carousel/lib/styles.css";

const data = [
  "/images/CollegePartners/img1.svg",
  "/images/CollegePartners/img2.svg",
  "/images/CollegePartners/img1.svg",
  "/images/CollegePartners/img2.svg",
  "/images/CollegePartners/img1.svg",
  "/images/CollegePartners/img2.svg",
  "/images/CollegePartners/img1.svg",
  "/images/CollegePartners/img2.svg",
  "/images/CollegePartners/img1.svg",
  "/images/CollegePartners/img2.svg",
  "/images/CollegePartners/img1.svg",
  "/images/CollegePartners/img2.svg",
  "/images/CollegePartners/img1.svg",
  "/images/CollegePartners/img2.svg",
  "/images/CollegePartners/img1.svg",
  "/images/CollegePartners/img2.svg",
];

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
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const ClubPartners = () => {
  return (
    <div className=" mt-[60px] lg:mt-[100px]">
      {/* heading */}
      <div
        className={twMerge(
          font.className,
          "text-[32px] text-center font-normal mx-[20px] leading-[130%]"
        )}
      >
        <span className="font-bold">60+ College <br className="md:hidden" />Club</span> Partners
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
          itemClass="container-item"
        >
          {data.map((item) => (
            <div className="h-[155.54px] relative ml-4" key={item}>
              <Image src={item} alt="club image" fill />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
export default ClubPartners;
