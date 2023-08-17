"use client";

import Image from "next/image";
import CertifiedCard from "./ui/CertifiedCard";
import CertifiedForm from "./ui/CertifiedForm";
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
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
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

const ButtonGroup = ({ next, previous, goToSlide, ...rest }: any) => {
  const {
    carouselState: { currentSlide },
  } = rest;
  return (
    <div
      className="carousel-button-group mt-[30px] mb-4 gap-4 flex justify-center
      items-center w-full"
    >
      <button
        className="rounded-full border-2 bg-transparent text-[#0047AB] border-[#0047AB] hover:text-white hover:bg-[#0047AB] transition p-1"
        onClick={() => previous()}
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        className="rounded-full border-2 bg-transparent text-[#0047AB] border-[#0047AB] p-1 hover:text-white hover:bg-[#0047AB] transition"
        onClick={() => next()}
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};

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
      router.push('/thankyou')
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
      <div className="md:customHeight  h-fit w-full bg-gradient-to-br from-[#004EC1] via-[#004EC1]  to-[#1E86FF] md:p-5 xl:py-[30px] xl:px-[40px]">
        <div className="relative px-[20px] py-[20px] md:px-[40px] md:bg-gradient-to-br from-white via-white to-[#1E86FF] rounded-3xl flex flex-col md:flex-row justify-between h-full items-center overflow-hidden">
          <Image
            src={"/images/people.svg"}
            alt="image"
            width={536.372}
            height={502.625}
            className="z-20 absolute bottom-0 left-[50%] transform -translate-x-[55%] hidden xl:block"
          />

          {/* background image   */}
          <Image
            src={"/images/bg2.svg"}
            fill
            className="hidden xl:block absolute transform translate-x-[9%] translate-y-[25%]"
            alt="background"
          />

          <div className="flex flex-col items-start md:items-center md:block bg-gradient-to-br customGradiant2 md:bg-none px-[25px] md:px-[30px] pt-[30px] md:pt-0 py-0 md:py-[30px] md:p-0 rounded-[25px] md:rounded-none mb-[20px] md:mb-0 z-10">
            <h1
              className={twMerge(
                "text-[28px] md:text-[38px] text-[#004EC1] font-medium leading-[120%]",
                font.className
              )}
            >
              Become a <br className="hidden md:block" />
              <span className="font-bold">Certified Career Planner</span>
            </h1>
            <h3 className="text-[16px] md:text-[21px] leading-[120%] font-normal mt-[10px]">
              Help millions of students to <br className="hidden md:block" />
              achieve their career goals
            </h3>
            <div className="mt-[30px] md:mt-[40px] flex flex-col gap-y-[10px] md:gap-y-[15px]">
              <CertifiedCard>
                Earn up to <br className="hidden md:block" />{" "}
                <span className="text-[#F16136] font-semibold text-[14px] md:text-[21px] leading-[140%]">
                  32 Lakh*
                </span>
                <span className="font-semibold text-[14px] md:text-[21px]">
                  {" "}
                  per year
                </span>
              </CertifiedCard>
              <CertifiedCard>
                Lead by ex: <br className="hidden md:block" />
                <span className="text-[#F16136] font-semibold text-[14px] md:text-[21px] leading-[140%]">
                  IIT & IIM
                </span>{" "}
                <span className="font-semibold text-[14px] md:text-[21px]">
                  Graduates
                </span>
              </CertifiedCard>
              <CertifiedCard>
                Trusted by
                <br className="hidden md:block" />{" "}
                <span className="text-[#F16136] font-semibold text-[14px] md:text-[21px] leading-[140%]">
                  50,000+ Students
                </span>
              </CertifiedCard>
            </div>
            <div className="text-[12px] md:text-[16px] mt-3 md:mt-[30px] flex flex-row gap-x-2 md:block py-2 ml-[6px] md:ml-0">
              Recognised by:
              <br className="hidden md:block" />{" "}
              <Image
                src={"/images/startupindia.svg"}
                width={125.24}
                height={27.541}
                alt="startup"
              />
            </div>
            <div>
              <Image
                src={"/images/people.svg"}
                alt="image"
                width={320}
                height={320}
                className="md:hidden"
              />
            </div>
          </div>
          <div className="w-full md:w-[360px] customGradiant3 py-[20px] px-[20px] md:px-[30px] rounded-3xl z-10">
            <h1
              className={twMerge(
                "text-[21px] md:text-[36px] text-[#FDE74C] font-bold leading-[120%]",
                font.className
              )}
            >
              Book a FREE Demo Session
            </h1>
            <h3
              className={
                "text-[18px] md:text-[18px] text-white font-light leading-[120%] mt-[8px]"
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
                          className="py-[18px] px-[27px] h-fit mt-[30px] rounded-[10px]"
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
                        <PhoneInputWithCountrySelect
                          className="outline-none flex w-full border border-input bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 py-[18px] px-[27px] h-fit mt-[15px] rounded-[10px]"
                          placeholder="Phone Number"
                          value={field.value}
                          onChange={field.onChange}
                          defaultCountry="IN"
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
                          className="py-[18px] px-[27px] h-fit mt-[15px] rounded-[10px]"
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
                          className="py-[18px] px-[27px] h-fit mt-[15px] rounded-[10px]"
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
                  className="mt-6 px-[15px] py-[10px] md:py-[15px] w-full text-[18px] h-fit bg-[#FDE74C] hover:bg-[#FDE74C] hover:opacity-80 transition text-[#0047AB] rounded-[10px]"
                >
                  Book Session
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>

      {/* why be certified planner */}
      <div className="mt-12 lg:mt-[100px]  ">
        <div className="bg-gradient-to-br md:bg-none from-[#004EC1] to-[#1E86FF] pb-[20px] md:pb-0 p-[10px] md:p-0 mx-[20px] md:mx-0 rounded-[15px] md:rounded-none">
          <div
            className={twMerge(
              font.className,
              "text-[28px] md:text-[36px] md:text-center mx-[20px] md:mx-[100px] text-white md:text-black leading-[130%] mt-[10px]"
            )}
          >
            Why be a{" "}
            <span className="font-semibold">certified career planner?</span>
          </div>
          <div className="md:bg-[#034DB3] bg-none mt-[30px] bg-right md:py-[20px] md:mx-[100px] rounded-[30px] relative overflow-hidden md:bg-rocket bg-no-repeat bg-cover">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-[20px] lg:w-[50%]">
              <Card2 title="Strong Earning Potential">
                <div>
                  <span className="font-semibold">Earn up to ₹32.4 Lakh</span>{" "}
                  per annum as a Career Counsellor.
                </div>
              </Card2>
              <Card2 title="Nation Building">
                <p>
                  Help confused students to achieve their
                  <span className="font-semibold"> Career goals</span> building
                  a{" "}
                  <span className="font-semibold">
                    bright future for India.
                  </span>
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
            <Image
              src={"/images/employee.svg"}
              alt="image"
              width={600}
              height={431}
              className="absolute bottom-0 right-0 transform -scale-x-[1] hidden lg:block z-10 scale-105"
            />
            {/* <Image
            src={"/images/bg2.svg"}
            height={1244.496}
            width={993.215}
            className="absolute bottom-0 scale-90 translate-x-28 translate-y-"
            alt="background"
          /> */}
          </div>
        </div>
      </div>

      {/* You can be a Certified Career Planner, IF YOU ARE A */}
      <div className="mt-8 md:mt-20 py-10">
        <div
          className={twMerge(
            "md:text-[36px] text-[24px] md:text-center font-bold px-[20px] md:px-0 leading-[130%]",
            font.className
          )}
        >
          <span className="font-semibold md:font-bold">
            You can be a <br className="md:hidden" />
            Certified Career Planner,
          </span>{" "}
          <br className="md:hidden" />
          IF YOU ARE A
        </div>
        <div className="md:mt-[60px] px-[10px] md:px-0">
          <Carousel
            responsive={responsive}
            arrows={false}
            centerMode={!isSmallScreen}
            renderButtonGroupOutside={true}
            customButtonGroup={<ButtonGroup />}
          >
            <Card3 imageSrc="/images/CarrerPlanner/img1.svg">
              <div className="text-[18px] font-normal">
                <span className="font-bold text-[#0047AB]">Housewife </span>
                wanting to do counselling as your passion
              </div>
            </Card3>
            <Card3 imageSrc="/images/CarrerPlanner/img2.svg">
              <div className="text-[18px] font-normal">
                Wanting to{" "}
                <span className="font-bold text-[#0047AB]">
                  start your own business
                </span>
              </div>
            </Card3>
            <Card3 imageSrc="/images/CarrerPlanner/img3.svg">
              <div className="text-[18px] font-normal">
                <span className="font-bold text-[#0047AB]">
                  Working professional
                </span>{" "}
                wanting to switch your career
              </div>
            </Card3>
            <Card3 imageSrc="/images/CarrerPlanner/img4.svg">
              <div className="text-[18px] font-normal">
                Wanting to generate{" "}
                <span className="font-bold text-[#0047AB]">Passive income</span>
              </div>
            </Card3>
            <Card3 imageSrc="/images/CarrerPlanner/img5.svg">
              <div className="text-[18px] font-normal">
                <span className="font-bold text-[#0047AB]">
                  Passionate about helping students
                </span>{" "}
                to achieve their dreams
              </div>
            </Card3>
            <Card3 imageSrc="/images/CarrerPlanner/img6.svg">
              <div className="text-[18px] w-[70%] font-normal">
                <span className="font-bold text-[#0047AB]">
                  Education Business Owner
                </span>{" "}
                wanting to expand your offerings
              </div>
            </Card3>
            <Card3 imageSrc="/images/CarrerPlanner/img7.svg">
              <div className="text-[16px] font-normal">
                <span className="font-bold text-[#0047AB]">
                  Retired Professional
                </span>{" "}
                looking for a low investment business opportunity
              </div>
            </Card3>
            <Card3 imageSrc="/images/CarrerPlanner/img8.svg">
              <div className="text-[18px] font-normal text-white">
                <span className="font-bold">
                  A School/College/Tuition teacher
                </span>{" "}
                or have experience of{" "}
                <span className="font-bold">Education Industry</span>
              </div>
            </Card3>
            <div className="h-[400px] rounded-2xl mx-[10px] customShadow">
                <div className={twMerge(font.className, 'text-p')}>

                </div>
            </div>

          </Carousel>
        </div>
      </div>
    </div>
  );
};
export default CertifiedPlanner
