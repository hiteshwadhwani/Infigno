"use client";

import { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";


// Use dynamic imports for lazy loading
// const CertifiedPlanner = dynamic(() => import("@/components/CertifiedPlanner"));
// const TrainingProcess = dynamic(() => import("@/components/TrainingProcess"));
// const CarrerCounselling = dynamic(() => import("@/components/CarrerCounselling"));
// const ClubPartners = dynamic(() => import("@/components/ClubPartners"));
// const WhatPeopleSaying = dynamic(() => import("@/components/WhatPeopleSaying"));
// const Counsellors = dynamic(() => import("@/components/Counsellors"));
// const Mentors = dynamic(() => import("@/components/Mentors"));
// const MediaMentions = dynamic(() => import("@/components/MediaMentions"));
// const StayConnected = dynamic(() => import("@/components/StayConnected"));
// const FAQ = dynamic(() => import("@/components/FAQ"));
// const BookAFreeSession = dynamic(() => import("@/components/BookAFreeSession"));
// const Footer = dynamic(() => import("@/components/Footer"));
import TrainingProcess from "@/components/TrainingProcess";
import CarrerCounselling from "@/components/CarrerCounselling";
import WhatPeopleSaying from "@/components/WhatPeopleSaying";
import Mentors from "@/components/Mentors";
import MediaMentions from "@/components/MediaMentions";
import StayConnected from "@/components/StayConnected";
import FAQ from "@/components/FAQ";
import Counsellors from "@/components/Counsellors";
import BookAFreeSession from "@/components/BookAFreeSession";

import ClubPartners from "@/components/ClubPartners";
import CertifiedPlanner from "@/components/CertifiedPlanner";
import dynamic from "next/dynamic";

const LandingPageClient = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <CertifiedPlanner />
      <Counsellors />
      <TrainingProcess />
      <CarrerCounselling />
      <ClubPartners />
      <WhatPeopleSaying />
      <Mentors />
      <MediaMentions />
      <StayConnected />
      <FAQ />
      <BookAFreeSession />
    </>
  );
};

export default LandingPageClient;
