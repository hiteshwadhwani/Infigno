import CarrerCounselling from "@/components/CarrerCounselling";
import CertifiedPlanner from "@/components/CertifiedPlanner";
import ClubPartners from "@/components/ClubPartners";
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
    </div>
  );
}
