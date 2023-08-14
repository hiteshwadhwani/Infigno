"use client";
import { Quicksand } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { Button } from "./ui/button";
const font = Quicksand({ subsets: ["latin"] });

const BookAFreeSession = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 650,
      left: 0,
      behavior: 'smooth', // You can use 'auto' for instant scrolling
    });
  }
  
  return (
    <div className="md:hidden p-[20px] grid items-center grid-cols-2 gap-x-[20px] fixed bottom-3 bg-white customShadow left-4 right-4 rounded-[10px] z-30">
      <div className={twMerge("text-[16px] text-[#0047AB] leading-[130%]", font.className)}>
        Book a <span className="font-bold">Free <br /> Demo Session</span>
      </div>
      <Button onClick={scrollToTop} className="text-[14px] font-semibold text-white py-[12px] px-[20px] rounded-full bg-[#0047AB] hover:bg-[#0047AB] hover:opacity-80 cursor-pointer">Register NOW</Button>
    </div>
  );
};
export default BookAFreeSession;
