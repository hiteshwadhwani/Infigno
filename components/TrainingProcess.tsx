import Image from "next/image";
import Card4 from "./ui/Card4";

const cardData = [
  {
    heading: "Counselling Training",
    description:
      "Get in-depth knowledge of psychometric tests, learn to identify user personas, access an extensive career-library, with 51+ industries and 1300+ career options",
    imageSrc: "/images/training-process/img1.svg",
    show: true
  },
  {
    heading: "Certification",
    description:
      "Earn the prestigious title of a ‘Certified Career Planner’, acknowledged with a certificate awarded by Infigon, a recognized institution accredited by Startup India.",
    imageSrc: "/images/training-process/img2.svg",
    show: false
  },
  {
    heading: "Website/Product Set-up",
    description:
      "Get your own co-branded website set-up with an integrated secure payment portal, and an Intuitive Admin Panel to manage your clients.",
    imageSrc: "/images/training-process/img3.svg",
    show: false
  },
  {
    heading: "Business Set-Up/Sales Training",
    description:
      "Get expert help to boost online presence with social media, lead generation, and sales training.",
    imageSrc: "/images/training-process/img4.svg",
    show: false
  },
  {
    heading: "Lifetime Handholding",
    description:
      "Get instant support for unfamiliar career inquiries made by clients, through our dedicated R&D team.",
    imageSrc: "/images/training-process/img5.svg",
    show: true
  },
];

const TrainingProcess = () => {
  return (
    <div className="my-12 lg:m-20">
      {/* top heading */}
      <div className="flex flex-col items-start lg:items-center gap-y-3 w-[95vw] lg:w-[60vw] m-auto">
        <Image
          src={"/images/logo.svg"}
          className="object-cover"
          width={200}
          height={200}
          alt="logo"
        />

        <h1 className="text-4xl font-semibold">Our 5-step Training Process</h1>
        <div className="text-xl text-neutral-600 lg:text-center">
          <span className="font-semibold">
            In accordance to the New Education Policy 2020
          </span>
          , our student centric 6-step school counselling program, will be
          integrated in students’ curriculum.
        </div>
      </div>

      {/* process */}
      <div className="flex flex-col gap-y-6 my-6">
        {cardData.map((card) => (
          <Card4 key={card.heading} {...card} />
        ))}
      </div>
    </div>
  );
};
export default TrainingProcess;
