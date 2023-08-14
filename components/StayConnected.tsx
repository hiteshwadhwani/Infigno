'use client'

import Carousel from "react-multi-carousel";
import { twMerge } from "tailwind-merge";
import { Quicksand } from "next/font/google";
const font = Quicksand({ subsets: ["latin"] });
import Image from "next/image";
import { useEffect, useState } from "react";

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
    '/images/StayConnected/img1.jpeg',
    '/images/StayConnected/img2.jpg',
    '/images/StayConnected/img3.jpg',
    '/images/StayConnected/img4.jpg',
    '/images/StayConnected/img5.jpg',
    '/images/StayConnected/img6.jpg',
    '/images/StayConnected/img7.jpg',
    '/images/StayConnected/img8.jpg',
    '/images/StayConnected/img9.jpg',
    '/images/StayConnected/img10.png',
    '/images/StayConnected/img11.png',
    '/images/StayConnected/img12.png',
    '/images/StayConnected/img13.jpeg',
    '/images/StayConnected/img14.jpeg',
    '/images/StayConnected/img15.jpeg',
    '/images/StayConnected/img16.jpeg',
]




const StayConnected = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1200px)");
    mq.addEventListener("change", () => {
      setIsSmallScreen(mq.matches);
    });
  }, []);
  return (
    <div className="mt-[60px] lg:mt-[100px]">
      <div className={twMerge(font.className, "text-[32px] text-center mx-[20px] font-bold")}>
      We stay Connected
      </div>
      <div className="mt-[30px]">
        <Carousel
        draggable={false}
          responsive={responsive}
          autoPlay
          arrows={false}
          autoPlaySpeed={1500}
          infinite={true}
          customTransition="all 2s ease"
          transitionDuration={1000}
          containerClass="carousel-container"
          centerMode={!isSmallScreen}
        >
          {
            data.map(url => (
                <div className="ml-4 h-[233px] relative" key={url}>
                    <Image src={url} alt='stay connected' fill className="object-cover" />
                </div> 
            ))
          }
        </Carousel>
      </div>
    </div>
  );
};
export default StayConnected;
