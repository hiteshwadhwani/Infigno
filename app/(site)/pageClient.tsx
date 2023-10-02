"use client";

import { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import CertifiedPlanner from "@/components/CertifiedPlanner";


// Use dynamic imports for lazy loading
// const CertifiedPlanner = dynamic(() => import("@/components/CertifiedPlanner"));
const TrainingProcess = dynamic(() => import("@/components/TrainingProcess"));
const CarrerCounselling = dynamic(() => import("@/components/CarrerCounselling"));
const ClubPartners = dynamic(() => import("@/components/ClubPartners"));
const WhatPeopleSaying = dynamic(() => import("@/components/WhatPeopleSaying"));
const Mentors = dynamic(() => import("@/components/Mentors"));
const MediaMentions = dynamic(() => import("@/components/MediaMentions"));
const StayConnected = dynamic(() => import("@/components/StayConnected"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const BookAFreeSession = dynamic(() => import("@/components/BookAFreeSession"));
const Footer = dynamic(() => import("@/components/Footer"));
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
      <TrainingProcess />
      <CarrerCounselling />
      <ClubPartners />
      <WhatPeopleSaying />
      <Mentors />
      <MediaMentions />
      <StayConnected />
      <FAQ />
      <BookAFreeSession />
      <Footer/>
    </>
  );
};

export default LandingPageClient;
