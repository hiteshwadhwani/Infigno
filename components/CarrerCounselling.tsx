"use client";

import Image from "next/image";
import { BsDot } from "react-icons/bs";
import { Button } from "./ui/button";

const CarrerCounselling = () => {
  return (
    <div className="w-[90%] xl:w-[70%] mt-12 lg:mt-[100px]  m-auto">
      <div className="text-center text-3xl text-blue-600">
        <span className="font-semibold">Why INFIGON’S</span> Career Counselling
        Program
      </div>
      <div className="bg-gradient-to-br from-[#1E86FF] to-[#0047AB] rounded-2xl px-5 pt-5 md:px-10 md:pt-10 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-6">
          <div>
            <p className="text-white text-sm">Business potential </p>
            <p className="text-slate-800 text-sm">
              Career Counselling from Grade{" "}
              <span className="font-semibold">6th - Graduation</span>
            </p>
            <h1 className="text-4xl text-white mt-10">
              A Revenue of{" "}
              <span className="text-yellow-500">₹32.4 Lakhs per</span> annum*
              for <span className="font-semibold">648 students</span> on an
              average of{" "}
              <span className="font-semibold">₹5000 per student*</span>
            </h1>
            <div className="text-white bg-gradient-to-br from-[#004EC1] rounded-2xl mt-10 md:w-[70%] px-8 py-4">
              <h3 className="text-white mb-2">
                Additional Sources of income
              </h3>
              <ul className="list-disc">
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
        <div className="flex flex-col relative mt-16 min-h-[600px] h-fit">
          <div className="flex flex-col gap-y-8 lg:max-w-[40%]">
            <div className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold">
              Kick-start{" "}
              <span className="text-yellow-400 font-normal">your</span>{" "}
              Counselling business{" "}
              <span className="text-yellow-400 font-normal">today at just</span>{" "}
              ₹10,000
            </div>
            <Button className="w-fit">Know more</Button>
            <Image
              src={"/images/CarrerCounselling/Line.svg"}
              width={150}
              height={10}
              alt="line"
            />
            <div className="text-white font-light">
              Recognised by:{" "}
              <span className="font-semibold text-xl">#startupindia</span>
            </div>
          </div>
          <div className="md:absolute md:bottom-0 md:right-4 lg:right-8 xl:right-20">
            <Image
              src={"/images/CarrerCounselling/img2.svg"}
              alt="image"
              width={500}
              height={600}
              className="mt-10"
            />
          </div>
          <div className="md:absolute bottom-0 mx-auto  text-xl md:text-2xl lg:text-4xl bg-yellow-300 text-slate-600  p-2 md:p-5 rounded-2xl md:rounded-tl-2xl md:rounded-tr-2xl lg:rounded-bl-none lg:rounded-br-none">
            <span className="text-blue-900">Earn</span> up to 32.4 Lakh per
            annum <br className="hidden md:block" /> through Counselling
          </div>
        </div>
      </div>
      <div className="min-h-[154.193px] h-fit px-[50px] rounded-2xl md:bg-[#0047AB] flex flex-col md:grid md:grid-cols-3 mt-12 overflow-hidden items-center border border-slate-200 shadow-4xl md:shadow-none md:border-none">
        <div className="text-lg md:text-2xl lg:text-3xl text-[#0047AB] md:text-white text-center md:text-left py-4">
          Download our Career Counselling Program brochure for more details.
        </div>
        <Button className="bg-white text-[#0047AB] rounded-full w-fit mx-auto shadow-3xl md:shadow-none border border-slate-200 md:border-none hover:bg-white hover:opacity-75 transition">
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
