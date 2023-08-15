"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Quicksand } from "next/font/google";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
const font = Quicksand({ subsets: ["latin"] });
import "react-multi-carousel/lib/styles.css";
import { useRouter } from "next/navigation";

const data = [
  {
    imageurl: "/images/mediaMentions/img1.svg",
    href: "https://www.taazatadka.com/startup-stories/infigon-futures-guidance-student-education-omkar-vishwas-patil/",
  },
  {
    imageurl: "/images/mediaMentions/img2.svg",
    href: "https://www.vidsaga.com/expert-interview-marketing-growth-techniques-omkar-patil-infigon-futures/",
  },
  {
    imageurl: "/images/mediaMentions/img3.svg",
    href: "https://www.insightssuccess.in/infigon-futures-unlocking-real-career-potential/",
  },
  {
    imageurl: "/images/mediaMentions/img4.svg",
    href: "https://www.analyticsinsight.net/exclusive-interview-with-omkar-patil-ceo-infigon-futures/",
  },
  {
    imageurl: "/images/mediaMentions/img5.svg",
    href: "https://theindiabizz.com/infigon-futures-platforms-for-students-to-help-them-plan-their-career/",
  },
  {
    imageurl: "/images/mediaMentions/img6.svg",
    href: "https://ballsofsteelshow.com/features/in-conversation-with-omkar-patil/",
  },
//   {
//     imageurl: "/images/mediaMentions/img7.svg",
//     href: "https://www.viralindiandiary.com/",
//   },
  {
    imageurl: "/images/mediaMentions/img8.svg",
    href: "https://unboxingstartups.com/blog/startup-of-the-week-infigon-futures/",
  }, 
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

const MediaMentions = () => {
  const router = useRouter();
  return (
    <div className=" mt-[60px] lg:mt-[100px]">
      {/* heading */}
      <div
        className={twMerge(
          font.className,
          "text-[32px] text-center font-bold mx-[20px] leading-[120%]"
        )}
      >
        Media Mentions
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
          {data.map((item, idx) => (
            <div
              onClick={() => router.push(item.href)}
              className="h-[155.54px] relative saturate-200 ml-[15px] grayscale hover:grayscale-0 hover:scale-110 transition hover:cursor-pointer"
              key={idx}
            >
              <Image src={item.imageurl} alt="club image" fill />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
export default MediaMentions;
