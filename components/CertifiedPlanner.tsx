"use client";

import Image from "next/image";
import CertifiedCard from "./ui/CertifiedCard";
import CertifiedForm from "./ui/CertifiedForm";
import Images from "./ui/float";
import { url } from "inspector";
import Card2 from "./ui/Card2";
import Card3 from "./ui/Card3";
import Carousel from "react-multi-carousel";
import { Button } from "./ui/button";
import { forwardRef, useEffect, useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { twMerge } from "tailwind-merge";
import "react-multi-carousel/lib/styles.css";
import { ChevronLeft, ChevronRight, MoveLeft, MoveRight } from "lucide-react";

import PhoneInput from "react-phone-number-input/input";
import axios from "axios";
import { toast } from "react-hot-toast";
import PhoneInputWithCountrySelect from "react-phone-number-input";
import { Quicksand } from "next/font/google";
const font = Quicksand({ subsets: ["latin"] });
import validator from "validator";
import { useRouter } from "next/navigation";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1300 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1300, min: 1024 },
    items: 3,
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

const formSchema = z.object({
  name: z.string().nonempty({
    message: "Required",
  }),
  phoneNumber: z.string().refine(validator.isMobilePhone, {
    message: "Invalid phone number",
  }),
  email: z.string().email(),
  currentProfession: z.string().min(1),
});

