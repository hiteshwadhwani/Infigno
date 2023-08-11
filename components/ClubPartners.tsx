"use client";

import Carousel from "react-multi-carousel";
import Card5 from "./ui/Card5";
import "react-multi-carousel/lib/styles.css";
import { useEffect, useState } from "react";


const partners = [
  {
    imageSrc: "/images/CollegePartners/ecell.svg",
    heading: "ECELL",
    subheading: "IIT Dhanbad",
  },
  {
    imageSrc: "/images/CollegePartners/ecell.svg",
    heading: "ECELL",
    subheading: "IIT Dhanbad",
  },
  {
    imageSrc: "/images/CollegePartners/ecell.svg",
    heading: "ECELL",
    subheading: "IIT Dhanbad",
  },
  {
    imageSrc: "/images/CollegePartners/ecell.svg",
    heading: "ECELL",
    subheading: "IIT Dhanbad",
  },
  {
    imageSrc: "/images/CollegePartners/ecell.svg",
    heading: "ECELL",
    subheading: "IIT Dhanbad",
  },
  {
    imageSrc: "/images/CollegePartners/ecell.svg",
    heading: "ECELL",
    subheading: "IIT Dhanbad",
  },
  {
    imageSrc: "/images/CollegePartners/ecell.svg",
    heading: "ECELL",
    subheading: "IIT Dhanbad",
  },
  {
    imageSrc: "/images/CollegePartners/ecell.svg",
    heading: "ECELL",
    subheading: "IIT Dhanbad",
  },
  {
    imageSrc: "/images/CollegePartners/ecell.svg",
    heading: "ECELL",
    subheading: "IIT Dhanbad",
  },
  {
    imageSrc: "/images/CollegePartners/ecell.svg",
    heading: "ECELL",
    subheading: "IIT Dhanbad",
  },
  {
    imageSrc: "/images/CollegePartners/ecell.svg",
    heading: "ECELL",
    subheading: "IIT Dhanbad",
  },
  {
    imageSrc: "/images/CollegePartners/ecell.svg",
    heading: "ECELL",
    subheading: "IIT Dhanbad",
  },
  {
    imageSrc: "/images/CollegePartners/ecell.svg",
    heading: "ECELL",
    subheading: "IIT Dhanbad",
  },
  {
    imageSrc: "/images/CollegePartners/ecell.svg",
    heading: "ECELL",
    subheading: "IIT Dhanbad",
  },
  {
    imageSrc: "/images/CollegePartners/ecell.svg",
    heading: "ECELL",
    subheading: "IIT Dhanbad",
  },
  {
    imageSrc: "/images/CollegePartners/ecell.svg",
    heading: "ECELL",
    subheading: "IIT Dhanbad",
  },
  {
    imageSrc: "/images/CollegePartners/ecell.svg",
    heading: "ECELL",
    subheading: "IIT Dhanbad",
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
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

const ClubPartners = () => {
  return (
    <div className="mt-12 lg:mt-[100px]">
      {/* heading */}
      <div className="text-[32px] text-center">
        <span className="font-semibold">60+ College Club</span> Partners
      </div>
      <div className="mt-12">
        <Carousel responsive={responsive} autoPlay arrows={false} autoPlaySpeed={1500} infinite={true} partialVisible={false} customTransition="all 2s ease"
          transitionDuration={1000}>
          {partners.map((item) => (
            <Card5 mainClass="h-[155.539px]" key={item.heading} {...item} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};
export default ClubPartners;
