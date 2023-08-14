"use client";

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
    heading: "What is the course fee",
    content:
      "Our course enrollment fees is 35K + 18% GST.",
  },
  {
    heading: "What is the earning potential as a Career Counsellor",
    content:
      "As a career counsellor, you have an earning potential of up to INR 32.4 Lakh per annum.",
  },
  {
    heading: "Will the training be online or offline?",
    content:
      "It will be a mix of online and offline, your theory and psychometric test training will be online, and the sales training will be offline.",
  },
  {
    heading: "What is the training duration?",
    content:
      "The total training is for 16 hours, which we have divided over a period of 2 months, as after every session there will be some assignments and reading material etc. Each session will be for approx 1.5 hours.",
  },
  {
    heading: "Will the training session be recorded or live?",
    content:
      "All sessions will be live Google meetings with an expert trainer.  ",
  },
  {
    heading: "Can we complete it before the given duration?",
    content:
      "Yes the course can be completed within a period of 1 month as well. ",
  },
  {
    heading: "What will be the batch size?",
    content:
      "There will be at max 3 candidates in every batch.",
  },
];

const FAQ = () => {
  return (
    <div className="mt-[60px] lg:mt-[100px]">
      <div
        className={twMerge(
          font.className,
          "text-[24px] md:text-[32px] text-center px-3 font-thin"
        )}
      >
        <span className="font-bold">FAQ’S - </span> <br className="md:hidden" /> Frequently asked questions
      </div>
      <div>
        <Accordion
          type="single"
          collapsible
          className="w-[90vw] md:w-[80vw] lg:w-[60vw] mx-auto flex flex-col gap-y-[12px] mt-12"
        >
          {data.map((item, idx) => (
            <AccordionItem
            key={idx+1}
            value={`item-${idx+1}`}
            className="py-[20px] px-[30px] rounded-xl bg-[#F2F2F2]"
          >
            <AccordionTrigger className="hover:no-underline">
              <div
                className={twMerge(
                  font.className,
                  "text-[18px] md:text-[24px] text-[#1E1E1E]  text-left leading-[130%]"
                )}
              >
                {item.heading}
              </div>
            </AccordionTrigger>
            <AccordionContent
              className={twMerge(
                "text-[12px] md:text-[18px] ml-14 leading-[130%]"
              )}
            >
              {item.content}
            </AccordionContent>
          </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};
export default FAQ;
