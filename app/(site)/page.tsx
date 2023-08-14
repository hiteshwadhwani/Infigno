
import BookAFreeSession from "@/components/BookAFreeSession";
import CarrerCounselling from "@/components/CarrerCounselling";
import CertifiedPlanner from "@/components/CertifiedPlanner";
import ClubPartners from "@/components/ClubPartners";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Mentors from "@/components/Mentors";
import TrainingProcess from "@/components/TrainingProcess";
import WhatPeopleSaying from "@/components/WhatPeopleSaying";
import ScrollToBottom from "react-scroll-to-bottom";

export default function LandingPage() {
  return (
    <div>
      <CertifiedPlanner />
      <TrainingProcess />
      <CarrerCounselling />
      <ClubPartners />
      <WhatPeopleSaying />
      <Mentors />
      <FAQ />
      <BookAFreeSession />
    </div>
  );
}
