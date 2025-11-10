"use client";
import { CustomHero } from "../sections/CustomHero";

export function HeroCustomSection() {
  const workButtonsData = [
    { text: "Poland" },
    { text: "Slovakia" },
    { text: "Lithuania" },
    { text: "Czech Republic" },
    { text: "Serbia" },
    { text: "Spain" },
    { text: "Croatia" }
  ];
  const migrateButtonsData = [
    { text: "Germany" },
    { text: "Spain" },
    { text: "Italy" },
    { text: "Finland" }
  ];
  const traineeshipButtonsData = [
    { text: "Spain" },
    { text: "Poland" },
    { text: "Italy" },
    { text: "Portugal" }
  ];
  const studyButtonsData = [
    { text: "Poland" },
    { text: "Finland" },
    { text: "Germany" },
    { text: "Spain" },
    { text: "Portugal" },
    { text: "Latvia" },
    { text: "UK" },
    { text: "Ireland" },
    { text: "Canada" }
  ];
  const investorButtonsData = [
    { text: "Germany" },
    { text: "Slovakia" },
    { text: "Spain" },
    { text: "Lithuania" },
    { text: "Finland" }
  ];
  const visitButtonsData = [
    { text: "Poland" },
    { text: "Switzerland" },
    { text: "Germany" },
    { text: "Latvia" },
    { text: "Finland" },
    { text: "Luxembourg" }
  ];

  return (
    <>
      {/* Work Section */}
      <CustomHero
        heading="Work"
        paragraph1="Are you unsure of which European nation best fits your qualifications, experience, and profile? The first step in creating a safe and fulfilling future is making the correct decision."
        paragraph2="We at [EU Career Serwis] offer individualized career counseling to assist you in investigating prospects with reliable European employers. Our knowledgeable staff will thoroughly evaluate your credentials and suggest the best choices for your professional development."
        buttons={workButtonsData}
        imageSrc={"https://ik.imagekit.io/eucareerserwis/home/work.webp"}
        imageAlt="Work in Europe"
      />

      {/* Migrate Section */}
      <CustomHero
        heading="Migrate"
        paragraph1="Take the first step toward a prosperous and fulfilling future overseas by moving to Europe with EU Career Serwis. Our specialty is helping professionals like you find the ideal nation, opportunity, and career path."
        paragraph2=""
        buttons={migrateButtonsData}
        imageSrc={
          "https://ik.imagekit.io/eucareerserwis/euprimeserwis/home/migrate.webp"
        }
        imageAlt="Migrate to Europe"
        isReversed={true}
      />

      {/* Traineeship Section */}
      <CustomHero
        heading="Traineeship"
        paragraph1="For qualified professionals, we offer traineeship opportunities in several nations.  After completing the training successfully, you will receive a certification and help finding employment with respectable organizations, guaranteeing a career path that supports your objectives and ensures a better future."
        paragraph2=""
        buttons={traineeshipButtonsData}
        imageSrc={
          "https://ik.imagekit.io/eucareerserwis/home/freepik__expand__51386.webp"
        }
        imageAlt="Traineeship in Europe"
      />

      {/* Study Section */}
      <CustomHero
        heading="Study"
        paragraph1="Studying in Europe offers you the chance to experience different cultures, obtain a top-notch education, and lay a solid foundation for your future profession in addition to earning a degree."
        paragraph2=""
        buttons={studyButtonsData}
        imageSrc={
          "https://ik.imagekit.io/eucareerserwis/home/freepik__expand__33230.webp"
        }
        imageAlt="Study in Europe"
        isReversed={true}
      />

      {/* Investor Section */}
      <CustomHero
        heading="Investor"
        paragraph1="We offer several projects in a variety of industries that are designed for expansion and profitability if you're an investor searching for opportunities in Europe.  In order to assist you in finding the best investment, navigating regulations, and accomplishing your strategic objectives in the European market, our team offers end-to-end support."
        paragraph2=""
        buttons={investorButtonsData}
        imageSrc={"https://ik.imagekit.io/eucareerserwis/home/investor.webp"}
        imageAlt="Invest in Europe"
      />

      {/* Visit Section */}
      <CustomHero
        heading="Visit"
        paragraph1="Get in touch with our support staff if you want to travel throughout Europe and need a visitor visa.  We offer thorough advice and support at every stage, guaranteeing a smooth visa application process and enabling you to confidently and easily carry out your travel arrangements."
        paragraph2=""
        buttons={visitButtonsData}
        imageSrc={
          "https://ik.imagekit.io/eucareerserwis/home/freepik__expand__53435.webp"
        }
        imageAlt="Visit Europe"
        isReversed={true}
      />
    </>
  );
}
