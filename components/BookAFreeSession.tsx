"use client";
import { Quicksand } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { Button } from "./ui/button";
const font = Quicksand({ subsets: ["latin"] });

const BookAFreeSession = () => {
  return (
    <div className="md:hidden p-[20px] grid grid-cols-2 gap-x-[20px] fixed bottom-4 bg-white customShadow mx-4 rounded-[10px] z-30">
      <div className={twMerge("text-[16px] text-[#0047AB]", font.className)}>
        Book a <span className="font-bold">Free Demo Session</span>
      </div>
      <Button className="font-semibold text-white py-[12px] px-[20px] rounded-full bg-[#0047AB] hover:bg-[#0047AB] hover:opacity-80 cursor-pointer">Register NOW</Button>
    </div>
  );
};
export default BookAFreeSession;
