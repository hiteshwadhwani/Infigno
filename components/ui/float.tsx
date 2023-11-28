import React from "react";
import Image from "next/image";

const imgData = [
  {
    id: 1,
    img: "/images/Float/housewife.svg",
  },
  {
    id: 2,
    img: "/images/Float/housewife1.svg",
  },
  {
    id: 3,
    img: "/images/Float/housewife2.svg",
  },
  {
    id: 4,
    img: "/images/Float/housewife3.svg",
  },
  {
    id: 5,
    img: "/images/Float/housewife4.svg",
  },
  {
    id: 6,
    img: "/images/Float/housewife5.svg",
  },
  {
    id: 7,
    img: "/images/Float/housewife6.svg",
  },
  {
    id: 8,
    img: "/images/Float/housewife7.svg",
  },
  {
    id: 9,
    img: "/images/Float/housewife8.svg",
  },
  {
    id: 10,
    img: "/images/Float/housewife9.svg",
  },
];

interface RandomImageProps {
  src: string;
}

const RandomImage: React.FC<RandomImageProps> = ({ src }) => {
  const randomPosition = {
    top: `${Math.random() * 80}vh`,
    left: `${Math.random() * 80}vw`,
    width: `${Math.random() * 200 + 100}px`,
    height: `${Math.random() * 200 + 100}px`,
    borderRadius: `${Math.random() * 50 + 25}%`,
  };
    console.log(src);
  return (
    <Image
      src={src}
      alt="Random Image"
      className="absolute rounded-full"
      style={randomPosition}
      width={100}
      height={100}
    />
  );
};

const Float: React.FC = () => {
  return (
      //   <div className="h-screen">
      <>
      {imgData.map((item) => (
        <RandomImage key={item.id} src={item.img} />
      ))}
      </>
    // </div>
  );
};
export default Float;
