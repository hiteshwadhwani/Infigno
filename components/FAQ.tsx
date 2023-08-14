"use client";

import { AiOutlineDown } from "react-icons/ai";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Quicksand } from "next/font/google";
import { twMerge } from "tailwind-merge";
const font = Quicksand({ subsets: ["latin"] });

const data = [
  {
    heading: "Interact with our growing network of 80+ Mentors",
    content:
      "Interact with our growing network of 80+ Mentors, Interact with our growing network of 80+ MentorsInteract with our growing network of 80+ MentorsInteract with our growing network of 80+ MentorsInteract with our growing network ",
  },
];

const FAQ = () => {
  return (
    <div className="mt-12 lg:mt-[100px]">
      <div
        className={twMerge(
          font.className,
          "text-[24px] md:text-[32px] text-center px-3 font-thin"
        )}
      >
        <span className="font-bold">FAQ’S - </span>Frequently asked questions
      </div>
      <div>
        <Accordion
          type="single"
          collapsible
          className="w-[90vw] md:w-[80vw] lg:w-[60vw] mx-auto flex flex-col gap-y-[12px] mt-12"
        >
          <AccordionItem
            value="item-1"
            className="py-[20px] px-[30px] rounded-xl bg-[#F2F2F2]"
          >
            <AccordionTrigger className="hover:no-underline">
              <div
                className={twMerge(
                  font.className,
                  "text-[18px] md:text-[24px] text-[#1E1E1E] font-light"
                )}
              >
                Interact with our growing network of{" "}
                <span className="font-bold">80+ Mentors</span>
              </div>
            </AccordionTrigger>
            <AccordionContent
              className={twMerge(
                font.className,
                "text-[12px] md:text-[18px] font-light ml-12"
              )}
            >
              Interact with our growing network of
              <span className="font-bold"> 80+ Mentors</span>, Interact with our
              growing network of
              <span className="font-bold"> 80+ Mentors </span>Interact with our
              growing network of
              <span className="font-bold"> 80+ Mentors </span>Interact with our
              growing network of 80+ MentorsInteract with our growing network
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-2"
            className="py-[20px] px-[30px] rounded-xl bg-[#F2F2F2]"
          >
            <AccordionTrigger className="hover:no-underline">
              <div
                className={twMerge(
                  font.className,
                  "text-[18px] md:text-[24px] text-[#1E1E1E] font-light"
                )}
              >
                What is the course fee
              </div>
            </AccordionTrigger>
            <AccordionContent
              className={twMerge(
                font.className,
                "text-[12px] md:text-[18px] font-light ml-12"
              )}
            >
              Our course enrollment fees is 35K + 18% GST
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-3"
            className="py-[20px] px-[30px] rounded-xl bg-[#F2F2F2]"
          >
            <AccordionTrigger className="hover:no-underline">
              <div
                className={twMerge(
                  font.className,
                  "text-[18px] md:text-[24px] text-[#1E1E1E] font-light"
                )}
              >
                What is the earning potential as a Career Counsellor
              </div>
            </AccordionTrigger>
            <AccordionContent
              className={twMerge(
                font.className,
                "text-[12px] md:text-[18px] font-light ml-12"
              )}
            >
              As a career counsellor, you have an earning potential of up to INR 32.4 Lakh per annum.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-4"
            className="py-[20px] px-[30px] rounded-xl bg-[#F2F2F2]"
          >
            <AccordionTrigger className="hover:no-underline">
              <div
                className={twMerge(
                  font.className,
                  "text-[18px] md:text-[24px] text-[#1E1E1E] font-light"
                )}
              >
                Will the training be online or offline?
              </div>
            </AccordionTrigger>
            <AccordionContent
              className={twMerge(
                font.className,
                "text-[12px] md:text-[18px] font-light ml-12"
              )}
            >
              It will be a mix of online and offline, your theory and psychometric test training will be online, and the sales training will be offline.
            </AccordionContent>
          </AccordionItem>
          
        </Accordion>
      </div>
    </div>
  );
};
export default FAQ;
