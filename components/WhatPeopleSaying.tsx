"use client";

import Carousel from "react-multi-carousel";
import Card5 from "./ui/Card5";

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
    heading: "Jheel Tripathi",
    subheading: "12th - Jai Hind College, Mumbai",
    description:
      "“The Infigon mobile application is very user-friendly, and the one on one sessions helped me shortlist my undergrad degree”",
  },
  {
    heading: "Aditya Kumar",
    subheading: "B.Tech IT - DJ Sanghvi Mumbai",
    description:
      '"Infigon helped me develop a clear action plan for my MBA journey, prepared a resume and also connected me with MBA grads to get an understanding from insiders”',
  },
  {
    heading: "Harsh Pednekar",
    subheading: "B.Com - Bhavans College",
    description:
      "“Infigon helped me develop a roadmap for skill development through internships and certifications, which will be of great help after graduation”",
  },
  {
    heading: "Jeeshant Sawant",
    subheading: "BMS - Rithumbara College",
    description:
      '"I highly recommend Infigon for their personalized approach to career guidance and their vast knowledge of career options."',
  },
  {
    heading: "Jheel Tripathi",
    subheading: "12th - Jai Hind College, Mumbai",
    description:
      "“The Infigon mobile application is very user-friendly, and the one on one sessions helped me shortlist my undergrad degree”",
  },
  {
    heading: "Jheel Tripathi",
    subheading: "12th - Jai Hind College, Mumbai",
    description:
      "“The Infigon mobile application is very user-friendly, and the one on one sessions helped me shortlist my undergrad degree”",
  },
  {
    heading: "Jheel Tripathi",
    subheading: "12th - Jai Hind College, Mumbai",
    description:
      "“The Infigon mobile application is very user-friendly, and the one on one sessions helped me shortlist my undergrad degree”",
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
    <div className="mt-12 lg:mt-[100px]">
      <div className={twMerge(font.className, "text-[32px] text-center px-3")}>
        What People are <span className="font-bold">Saying About Us</span>
      </div>
      <div className="mt-12">
        <Carousel
          responsive={responsive}
          autoPlay
          arrows={false}
          autoPlaySpeed={4000}
          infinite={true}
          centerMode={true}
          customTransition="all 2s ease"
          transitionDuration={1000}
          containerClass="carousel-container"
          renderButtonGroupOutside={true}
          customButtonGroup={<ButtonGroup />}
        >
          {data.map((item) => (
            <div
              className="p-[25px] border border-[#D1D3D4] h-[254px] overflow-hidden ml-4 rounded-[15px]"
              key={item.heading}
            >
              <div>
                <h1 className="text-[21px] text-[#194E9F]">{item.heading}</h1>
                <p className="text-[16px] text-[#808285]">{item.subheading}</p>
              </div>
              <div className="mt-[20px] text-[18px] text-[#1E2327] text-ellipsis">
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
