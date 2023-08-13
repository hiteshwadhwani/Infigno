import CarrerCounselling from "@/components/CarrerCounselling";
import CertifiedPlanner from "@/components/CertifiedPlanner";
import ClubPartners from "@/components/ClubPartners";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import MediaMentions from "@/components/MediaMentions";
import Mentors from "@/components/Mentors";
import TrainingProcess from "@/components/TrainingProcess";
import WhatPeopleSaying from "@/components/WhatPeopleSaying";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div>
      {/* become a certifiend carrer planner */}
      <CertifiedPlanner />
      <TrainingProcess />
      <CarrerCounselling />
      <ClubPartners />
      <WhatPeopleSaying />
      <Mentors />
      {/* <MediaMentions /> */}
      <FAQ />
      <Footer />
    </div>
  );
}
