"use client";

import Image from "next/image";
import { BsDot } from "react-icons/bs";
import { Button } from "./ui/button";

import { Quicksand, Readex_Pro } from "next/font/google";
import { twMerge } from "tailwind-merge";
const font = Quicksand({ subsets: ["latin"] });
const radix = Readex_Pro({ subsets: ["latin"] });

const CarrerCounselling = () => {
  return (
    <div className="mx-[20px] md:mx-[100px] mt-12 lg:mt-[100px]">
      <div className={twMerge("md:text-center text-[28px] md:text-[36px] text-[#0047AB]", font.className)}>
        <span className="font-bold">Why INFIGON’S</span> Career Counselling
        Program
      </div>
      <div className="md:bg-gradient-to-br from-[#1E86FF] to-[#0047AB] rounded-2xl md:px-10 md:pt-10 mt-10">
        <div className="bg-gradient-to-br from-[#1E86FF] to-[#0047AB] md:bg-none p-[20px] md:p-0 rounded-[20px] md:rounded-none grid grid-cols-1 lg:grid-cols-2 gap-y-[30px] gap-x-5">
          <div>
            <p className="text-white text-sm">Business potential </p>
            <p className="text-slate-800 text-sm">
              Career Counselling from Grade{" "}
              <span className="font-semibold">6th - Graduation</span>
            </p>
            <h1 className="text-[18px] md:text-[32px] text-white mt-[20px] font-light leading-[130%]">
              A Revenue of{" "}
              <span className="text-yellow-500">₹32.4 Lakhs per</span> annum*
              for <span className="font-semibold">648 students</span> on an
              average of{" "}
              <span className="font-semibold">₹5000 per student*</span>
            </h1>
            <div className="text-white bg-gradient-to-br from-[#004EC1] rounded-2xl mt-[30px] md:mt-[50px] py-[30px] px-[40px] ">
              <h3 className="text-white mb-2 text-[16px] md:text-[10px]" >Additional Sources of income</h3>
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
          <div className="relative h-[400px] lg:h-full w-full">
            <Image
              src={"/images/CarrerCounselling/img1.svg"}
              fill
              alt="image"
            />
          </div>
        </div>
        <div className="flex flex-col relative mt-16 min-h-[600px] h-fit bg-gradient-to-br from-[#1E86FF] to-[#0047AB] md:bg-none p-[20px] md:p-0 rounded-[20px] md:rounded-none">
          <div className="flex flex-col lg:max-w-[40%]">
            <div className="text-white text-[24px] md:text-[42px] font-semibold leading-[130%]">
              Kick-start{" "}
              <span className="text-yellow-400 font-normal">your</span>{" "}
              Counselling business{" "}
              <span className="text-yellow-400 font-normal">today at just</span>{" "}
              ₹10,000
            </div>
            <Button className="w-fit mt-[30px]">Know more</Button>
            <Image
              src={"/images/CarrerCounselling/Line.svg"}
              width={150}
              height={10}
              alt="line"
              className="my-[20px]"
            />
            <div className="text-white font-light">
              Recognised by:{" "}
              <span className="font-semibold text-xl">#startupindia</span>
            </div>
          </div>
          <div className="md:absolute md:bottom-0 md:right-4 lg:right-4 xl:right-10 z-10">
            <Image
              src={"/images/CarrerCounselling/img2.svg"}
              alt="image"
              width={500}
              height={600}
              className="mt-10"
            />
          </div>
          <div
            className={twMerge(
              "md:absolute bottom-0 mx-auto  text-xl md:text-[36px] bg-yellow-300 text-[#5F6163]  p-2 md:p-[40px] rounded-2xl md:rounded-tl-2xl md:rounded-tr-2xl lg:rounded-bl-none lg:rounded-br-none leading-[120%] lg:w-[800px]",
              font.className
            )}
          >
            <span className={twMerge("text-blue-900", radix.className)}>
              Earn
            </span>{" "}
            up to <br className="hidden lg:block" />{" "}
            <span className={twMerge("text-blue-900", radix.className)}>
              32.4 Lakh per annum
            </span>{" "}
            <br className="hidden md:block" /> through Counselling
          </div>
        </div>
      </div>
      <div className=" h-fit px-[50px] rounded-2xl md:bg-[#0047AB] flex flex-col md:grid md:grid-cols-3 mt-12 overflow-hidden items-center customShadow  md:shadow-none md:border-none">
        <div className={twMerge("text-lg text-[14px] md:text-[24px] text-[#0047AB] md:text-white text-center md:text-left py-4 font-medium", font.className)}>
          Download our{" "}
          <span className="font-bold">Career Counselling Program brochure</span>{" "}
          for more details.
        </div>
        <Button className="bg-white text-[14px] mb-4 md:mb-0 md:text-[16px] text-[#0047AB] rounded-full w-fit mx-auto shadow-3xl md:shadow-none border border-slate-200 md:border-none hover:bg-white hover:opacity-75 transition">
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
