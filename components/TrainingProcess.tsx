"use client";

import Image from "next/image";
import Card4 from "./ui/Card4";
import "react-multi-carousel/lib/styles.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cardData = [
  {
    heading: "Counselling Training",
    description:
      "Get in-depth knowledge of psychometric tests, learn to identify user personas, access an extensive career-library, with 51+ industries and 1300+ career options",
    imageSrc: "/images/training-process/img1.webp",
    show: true,
  },
  {
    heading: "Certification",
    description:
      "Earn the prestigious title of a ‘Certified Career Planner’, acknowledged with a certificate awarded by Infigon, a recognized institution accredited by Startup India. Recognized by #StartupIndia",
    imageSrc: "/images/training-process/img2.webp",
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
    partialVisibilityGutter: 80,
  },
};

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

const TrainingProcess = () => {
  return (
    <div className="mt-12 lg:mt-[100px]">
      {/* top heading */}
      <div className="flex flex-col items-start lg:items-center gap-y-3 w-[95vw] lg:w-[65vw] pl-6 md:pl-0 md:mx-auto">
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
        <div className="text-[14px] md:text-[21px] text-neutral-600 lg:text-center leading-[130%]">
          <span className="font-semibold">
            In accordance to the New Education Policy 2020
          </span>
          , our student centric 6-step school counselling program, will be
          integrated in students’ curriculum.
        </div>
      </div>

      {/* desktop view */}
      <div className="hidden lg:block flex-col mt-[40px] md:mt-[60px]">
        <Card4
          heading="Counselling Training"
          show
          imageSrc="/images/training-process/img1.svg"
          number="1"
        >
          <div>
            Get in-depth knowledge of psychometric tests, learn to identify user
            personas, access an extensive career-library, with 51+ industries
            and 1300+ career options
          </div>
        </Card4>
        <Card4
          heading="Certification"
          imageSrc="/images/training-process/img2.svg"
          number="2"
        >
          <div>
            Earn the prestigious title of a ‘Certified Career Planner’,
            acknowledged with a certificate awarded by Infigon, a recognized
            institution accredited by Startup India.
          </div>
        </Card4>
        <Card4
          heading="Website/Product Set-up"
          imageSrc="/images/training-process/img3.svg"
          number="3"
        >
          <div>
            Get your own co-branded website set-up with an integrated secure
            payment portal, and an Intuitive Admin Panel to manage your clients.
          </div>
        </Card4>
        <Card4
          heading="Business Set-Up/Sales Training"
          imageSrc="/images/training-process/img4.svg"
          number="4"
        >
          <div>
            Get expert help to boost online presence with social media, lead
            generation, and sales training.
          </div>
        </Card4>
        <Card4
          heading="Lifetime Handholding"
          show
          imageSrc="/images/training-process/img5.svg"
          number="5"
          className="scale-125 xl:scale-110 2xl:scale-105"
        >
          <div>
            Get instant support for unfamiliar career inquiries made by clients,
            through our dedicated R&D team.
          </div>
        </Card4>
      </div>

      {/* mobile view carousel */}
      <div className="lg:hidden">
        <Carousel
          responsive={responsive}
          partialVisible={true}
          renderButtonGroupOutside={true}
          customButtonGroup={<ButtonGroup />}
          arrows={false}
        >
          {/* {cardData.map((card, idx) => (
            <div
              key={card.heading}
              className="h-[360px] shadow-lg rounded-[15px] overflow-hidden ml-[20px] relative"
            >
              <div className="p-[20px] md:px-20 md:py-12">
                <div className="flex flex-row justify-between gap-x-2 items-start">
                  <h1 className="text-[20px] leading-[130%]">{card.heading}</h1>
                  <Image 
                    src={`/images/numbers/${idx + 1}.svg`}
                    width={25}
                    height={25}
                    alt="number"
                  />
                </div>

                <div className="text-neutral-600 mt-[7px] text-[12px] leading-[130%]">
                  {card.description}
                </div>
              </div>
                <Image  src={card.imageSrc} alt="img1" width={235} height={175.445} className="absolute bottom-0 scale-110 object-center" />
                <Image 
                  src={"/images/bg2.svg"}
                  alt="img1"
                  width={235} height={175.445}
                  className={`-z-10 ${!card.show && "hidden"} opacity-75 absolute bottom-0`}
                />
            </div>  
          ))} */}

          {/* {cardData.map((card, idx) => (
            <div
              key={card.heading}
              className="h-[360px] shadow-lg rounded-[15px] overflow-hidden ml-[20px] flex flex-col justify-between items-center"
            >
              <div className="p-[20px] md:px-20 md:py-12">
                <div className="flex flex-row justify-between gap-x-2 items-start">
                  <h1 className="text-[20px] leading-[130%]">{card.heading}</h1>
                  <Image 
                    src={`/images/numbers/${idx + 1}.svg`}
                    width={25}
                    height={25}
                    alt="number"
                  />
                </div>

                <div className="text-neutral-600 mt-[7px] text-[12px] leading-[130%]">
                  {card.description}
                </div>
              </div>
              <div className="w-[235px] h-[175px] relative">
                <Image 
                  src={card.imageSrc}
                  alt="img1"
                  fill
                  className="absolute bottom-0 scale-110 object-center"
                />
                <Image 
                  src={"/images/bg2.svg"}
                  alt="img1"
                  fill
                  className={`-z-10 ${
                    !card.show && "hidden"
                  } opacity-75 absolute bottom-0`}
                />
              </div>
            </div>
          ))} */}

          <div className="h-[360px] rounded-[15px] overflow-hidden ml-[20px] flex flex-col justify-between items-center">
            <div className="p-[20px] md:px-20 md:py-12">
              <div className="flex flex-row justify-between gap-x-2 items-start">
                <h1 className="text-[20px] leading-[130%]">
                  Counselling Training
                </h1>
                <Image
                  src={`/images/numbers/1.svg`}
                  width={25}
                  height={25}
                  alt="number"
                />
              </div>

              <div className="text-neutral-600 mt-[7px] text-[12px] leading-[130%]">
                Get in-depth knowledge of psychometric tests, learn to identify
                user personas, access an extensive career-library, with 51+
                industries and 1300+ career options
              </div>
            </div>
            <div className="w-[235px] h-[175px] relative">
              <Image
                src="/images/training-process/img1.webp"
                alt="img1"
                fill
                className="absolute bottom-0 scale-125 object-center"
              />
              <Image
                src={"/images/bg2.svg"}
                alt="img1"
                fill
                className={`-z-10 absolute bottom-0 scale-110 translate-x-20 translate-y-10`}
              />
            </div>
          </div>
          <div className="h-[360px]  rounded-[15px] overflow-hidden ml-[20px] flex flex-col justify-between items-center">
            <div className="p-[20px] md:px-20 md:py-12">
              <div className="flex flex-row justify-between gap-x-2 items-start">
                <h1 className="text-[20px] leading-[130%]">Certification</h1>
                <Image
                  src={`/images/numbers/2.svg`}
                  width={25}
                  height={25}
                  alt="number"
                />
              </div>

              <div className="text-neutral-600 mt-[7px] text-[12px] leading-[130%]">
                Earn the prestigious title of a ‘Certified Career Planner’,
                acknowledged with a certificate awarded by Infigon, a recognized
                institution accredited by Startup India. Recognized by
                #StartupIndia
              </div>
            </div>
            <div className="w-[235px] h-[175px] relative">
              <Image
                src="/images/training-process/img2.webp"
                alt="img1"
                fill
                className="absolute bottom-0 scale-125 object-center"
              />
            </div>
          </div>
          <div className="h-[360px]  rounded-[15px] overflow-hidden ml-[20px] flex flex-col justify-between items-center">
            <div className="p-[20px] md:px-20 md:py-12">
              <div className="flex flex-row justify-between gap-x-2 items-start">
                <h1 className="text-[20px] leading-[130%]">
                  Website/ <br /> Product Set-up
                </h1>
                <Image
                  src={`/images/numbers/3.svg`}
                  width={25}
                  height={25}
                  alt="number"
                />
              </div>

              <div className="text-neutral-600 mt-[7px] text-[12px] leading-[130%]">
                Get your own co-branded website set-up with an integrated secure
                payment portal, and an Intuitive Admin Panel to manage your
                clients.
              </div>
            </div>
            <div className="w-[235px] h-[175px] relative">
              <Image
                src="/images/training-process/img3.svg"
                alt="img1"
                fill
                className="absolute bottom-0 scale-125 object-center translate-y-1"
              />
            </div>
          </div>
          <div className="h-[360px]  rounded-[15px] overflow-hidden ml-[20px] flex flex-col justify-between items-center">
            <div className="p-[20px] md:px-20 md:py-12">
              <div className="flex flex-row justify-between gap-x-2 items-start">
                <h1 className="text-[20px] leading-[130%]">
                  Business Set-Up <br /> /Sales Training
                </h1>
                <Image
                  src={`/images/numbers/4.svg`}
                  width={25}
                  height={25}
                  alt="number"
                />
              </div>

              <div className="text-neutral-600 mt-[7px] text-[12px] leading-[130%]">
                Get expert help to boost online presence with social media, lead
                generation, and sales training.
              </div>
            </div>
            <div className="w-[235px] h-[180px] relative">
              <Image
                src="/images/training-process/img4.svg"
                alt="img1"
                fill
                className="absolute bottom-0 scale-150 translate-y-1 object-center"
              />
            </div>
          </div>
          <div className="h-[360px]  rounded-[15px] overflow-hidden ml-[20px] flex flex-col justify-between items-center">
            <div className="p-[20px] md:px-20 md:py-12">
              <div className="flex flex-row justify-between gap-x-2 items-start">
                <h1 className="text-[20px] leading-[130%]">
                  Lifetime Handholding
                </h1>
                <Image
                  src={`/images/numbers/5.svg`}
                  width={25}
                  height={25}
                  alt="number"
                />
              </div>

              <div className="text-neutral-600 mt-[7px] text-[12px] leading-[130%]">
                Get instant support for unfamiliar career inquiries made by
                clients, through our dedicated R&D team.
              </div>
            </div>
            <div className="w-[367.073px] h-[224.631px] relative">
              <Image
                src="/images/training-process/img5.svg"
                alt="img1"
                fill
                className="absolute bottom-0 scale-110  object-center -translate-x-10"
              />
              <Image
                src={"/images/bg2.svg"}
                alt="img1"
                fill
                className={`-z-10 absolute bottom-0 scale-110 translate-x-20 translate-y-10`}
              />
            </div>
          </div>
        </Carousel>
      </div>
      {/* <MyCarousel /> */}
    </div>
  );
};
export default TrainingProcess;
