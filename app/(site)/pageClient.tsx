"use client";

import BookAFreeSession from "@/components/BookAFreeSession";
import CarrerCounselling from "@/components/CarrerCounselling";
import CertifiedPlanner from "@/components/CertifiedPlanner";
import ClubPartners from "@/components/ClubPartners";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Mentors from "@/components/Mentors";
import StayConnected from "@/components/StayConnected";
import TrainingProcess from "@/components/TrainingProcess";
import WhatPeopleSaying from "@/components/WhatPeopleSaying";
import { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";

const LandingPageClient = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div>
      <CertifiedPlanner />
      <TrainingProcess />
      <CarrerCounselling />
      <ClubPartners />
      <WhatPeopleSaying />
      <Mentors />
      <StayConnected />
      <FAQ />
      <BookAFreeSession />
    </div>
  );
};

export default LandingPageClient;
