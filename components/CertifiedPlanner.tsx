"use client";

import Image from "next/image";
import CertifiedCard from "./ui/CertifiedCard";
import CertifiedForm from "./ui/CertifiedForm";
import { url } from "inspector";
import Card2 from "./ui/Card2";
import Card3 from "./ui/Card3";
import Carousel from "react-multi-carousel";
import { Button } from "./ui/button";
import { useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 100,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const formSchema = z.object({
  username: z.string().min(2).max(50),
});

const CertifiedPlanner = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div className="flex flex-col w-full">
      {/* Become a Certified Career Planner */}
      <div className="md:h-[760px] h-fit w-full bg-gradient-to-br from-[#004EC1] to-[#1E86FF] md:p-5 xl:p-10">
        <div className="relative p-[40px] md:bg-white rounded-3xl flex flex-col md:flex-row justify-between h-full items-center overflow-hidden">
          <Image
            src={"/images/people.svg"}
            alt="image"
            width={536.372}
            height={502.625}
            className="z-10 absolute bottom-0 left-[50%] transform -translate-x-[50%] hidden xl:block scale-125"
          />

          {/* background image   */}
          <Image
            src={"/images/bg2.svg"}
            fill
            className="hidden xl:block absolute bottom-0 right-0 opacity-60"
            alt="background"
          />

          <div className="flex flex-col items-center md:block bg-gradient-to-br from-[#FFF] to-[#1E86FF] md:bg-none px-[20px] pt-[20px] md:p-0 rounded-3xl md:rounded-none mb-[20px] md:mb-0 z-10">
            <h1 className="text-[28px] md:text-[42px] text-[#004EC1]">
              Become a <br className="hidden md:block" />
              <span className="font-semibold">Certified Career Planner</span>
            </h1>
            <h3 className="text-[16px] md:text-[21px]">
              Help millions of students to achieve their career goals
            </h3>
            <div className="mt-[30px] md:mt-[40px] flex flex-col gap-y-2">
              <CertifiedCard>
                Earn up to <br />{" "}
                <span className="text-[#F16136] font-semibold text-[18px]">
                  32 Lakh*
                </span>
                <span className="font-semibold">per year</span>
              </CertifiedCard>
              <CertifiedCard>
                Earn up to <br />{" "}
                <span className="text-[#F16136] font-semibold text-[18px]">
                  32 Lakh*
                </span>
                <span className="font-semibold">per year</span>
              </CertifiedCard>
              <CertifiedCard>
                Earn up to <br />{" "}
                <span className="text-[#F16136] font-semibold text-[18px]">
                  32 Lakh*
                </span>
                <span className="font-semibold">per year</span>
              </CertifiedCard>
            </div>
            <div className="text-[12px] md:text-[18px] mt-3 md:mt-[80px]">
              Recognised by: <br />{" "}
              <span className="text-xl md:text-2xl font-semibold text-[#F16136]">
                #startupindia
              </span>
            </div>
            <div>
              <Image
                src={"/images/people.svg"}
                alt="image"
                width={320}
                height={309}
                className="md:hidden"
              />
            </div>
          </div>
          <div className="w-full md:w-[360px] bg-gradient-to-br from-[#034DB3] to-[#1F86FF] py-[30px] px-[20px] md:px-[30px] rounded-3xl z-10">
            <h1 className="text-[21px] md:text-[36px] text-[#FDE74C]">
              Book a FREE Demo Session
            </h1>
            <h3 className="text-[18px] md:text-[18px] text-white font-light">
              Tell us more about yourself & we will get back to you{" "}
            </h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className="py-[18px] px-[27px] h-fit mt-[20px]"
                          placeholder="Full Name"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className="py-[18px] px-[27px] h-fit mt-[20px]"
                          placeholder="Phone Number"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className="py-[18px] px-[27px] h-fit mt-[20px]"
                          placeholder="E-Mail"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className="py-[18px] px-[27px] h-fit mt-[20px]"
                          placeholder="What is your current profession?"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="mt-6 px-[20px] py-[15px] md:py-[20px] w-full text-[18px] h-fit bg-[#FDE74C] hover:bg-[#FDE74C] hover:opacity-80 transition text-[#0047AB]"
                >
                  Book Session
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>

      {/* why be certified planner */}
      <div className="mt-12 lg:mt-[100px]">
        <div className="text-[28px] md:text-[36px] text-center">
          Why be a{" "}
          <span className="font-semibold">certified career planner?</span>
        </div>
        <div className="bg-[#034DB3] mt-12 bg-bg2 bg-no-repeat bg-right w-[80vw] mx-auto rounded-[30px] overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 lg:w-[50%]">
            <Card2 title="Strong Earning Potential">
              <div>
                <span className="font-semibold">Earn up to ₹32.4 Lakh</span> per
                annum as a Career Counsellor.
              </div>
            </Card2>
            <Card2 title="Strong Earning Potential">
              <div>
                <span className="font-semibold">Earn up to ₹32.4 Lakh</span> per
                annum as a Career Counsellor.
              </div>
            </Card2>
            <Card2 title="Strong Earning Potential">
              <div>
                <span className="font-semibold">Earn up to ₹32.4 Lakh</span> per
                annum as a Career Counsellor.
              </div>
            </Card2>
            <Card2 title="Strong Earning Potential">
              <div>
                <span className="font-semibold">Earn up to ₹32.4 Lakh</span> per
                annum as a Career Counsellor.
              </div>
            </Card2>
            <Card2 title="Strong Earning Potential">
              <div>
                <span className="font-semibold">Earn up to ₹32.4 Lakh</span> per
                annum as a Career Counsellor.
              </div>
            </Card2>
            <Card2 title="Strong Earning Potential">
              <div>
                <span className="font-semibold">Earn up to ₹32.4 Lakh</span> per
                annum as a Career Counsellor.
              </div>
            </Card2>
          </div>
          <Image
              src={"/images/employee.svg"}
              alt="image"
              width={600}
              height={500}
              className="absolute bottom-0 right-0 transform -scale-x-[1] hidden lg:block"
            />
        </div>
      </div>

      {/* You can be a Certified Career Planner, IF YOU ARE A */}
      <div className="mt-20 bg-slate-100 py-12">
        <div className="text-3xl text-center font-semibold">
          You can be a Certified Career Planner, IF YOU ARE A
        </div>
        <div className="mt-12">
          <Carousel responsive={responsive} infinite partialVisbile={true}>
            <Card3 imageSrc="/images/CarrerPlanner/img1.svg">
              <div className="w-[70%] text-[20px] font-semibold">
                <span className="text-[#0047AB]">Education Business</span> Owner
                wanting to expand your offerings
              </div>
            </Card3>
            <Card3 imageSrc="/images/CarrerPlanner/img2.svg">
              <div className="w-[70%] text-[20px] font-semibold">
                Wanting to{" "}
                <span className="text-[#0047AB]">generate Passive income</span>
              </div>
            </Card3>
            <Card3 imageSrc="/images/CarrerPlanner/img3.svg">
              <div className="w-[70%] text-[20px] font-semibold">
                <span className="text-[#0047AB]">
                  Passionate about helping students
                </span>{" "}
                to achieve their dreams
              </div>
            </Card3>
          </Carousel>
        </div>
      </div>
    </div>
  );
};
export default CertifiedPlanner;
