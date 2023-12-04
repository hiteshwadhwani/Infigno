import React, { useState,useEffect} from "react";
import Image from "next/image";

const imgData = [
    {
      id: 1,
      img: "/images/Float/housewife.svg",
      top: 90,
      right: 500,
      width: 150,
      height: 150,
    },
    {
      id: 2,
      img: "/images/Float/housewife1.svg",
        top: 100,
      right: 150,
      width: 120,
      height: 120,
    },
    {
      id: 3,
      img: "/images/Float/housewife2.svg",
      top: 600,
      right: 550,
      width: 230,
      height: 230,
    },
    {
      id: 4,
      img: "/images/Float/housewife3.svg",
      top: 200,
      right: 50,
      width: 300,
      height: 300,
    },
    {
      id: 5,
      img: "/images/Float/housewife4.svg",
      top: 400,
      right: 130,
      width: 130,
      height: 130,
    },
    {
      id: 6,
      img: "/images/Float/housewife5.svg",
      top: 500,
      right: 550,
      width: 140,
      height: 140,
    },
    {
      id: 7,
      img: "/images/Float/housewife6.svg",
      top: 650,
      right: 250,
      width: 170,
      height: 170,
    },
    {
      id: 8,
      img: "/images/Float/housewife7.svg",
      top: 350,
      right: 550,
      width: 250,
      height: 250,
    },
    {
      id: 9,
      img: "/images/Float/housewife8.svg",
      top: 550,
      right: 80,
      width: 250,
      height: 250,
    },
    {
      id: 10,
      img: "/images/Float/housewife9.svg",
      top: 150,
      right: 550,
      width: 180,
      height: 180,
    },
  ];
  

  interface ImageData {
    id: number;
    img: string;
    top: number;
    right: number;
    width: number;
    height: number;
  }
  
  const Float: React.FC = () => {
    const [viewportDimensions, setViewportDimensions] = useState({
      width: 0,
      height: 0,
    });
    useEffect(() => {
      const handleResize = () => {
        setViewportDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };
  
      // Initial size on mount
      handleResize();
  
      // Event listener for window resize
      window.addEventListener("resize", handleResize);
  
      // Cleanup the event listener on unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  
    return (
      <>
        {imgData.map((item: ImageData) => {
          // Calculate percentages based on current viewport dimensions
          const Right = viewportDimensions.width>1350?50:-20;
  
          return (
            <Image
              key={item.id}
              loading="lazy"
              src={item.img}
              alt={`Random Image ${item.id}`}
              className="absolute rounded-full bg-none bg-right  md:bg-avatar bg-no-repeat bg-cover"
              style={{
                top: item.top,
                right: item.right+Right,
                width: item.width / 2,
                height: item.height / 2,
              }}
              width={100}
              height={100}
            />
          );
        })}
      </>
    );
  };
  
  export default Float;