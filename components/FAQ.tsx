"use client";

import { AiOutlineDown } from "react-icons/ai";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
      <div className="text-[32px] text-center px-3 font-thin">
        <span className="font-semibold">FAQ’S - </span>Frequently asked
        questions
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
            <AccordionTrigger className="text-[24px] text-[#1E1E1E] font-light hover:no-underline">
              Interact with our growing network of{" "}
              <span className="font-semibold">80+ Mentors</span>
            </AccordionTrigger>
            <AccordionContent className="text-[18px] font-light ml-12">
              Interact with our growing network of{" "}
              <span className="font-semibold">80+</span> Mentors, Interact with
              our growing network of{" "}
              <span className="font-semibold">80+ Mentors </span>Interact with
              our growing network of{" "}
              <span className="font-semibold">80+ Mentors </span>Interact with
              our growing network of 80+ MentorsInteract with our growing
              network
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-2"
            className="py-[20px] px-[30px] rounded-xl bg-[#F2F2F2]"
          >
            <AccordionTrigger className="text-[24px] text-[#1E1E1E] font-light hover:no-underline">
              Interact with our growing network of{" "}
              <span className="font-semibold">80+ Mentors</span>
            </AccordionTrigger>
            <AccordionContent className="text-[18px] font-light ml-12">
              Interact with our growing network of{" "}
              <span className="font-semibold">80+</span> Mentors, Interact with
              our growing network of{" "}
              <span className="font-semibold">80+ Mentors </span>Interact with
              our growing network of{" "}
              <span className="font-semibold">80+ Mentors </span>Interact with
              our growing network of 80+ MentorsInteract with our growing
              network
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-3"
            className="py-[20px] px-[30px] rounded-xl bg-[#F2F2F2]"
          >
            <AccordionTrigger className="text-[24px] text-[#1E1E1E] font-light hover:no-underline">
              Interact with our growing network of{" "}
              <span className="font-semibold">80+ Mentors</span>
            </AccordionTrigger>
            <AccordionContent className="text-[18px] font-light ml-12">
              Interact with our growing network of{" "}
              <span className="font-semibold">80+</span> Mentors, Interact with
              our growing network of{" "}
              <span className="font-semibold">80+ Mentors </span>Interact with
              our growing network of{" "}
              <span className="font-semibold">80+ Mentors </span>Interact with
              our growing network of 80+ MentorsInteract with our growing
              network
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};
export default FAQ;
