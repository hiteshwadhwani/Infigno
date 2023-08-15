"use client";

import Link from "next/link";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-number-input/input";

import { Button } from "@/components/ui/button";
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
import "react-phone-number-input/style.css";
import {
  Globe,
  Heart,
  Instagram,
  InstagramIcon,
  Linkedin,
  Twitter,
} from "lucide-react";
import { ReCAPTCHA } from "react-google-recaptcha";
import { useState } from "react";
import PhoneInputWithCountrySelect from "react-phone-number-input";
import validator from "validator";
import axios from "axios";
import { toast } from "react-hot-toast";
import { saveAs } from "file-saver";
import { useRouter } from "next/navigation";


const formSchema = z.object({
  name: z.string().nonempty({
    message: "Required",
  }),
  phone: z.string().refine(validator.isMobilePhone, {
    message: "Invalid phone number",
  }),
  email: z.string().email(),
});

const Footer = () => {
  const [verified, setIsVerified] = useState(false);
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleRecaptcha = (token: string | null) => {
    if (token) {
      setIsVerified(!!token);
    }
  };
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setLoading(true);
      await axios.post("/api/connect-us", values);
      toast.success("Form Submitted");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  const downloadBrochure = () => {
    const url = "/brochure/Infigon-Brochure.pdf"
    saveAs(url, 'Infigon-Brochure.pdf')
  }

  return (
    <footer className="mt-12 lg:mt-[100px]">
      <div className="bg-[#E8EAEE] py-[30px]">
        <div className="w-[80vw] mx-auto flex flex-col gap-y-[20px]">
          <h1 className="text-[24px] font-semibold">Connect With Us</h1>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col md:flex-row gap-x-[12px] gap-y-3"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Full Name"
                        {...field}
                        className="rounded-full"
                        disabled={loading}

                      />
                    </FormControl>

                    <FormMessage className="text-xs font-normal" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <PhoneInputWithCountrySelect
                          className="flex h-10 w-full rounded-full border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Phone Number"
                          value={field.value}
                          onChange={field.onChange}
                          defaultCountry="IN"
                          disabled={loading}
                        />
                    </FormControl>
                    <FormMessage className="text-xs font-normal" />
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
                        placeholder="E-Mail"
                        {...field}
                        className="rounded-full"
                        disabled={loading}
                      />
                    </FormControl>
                    <FormMessage className="text-xs font-normal" />
                  </FormItem>
                )}
              />
              <ReCAPTCHA
                sitekey="6LeBGJsnAAAAAATFTUv1KWaTZVPX0AeWg8FwT0rV"
                onChange={handleRecaptcha}
              />
              <Button
                className="rounded-full bg-[#0047AB] px-[30px] py-[12px] text-white text-[16px] font-semibold hover:bg-[#0047AB] hover:opacity-80 transition"
                type="submit"
              >
                Submit
              </Button>
            </form>
          </Form>
          <div className="flex flex-col md:flex-row items-center justify-between mt-5">
            <div className="flex flex-row gap-x-4 items-center">
              <p className="text-[18px] font-semibold">Follow us on social |</p>
              <InstagramIcon onClick={() => router.push('https://www.instagram.com/infigon_futures/')} className="w-4 h-4 hover:cursor-pointer hover:text-pink-500 transition" />
              <Linkedin onClick={() => router.push('https://www.linkedin.com/company/infigon-futures/')} className="w-4 h-4 hover:text-[#0088c3] hover:cursor-pointer transition" />
              <Twitter onClick={() => router.push('https://twitter.com/infigoninc')} className="w-4 h-4 hover:text-[#1da0f3] hover:cursor-pointer transition" />
            </div>
            <div className="text-[16px]">
              <span onClick={downloadBrochure} className="underline hover:cursor-pointer hover:opacity-80 transition">
                Download
              </span>{" "}
              <span className="text-blue-600">our Brochure</span>
            </div>
          </div>
          <div className="text-[16px] font-semibold text-center flex items-center justify-center">
            Send us your questions & ideas{" "}
            <Heart className="h-4 w-4 ml-2" color="red" fill="red" />
            <span className="text-[#0047AB] font-normal ml-4 hover:underline hover:opacity-80 hover:cursor-pointer transition">
            support@infigonfutures.com
            </span>
          </div>
          <div className="flex flex-row items-center justify-evenly">
            <div className="hover:cursor-pointer hover:text-slate-600 transition text-center">About us</div>
            <div className="hover:cursor-pointer hover:text-slate-600 transition text-center">Our app</div>
            <div className="hover:cursor-pointer hover:text-slate-600 transition text-center">For students</div>
            <div className="hover:cursor-pointer hover:text-slate-600 transition text-center">For institutions</div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between gap-x-6 w-[80vw] mx-auto pt-6 pb-10">
        <div className="flex flex-row items-center gap-x-4">
          <div className="text-xs text-neutral-500 font-semibold">
            Privacy Policy
          </div>
          <div className="text-xs text-neutral-500 font-semibold">
            Terms of Use
          </div>
          <div className="text-xs text-neutral-500 font-semibold">Legal</div>
          <div className="text-xs text-neutral-500 font-semibold">Cookies</div>
        </div>
        <div className="text-xs text-neutral-500 flex flex-row items-center gap-x-2 font-semibold">
          <Globe className="h-4 w-4" />
          English - India
        </div>
      </div>
    </footer>
  );
};
export default Footer;
