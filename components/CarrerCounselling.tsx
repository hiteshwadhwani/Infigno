"use client";

import Image from "next/image";
import { BsDot } from "react-icons/bs";
import { Button } from "./ui/button";

import { Quicksand, Readex_Pro } from "next/font/google";
import { twMerge } from "tailwind-merge";
const font = Quicksand({ subsets: ["latin"] });
const radix = Readex_Pro({ subsets: ["latin"] });
import { saveAs } from "file-saver";

const CarrerCounselling = () => {
  const downloadBrochure = () => {
    const url = "/brochure/Infigon-Brochure.pdf";
    saveAs(url, "Infigon-Brochure.pdf");
  };
  return (
    <div className="mx-[20px] md:mx-[100px] mt-12 lg:mt-[100px] ">
      <div
        className={twMerge(
          "md:text-center text-[28px] md:text-[36px] text-[#0047AB] leading-[120%]",
          font.className
        )}
      >
        <span className="font-bold">Why INFIGON’S</span> Career Counselling
        Program
      </div>
      <div className="md:bg-gradient-to-br from-[#1E86FF] to-[#0047AB] rounded-2xl md:px-10 md:pt-10 mt-[30px]">
        <div className="bg-gradient-to-br from-[#1E86FF] to-[#0047AB] md:bg-none p-[20px] md:p-[25px] rounded-[15px] md:rounded-none grid grid-cols-1 lg:grid-cols-2 gap-y-0 md:gap-y-[30px] gap-x-5">
          <div>
            <p
              className={twMerge(
                "text-white text-[12px] md:text-[16px] font-bold",
                font.className
              )}
            >
              Business potential{" "}
            </p>
            <p className="text-[#013B8C] text-[16px] md:text-[21px]  mt-[5px] md:mt-[10px]">
              Career Counselling from <br className="md:hidden" /> Grade{" "}
              <span className="font-semibold">6th - Graduation</span>
            </p>
            <h1 className="text-[18px] md:text-[32px] text-white mt-[20px] font-light leading-[130%]">
              A Revenue of{" "}
              <span className="text-[#FDE74C] font-bold">₹32.4 Lakhs</span> per
              annum* for <span className="font-semibold">648 students</span> on
              an average of{" "}
              <span className="font-semibold">₹5000 per student*</span>
            </h1>
            <div className="text-white bg-gradient-to-br from-[#004EC1] rounded-2xl mt-[30px] md:mt-[50px] py-[30px] px-[50px] md:w-[80%]">
              <h3 className="text-white mb-2 text-[10px] md:text-[16px] font-bold">
                Additional Sources of income
              </h3>
              <ul className="list-disc text-[12px] md:text-[18px]">
                <li className="text-white">
                  Referral from Universities and other academic institutions
                </li>
                <li className="text-white ">
                  Referral from NBFCs and other educational institutions
                </li>
                <li className="text-white ">
                  Referral from 3rd party educational service providers
                </li>
              </ul>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-full w-full hidden md:block">
            <Image
              src={"/images/CarrerCounselling/img1.svg"}
              fill
              alt="image"
            />
          </div>
          <div className="relative h-[280px] lg:h-full w-full md:block">
            <Image
              src={"/images/CarrerCounselling/img4.svg"}
              fill
              alt="image"
            />
          </div>
        </div>
        <div className="flex flex-col md:p-[25px] relative mt-[20px] min-h-[600px] h-fit bg-gradient-to-br from-[#1E86FF] to-[#0047AB] md:bg-none p-[20px] rounded-[15px] md:rounded-none">
          <div className="flex flex-col lg:max-w-[50%]">
            <div className="bg-white mb-[10px] md:text-[16px] text-[12px] font-[400] text-transparent bg-clip-text py-[8px] px-[15px] rounded-[5px] border border-white w-fit">
              Enrolment Fee:{" "}
              <span className="font-[600]">₹ 35,000/- + GST</span>
            </div>
            <div
              className={twMerge(
                "text-white text-[24px] md:text-[42px] font-semibold leading-[130%]",
                font.className
              )}
            >
              Kick-start your Counselling business today,<span className="font-[300]">with a first instalment of</span> ₹10,000
            </div>
            <Button className="w-fit mt-[20px] bg-[#FDE74C] text-[#004EC1] text-[12px] ">
              Know more
            </Button>
            <Image
              src={"/images/CarrerCounselling/Line.svg"}
              width={270}
              height={10}
              alt="line"
              className="my-[20px]"
            />
            {/* <div className="text-[#0C5ECA] bg-[#F8F8F8] w-fit font-light text-[12px] md:text-[21.773px] flex flex-row items-center"> */}
            <Image
              src={"/images/Frame.svg"}
              width={321}
              height={41}
              alt="startup"
            />
            {/* </div> */}
          </div>
          <div className="md:absolute md:bottom-0 md:right-4 lg:right-4 xl:right-10 z-10">
            <Image
              src={"/images/CarrerCounselling/img2.webp"}
              alt="image"
              width={500}
              height={600}
              className="mt-10"
            />
          </div>
          <div
            className={twMerge(
              "relative  bottom-0  text-center md:text-left  text-xl md:text-[36px] bg-yellow-300 text-[#0047AB]  p-[20px] md:p-[40px] rounded-[10px] md:rounded-tl-2xl md:rounded-tr-2xl lg:rounded-bl-none lg:rounded-br-none leading-[120%] md:w-[70%] w-[100%] mt-5",
              font.className
            )}
          >
            <span className={twMerge(" font-bold", radix.className)}>Earn</span>{" "}
            up to <br className="hidden lg:block" />{" "}
            <span className={twMerge(" font-bold", radix.className)}>
              32.4 Lakh per annum
            </span>{" "}
            <br className="hidden md:block" /> through Counselling
          </div>
        </div>
      </div>
      <div className="h-fit px-[20px] md:px-[50px] rounded-[15px] md:bg-[#0047AB] flex flex-col md:grid md:grid-cols-3 mt-[20px] md:mt-[50px] overflow-hidden items-center customShadow  md:shadow-none md:border-none">
        <div
          className={twMerge(
            "text-[14px] md:text-[24px] text-[#0047AB] md:text-white text-center md:text-left py-[30px] font-medium leading-[130%]",
            font.className
          )}
        >
          Download our <br className="hidden md:block" />
          <span className="font-bold">
            Career Counselling <br className="md:hidden" /> Program brochure
          </span>{" "}
          for more details.
        </div>
        <Button
          onClick={downloadBrochure}
          className="bg-white text-[14px] mb-4 md:mb-0 md:text-[16px] text-[#0047AB] rounded-[5px] w-full md:w-fit mx-auto md:shadow-none border md:border-none hover:bg-white hover:opacity-75 transition customShadow py-[24px]"
        >
          Download Brochure
        </Button>
        <div className="relative w-full h-full mt-4 hidden md:block">
          <Image
            src={"/images/CarrerCounselling/img3.svg"}
            fill
            alt="image"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default CarrerCounselling;
