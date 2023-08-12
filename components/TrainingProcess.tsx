"use client";

import Image from "next/image";
import Card4 from "./ui/Card4";
import "react-multi-carousel/lib/styles.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const cardData = [
  {
    heading: "Counselling Training",
    description:
      "Get in-depth knowledge of psychometric tests, learn to identify user personas, access an extensive career-library, with 51+ industries and 1300+ career options",
    imageSrc: "/images/training-process/img1.svg",
    show: true,
  },
  {
    heading: "Certification",
    description:
      "Earn the prestigious title of a ‘Certified Career Planner’, acknowledged with a certificate awarded by Infigon, a recognized institution accredited by Startup India.",
    imageSrc: "/images/training-process/img2.svg",
    show: false,
  },
  {
    heading: "Website/Product Set-up",
    description:
      "Get your own co-branded website set-up with an integrated secure payment portal, and an Intuitive Admin Panel to manage your clients.",
    imageSrc: "/images/training-process/img3.svg",
    show: false,
  },
  {
    heading: "Business Set-Up/Sales Training",
    description:
      "Get expert help to boost online presence with social media, lead generation, and sales training.",
    imageSrc: "/images/training-process/img4.svg",
    show: false,
  },
  {
    heading: "Lifetime Handholding",
    description:
      "Get instant support for unfamiliar career inquiries made by clients, through our dedicated R&D team.",
    imageSrc: "/images/training-process/img5.svg",
    show: true,
  },
];

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

const TrainingProcess = () => {
  return (
    <div className="mt-12 lg:mt-[100px]">
      {/* top heading */}
      <div className="flex flex-col items-start lg:items-center gap-y-3 w-[95vw] lg:w-[60vw] m-auto">
        <div className="relative w-[200px] h-[42px]">
          <Image
            src={"/images/logo.svg"}
            className="object-cover"
            fill
            alt="logo"
          />
        </div>

        <h1 className="text-[24px] md:text-[42px] font-semibold">
          Our 5-step Training Process
        </h1>
        <div className="text-[12px] md:text-[21px] text-neutral-600 lg:text-center">
          <span className="font-semibold">
            In accordance to the New Education Policy 2020
          </span>
          , our student centric 6-step school counselling program, will be
          integrated in students’ curriculum.
        </div>
      </div>

      {/* process */}

      {/* desktop view */}
      {/* <div className="hidden lg:block flex-col my-6 mt-[40px] md:mt-[60px]">
        {cardData.map((card) => (
          <Card4 key={card.heading} {...card} />
        ))}
      </div> */}

      <div className="hidden lg:block flex-col mt-[40px] md:mt-[60px]">
          <Card4 heading="Counselling Training" show imageSrc="/images/training-process/img1.svg" number="1">
            <div>Get in-depth knowledge of psychometric tests, learn to identify user personas, access an extensive career-library, with 51+ industries and 1300+ career options</div>
          </Card4>
          <Card4 heading="Certification"  imageSrc="/images/training-process/img2.svg" number="2">
            <div>Earn the prestigious title of a ‘Certified Career Planner’, acknowledged with a certificate awarded by Infigon, a recognized institution accredited by Startup India.</div>
          </Card4>
          <Card4 heading="Website/Product Set-up"  imageSrc="/images/training-process/img3.svg" number="3">
            <div>Get your own co-branded website set-up with an integrated secure payment portal, and an Intuitive Admin Panel to manage your clients.</div>
          </Card4>
          <Card4 heading="Business Set-Up/Sales Training"  imageSrc="/images/training-process/img4.svg" number="4">
            <div>Get expert help to boost online presence with social media, lead generation, and sales training.</div>
          </Card4>
          <Card4 heading="Lifetime Handholding" show imageSrc="/images/training-process/img5.svg" number="5" className="scale-125 xl:scale-110 2xl:scale-105">
            <div>Get instant support for unfamiliar career inquiries made by clients, through our dedicated R&D team.</div>
          </Card4>
      </div>

      {/* mobile view carousel */}
      <div className="lg:hidden m-4">
        <Carousel responsive={responsive}>
          {cardData.map((card) => (
            <div
              key={card.heading}
              className="h-[400px] border border-slate-300 shadow-lg rounded-3xl overflow-hidden"
            >
              <div className="p-6 md:px-20 md:py-12">
                <h1 className="text-2xl md:text-3xl">{card.heading}</h1>
                <p className="text-neutral-600 text-base md:text-xl md:mt-5">
                  {card.description}
                </p>
              </div>
              <div className="relative h-[200px] w-full md:h-full">
                <Image src={card.imageSrc} alt="img1" fill className="" />
                <Image
                  src={"/images/bg2.svg"}
                  alt="img1"
                  fill
                  className={`-z-10 ${!card.show && "hidden"} opacity-75`}
                />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      {/* <MyCarousel /> */}
    </div>
  );
};
export default TrainingProcess;
