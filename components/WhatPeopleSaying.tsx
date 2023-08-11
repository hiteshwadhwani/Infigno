"use client";

import Carousel from "react-multi-carousel";
import Card5 from "./ui/Card5";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
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

const data = [
  {
    heading: "Jheel Tripathi",
    subheading: "12th - Jai Hind College, Mumbai",
    description:
      "“The Infigon mobile application is very user-friendly, and the one on one sessions helped me shortlist my undergrad degree”",
  },
  {
    heading: "Aditya Kumar",
    subheading: "B.Tech IT - DJ Sanghvi Mumbai",
    description:
      '"Infigon helped me develop a clear action plan for my MBA journey, prepared a resume and also connected me with MBA grads to get an understanding from insiders”',
  },
  {
    heading: "Harsh Pednekar",
    subheading: "B.Com - Bhavans College",
    description:
      "“Infigon helped me develop a roadmap for skill development through internships and certifications, which will be of great help after graduation”",
  },
  {
    heading: "Jeeshant Sawant",
    subheading: "BMS - Rithumbara College",
    description:
      '"I highly recommend Infigon for their personalized approach to career guidance and their vast knowledge of career options."',
  },
  {
    heading: "Jheel Tripathi",
    subheading: "12th - Jai Hind College, Mumbai",
    description:
      "“The Infigon mobile application is very user-friendly, and the one on one sessions helped me shortlist my undergrad degree”",
  },
  {
    heading: "Jheel Tripathi",
    subheading: "12th - Jai Hind College, Mumbai",
    description:
      "“The Infigon mobile application is very user-friendly, and the one on one sessions helped me shortlist my undergrad degree”",
  },
  {
    heading: "Jheel Tripathi",
    subheading: "12th - Jai Hind College, Mumbai",
    description:
      "“The Infigon mobile application is very user-friendly, and the one on one sessions helped me shortlist my undergrad degree”",
  },
];

const WhatPeopleSaying = () => {
  return (
    <div className="mt-12 lg:mt-[100px]">
      <div className="text-[32px] text-center px-3">
        What People are <span className="font-semibold">Saying About Us</span>
      </div>
      <div className="mt-12">
        <Carousel
          responsive={responsive}
          autoPlay
          arrows={false}
          autoPlaySpeed={3000}
          infinite={true}
          partialVisible={false}
          customTransition="all 2s ease"
          transitionDuration={1000}
        >
          {data.map((item) => (
            <Card5
              mainClass="items-start p-[25px] w-fit min-h-[254px]"
              headingClass="text-[#194E9F]"
              key={item.heading}
              {...item}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};
export default WhatPeopleSaying;
