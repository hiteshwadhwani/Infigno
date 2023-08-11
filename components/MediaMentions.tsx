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

const images = ['img1', 'img2']

const MediaMentions = () => {
  return (
    <div className="mt-12 lg:mt-[100px]">
      <div className="text-[32px] text-center px-3 font-semibold">
        Media Mentions
      </div>
      <div className="mt-12">
      <Carousel responsive={responsive} autoPlay arrows={false} autoPlaySpeed={3000} infinite={true} partialVisible={false}>
          {images.map((item) => (
            <Card5 mainClass="p-[25px] w-fit h-[155.333px] w-[220.333px]" key={item} imageSrc={`/images/mediaMentions/${item}.svg`} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};
export default MediaMentions;
