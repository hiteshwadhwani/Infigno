"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import NavItems from "./ui/NavItems";
import { useScrollToBottom } from "react-scroll-to-bottom";

const Navbar = () => {
  const links = [
    { id: 1, text: "Home", url: "/" },
    { id: 2, text: "Programs", url: "/programs" },
    { id: 3, text: "About Us", url: "/about" },
    { id: 4, text: "App", url: "/app" },
    { id: 5, text: "Login", url: "/login" },
    { id: 6, text: "Book Session", url: "/book-session" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="sticky top-0 z-50 shadow-[0px_0px_20px_0px_#0000001A]">
      <header className=" bg-[#FFFFFF]  flex flex-row justify-between items-center md:mx-8 xl:mx-24 p-2 xl:p-4 ">
        <div className="relative h-[40px] w-[140px]">
          <a href="/">
            <Image
              src={
                "https://uploads-ssl.webflow.com/63f5ff2d3827b085d542bb85/63f7a88567f036ab37603c94_Artboard%201%20copy%202.svg"
              }
              fill
              alt="logo"
            />
          </a>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
          >
            <svg
              className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>

            <svg
              className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button>
          <div className="relative">
            {isOpen && (
              <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="bg-white p-8 flex text-xl flex-col gap-2 items-center rounded-md z-10">
                  <NavItems>Home</NavItems>
                  <NavItems>
                    <div className="flex gap-[5px]">
                      Programs{""}
                      <Image
                        src={"/arrow-down.svg"}
                        height={12}
                        width={12}
                        alt="Down Arrow"
                      />
                    </div>
                  </NavItems>
                  <NavItems>About Us</NavItems>
                  <NavItems>App</NavItems>
                  <div className="flex my-4 gap-2.5 font-normal text-base items-center">
                    <Button
                      variant={"outline"}
                      size={"lg"}
                      className="rounded-[40px] gap-[5px] border-[#0047AB] border-2"
                    >
                      Login
                      <Image
                        src={"/arrow-down.svg"}
                        height={12}
                        width={12}
                        alt="Down Arrow"
                      />
                    </Button>
                    <Button
                      size={"lg"}
                      className="bg-[#0047AB] text-white hover:bg-[#0047AB] hover:opacity-75 transition rounded-[40px]"
                    >
                      Book Session
                    </Button>
                  </div>
                  <Button variant={"destructive"} onClick={() => setIsOpen(!isOpen)} className="mt-4">
                    Close
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="hidden md:flex flex-row items-center font-normal text-base gap-x-6 lg:gap-x-12 xl:gap-x-14">
          <NavItems>Home</NavItems>
          <NavItems>
            <div className="flex gap-[5px]">
              Programs{""}
              <Image
                src={"/arrow-down.svg"}
                height={12}
                width={12}
                alt="Down Arrow"
              />
            </div>
          </NavItems>
          <NavItems>About Us</NavItems>
          <NavItems>App</NavItems>
          <div className="flex gap-2.5 font-normal text-base items-center">
            <Button
              variant={"outline"}
              size={"lg"}
              className="rounded-[40px] gap-[5px] border-[#0047AB] border-2"
            >
              Login
              <Image
                src={"/arrow-down.svg"}
                height={12}
                width={12}
                alt="Down Arrow"
              />
            </Button>
            <Button
              size={"lg"}
              className="bg-[#0047AB] text-white hover:bg-[#0047AB] hover:opacity-75 transition rounded-[40px]"
            >
              Book Session
            </Button>
          </div>
        </div>
      </header>
    </div>
  );
};
export default Navbar;