const CertifiedPlanner = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1200px)");
    mq.addEventListener("change", () => {
      setIsSmallScreen(mq.matches);
    });
  }, []);
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      currentProfession: "",
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setLoading(true);
      await axios.post("https://api.infigon.app/lead/book-session-ccp", values);
      toast.success("Session booked");
      router.push("/thankyou");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="flex flex-col w-full">
      {/* Become a Certified Career Planner */}
      <div className="h-full md:customHeight w-full  md:p-5 xl:py-[30px] xl:px-[40px] py-[30px]">
        <div className="px-[20px] py-[20px] rounded-3xl grid md:grid-cols-2 grid-cols-1 md:flex-row gap-y-5  h-full justify-items-center overflow-hidden">
          <div className="flex flex-col md:block m-auto  bg-none rounded-[25px] px-[25px] md:px-[30px] pt-[30px] md:pt-[30px] py-0 md:py-[30px] md:p-0  md:rounded-none mb-[20px] md:mb-0 ">
            <h1
              className={twMerge(
                "text-[28px] md:text-[42px] text-[#1E2327] font-medium leading-[120%]",
                font.className
              )}
            >
              Become a <br className="hidden md:block" />
              <span className="font-bold">Certified Career Planner</span>
            </h1>
            <h3 className="text-[16px] md:text-[21px] leading-[120%] font-normal mt-[10px]">
              Help millions of students to achieve their career goals
            </h3>
            <div className="mt-[30px] md:mt-[40px] flex flex-row gap-x-[7px] md:gap-x-[8.8px]">
              <CertifiedCard>
                Earn up to <br className="hidden md:block" />{" "}
                <span className="text-[#004EC1] font-semibold text-[14px] md:text-[21px] leading-[140%]">
                  32 Lakh*
                </span>
                <br className="hidden md:block" />{" "}
                <span className="text-[#004EC1] font-semibold text-[14px] md:text-[21px]">
                  {" "}
                  per year
                </span>
              </CertifiedCard>
              <CertifiedCard>
                Lead by ex: <br className="hidden md:block" />
                <span className="text-[#004EC1]font-semibold text-[14px] md:text-[21px] leading-[140%]">
                  IIT & IIM
                </span>{" "}
                <br className="hidden md:block" />{" "}
                <span className="text-[#004EC1] font-semibold text-[14px] md:text-[21px]">
                  Graduates
                </span>
              </CertifiedCard>
              <CertifiedCard>
                Trusted by
                <br className="hidden md:block" />{" "}
                <span className="text-[#004EC1] font-semibold text-[14px] md:text-[21px] leading-[140%]">
                  50,000+ <br className="hidden md:block" /> Students
                </span>
              </CertifiedCard>
            </div>
            <div className="text-[12px] font-[500] text-[#3C3C3C] md:text-[16px] mt-3 md:mt-[30px] flex flex-row gap-y-2 md:block py-2 ml-[6px] md:ml-0">
              Recognised by:
              <br className="hidden md:block" />{" "}
              <Image
                src={"/images/Government.svg"}
                width={174.87}
                height={50}
                alt="startup"
              />
            </div>
          </div>
          <div className="flex flex-col" >
            <div className="md:hidden hidden lg:flex w-1/2 -z-10">
              <Images />
            </div>
            <div className="md:w-[360px] bg-[#FFFFFF] shadow-[0px_0px_20px_0px_#00000033] py-[20px] px-[20px] md:px-[30px] rounded-3xl z-10">
            <h1
              className={twMerge(
                "text-[21px] md:text-[32px] text-[#004EC1] font-bold leading-[120%]",
                font.className
              )}
            >
              Book a FREE Demo Session
            </h1>
            <h3
              className={
                "text-[12px] md:text-[16px] text-[#5F6163] font-light leading-[120%] mt-[8px]"
              }
            >
              Tell us more about yourself <br className="hidden md:block" /> &
              we will get back to you{" "}
            </h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className="py-[18px] px-[27px] h-fit mt-[30px] bg-[#E6E6E6] rounded-[10px]"
                          placeholder="Full Name"
                          disabled={loading}
                          {...field}
                        />
                      </FormControl>

                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className="py-[18px] px-[27px] h-fit bg-[#E6E6E6] mt-[15px] rounded-[10px]"
                          placeholder="Phone Number"
                          {...field}
                          disabled={loading}
                        />
                      </FormControl>

                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className="py-[18px] px-[27px] h-fit bg-[#E6E6E6] mt-[15px] rounded-[10px]"
                          placeholder="E-Mail"
                          {...field}
                          disabled={loading}
                        />
                      </FormControl>

                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="currentProfession"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className="py-[18px] px-[27px] bg-[#E6E6E6] h-fit mt-[15px] rounded-[10px]"
                          placeholder="What is your current profession?"
                          {...field}
                          disabled={loading}
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  disabled={loading}
                  className="mt-6 px-[15px] py-[10px] md:py-[15px] w-full text-[18px] h-fit bg-gradient-to-b from-blue-500 to-blue-500 hover:from-blue-600 hover:to-blue-600 hover:opacity-80 transition text-[#FFFFFF] rounded-[10px]"
                >
                  Book Session
                </Button>
              </form>
            </Form>
          </div>
          </div>
          
        </div>
      </div>

      {/* why be certified planner */}
      <div className="mt-12 py-5 md:py-10 lg:mt-[100px] bg-[#F6F6F6] ">
        <div className="bg-[#FFFFFF] pb-[20px] p-[10px] mx-[50px] md:mx-[150px] rounded-[20px] py-10 shadow-[0px_0px_20px_0px_#00000040]">
          <div
            className={twMerge(
              font.className,
              "text-[28px] md:text-[36px] text-center mx-[30px] md:mx-[100px] text-black leading-[130%] mt-[10px]"
            )}
          >
            Why be a{" "}
            <span className="font-semibold">certified career planner?</span>
          </div>
          <div className="flex flex-col gap-[15px] mt-[30px] md:py-[20px] md:mx-[100px]  relative overflow-hidden ">
            <Card2 title="Strong Earning Potential">
              <div>
                <span className="font-semibold">Earn up to ₹32.4 Lakh</span> per
                annum as a Career Counsellor.
              </div>
            </Card2>
            <Card2 title="Nation Building">
              <p>
                Help confused students to achieve their
                <span className="font-semibold"> Career goals</span> building a{" "}
                <span className="font-semibold">bright future for India.</span>
              </p>
            </Card2>
            <Card2 title="Government Initiatives">
              <div>
                New Education Policy 2020,{" "}
                <span className="font-semibold">
                  mandates career guidance for all students.
                </span>
              </div>
            </Card2>
            <Card2 title="Lack of Awarenes">
              <div>
                <span className="font-semibold">90% Indian students</span> are
                only aware of the top{" "}
                <span className="font-semibold">7 career options.</span> 
              </div>
            </Card2>
            <Card2 title="Rising Demand">
              <div>
                35 Crore Graduate students in India, but{" "}
                <span className="font-semibold">65% are unemployable.</span>
              </div>
            </Card2>
            <Card2 title="Pool of Opportunities">
              <div>
                <span className="font-semibold">1300+ career</span> and{" "}
                <span className="font-semibold">400+ Education</span> Degrees
                are available in India. 
              </div>
            </Card2>
          </div>
        </div>
      </div>

      {/* You can be a Certified Career Planner, IF YOU ARE A */}
      <div className="mt-8 md:mt-20 p-10">
        <div
          className={twMerge(
            "md:text-[36px] text-[24px] text-center md:text-center font-bold px-[20px] md:px-0 leading-[130%]",
            font.className
          )}
        >
          <span className="font-[400]">
            You can be a <br className="md:hidden" />
            <span className="font-[700]">Certified Career Planner</span>
          </span>{" "}
        </div>
        <div className="md:mt-[60px] md:px-[10px]  md:mx-0">
          <Carousel
            responsive={responsive}
            autoPlay
            arrows={false}
            autoPlaySpeed={1500}
            infinite={true}
            customTransition="all 2s ease"
            transitionDuration={3000}
            containerClass="carousel-container"
          >
            <Card3 imageSrc="/images/CarrerPlanner/8.png">
              <div className="text-[16px] font-normal">
                <span className="font-bold text-[#1E2327]">Housewife </span>
                wanting to do counselling as your passion
              </div>
            </Card3>
            <Card3 imageSrc="/images/CarrerPlanner/1.png">
              <div className="text-[16px] font-normal">
                Wanting to{" "}
                <span className="font-bold text-[#1E2327]">
                  start your own business
                </span>
              </div>
            </Card3>
            <Card3 imageSrc="/images/CarrerPlanner/7.png">
              <div className="text-[16px] font-normal">
                <span className="font-bold text-[#1E2327]">
                  Working professional
                </span>{" "}
                wanting to switch your career
              </div>
            </Card3>
            <Card3 imageSrc="/images/CarrerPlanner/3.png">
              <div className="text-[16px] font-normal">
                Wanting to generate{" "}
                <span className="font-bold text-[#1E2327]">Passive income</span>
              </div>
            </Card3>
            <Card3 imageSrc="/images/CarrerPlanner/5.png">
              <div className="text-[16px] font-normal">
                <span className="font-bold text-[#1E2327]">
                  Passionate about helping students
                </span>{" "}
                to achieve their dreams
              </div>
            </Card3>
            <Card3 imageSrc="/images/CarrerPlanner/4.png">
              <div className="text-[16px]  font-normal">
                <span className="font-bold text-[#1E2327]">
                  Education Business Owner
                </span>{" "}
                wanting to expand your offerings
              </div>
            </Card3>
            <Card3 imageSrc="/images/CarrerPlanner/2.png">
              <div className="text-[16px] font-normal">
                <span className="font-bold text-[#1E2327]">
                  Retired Professional
                </span>{" "}
                looking for a low investment business opportunity
              </div>
            </Card3>
            <Card3 imageSrc="/images/CarrerPlanner/6.png">
              <div className="text-[16px] font-normal">
                <span className="font-bold text-[#1E2327]">
                  A School/College/Tuition teacher
                </span>{" "}
                or have experience of{" "}
                <span className="font-bold">Education Industry</span>
              </div>
            </Card3>
          </Carousel>
        </div>
      </div>
    </div>
  );
};
export default CertifiedPlanner;
