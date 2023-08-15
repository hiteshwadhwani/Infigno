"use client";

import Carousel from "react-multi-carousel";
import { Quicksand } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { ChevronLeft, ChevronRight } from "lucide-react";
const font = Quicksand({ subsets: ["latin"] });

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
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

const data = [
  {
    heading: "Akshata Narayane",
    subheading: "B.Com - R.A. Podar, Mumbai",
    description:
      "“I started with the Infigon mobile app, took the tests and later connected with their counsellors. Majorly, I got a strong POA for my skill development roadmap and internship domain selection”",
  },
  {
    heading: "Akshat Singhi",
    subheading: "B.Com - St. Xavier’s Kolkata",
    description:
      '"Thanks to Infigon, I now have a better understanding of my career options & feel confident in making informed decisions about my future.”',
  },
  {
    heading: "Sarjana Satam",
    subheading: "12th - Ruia College, Mumbai",
    description:
      "“It was very helpful and mentors were very supportive and kind towards us.They put efforts into choosing our further stream by asking for minute details which is really appreciated.”",
  },
  {
    heading: "Parth Rane",
    subheading: "7th - Cosmopolitan Education Society, Mumbai",
    description:
      '"My son was confused about which subjects to select in his 8th-grade elective, Infigon helped us create a structured education roadmap by understanding our targets and strengths"',
  },
  {
    heading: "Shriya Cheruvulli",
    subheading: "10th - Amber International School",
    description:
      "“I was confused about which board to continue after the 10th. Infigon helped me figure out my target career options, and based on the entrance exams, recommended the right board for my Junior college”",
  },
  {
    heading: "Aditya Kumar",
    subheading: "B.Tech IT - DJ Sanghvi Mumbai",
    description:
      "“Infigon helped me develop a clear action plan for my MBA journey, prepared a resume and also connected me with MBA grads to get an understanding from insiders”",
  },
  {
    heading: "Jeeshant Sawant",
    subheading: "BMM - Rithumbara college",
    description:
      "“I highly recommend Infigon for their personalized approach to career guidance and their vast knowledge of career options.”",
  },
];

const ButtonGroup = ({ next, previous, goToSlide, ...rest }: any) => {
  const {
    carouselState: { currentSlide },
  } = rest;
  return (
    <div
      className="carousel-button-group mt-[30px] mb-4 gap-4 flex justify-center
      items-center w-full"
    >
      <button
        className="rounded-full border-2 bg-transparent text-[#0047AB] border-[#0047AB] hover:text-white hover:bg-[#0047AB] transition p-1"
        onClick={() => previous()}
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        className="rounded-full border-2 bg-transparent text-[#0047AB] border-[#0047AB] p-1 hover:text-white hover:bg-[#0047AB] transition"
        onClick={() => next()}
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};

const WhatPeopleSaying = () => {
  return (
    <div className="mt-[60px] lg:mt-[100px]">
      <div className={twMerge(font.className, "text-[32px] leading-[130%] text-center mx-[20px]")}>
        What People are <span className="font-bold">Saying About Us</span>
      </div>
      <div className="mt-[30px]">
        <Carousel
          responsive={responsive}
          autoPlay
          arrows={false}
          autoPlaySpeed={4000}
          infinite={true}
          customTransition="all 2s ease"
          transitionDuration={1000}
          containerClass="carousel-container"
          renderButtonGroupOutside={true}
          customButtonGroup={<ButtonGroup />}
        >
          {data.map((item) => (
            <div
              className="p-[25px] border border-[#D1D3D4] min-h-[254px] overflow-hidden mx-4 rounded-[15px]"
              key={item.heading}
            >
              <div className="">
                <h1 className="text-[19px] md:text-[21px] text-[#194E9F]">{item.heading}</h1>
                <p className="text-[14px] md:text-[16px] text-[#808285]">{item.subheading}</p>
              </div>
              <div className="text-[16px] mt-[20px] md:text-[18px] text-[#1E2327] text-ellipsis">
                {item.description}
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
export default WhatPeopleSaying;
