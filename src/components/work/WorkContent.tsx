"use client";

import { StepWork } from "@/components/work/StepWork";
import { GovernmentLinks } from "@/components/sections/GovernmentLinks";
import WorkInfo from "./WorkInfo";
import { RecentTestimonials } from "../sections/RecentTestimonials";
import { RecentBlog } from "../sections/RecentBlog";
import { NewsSection } from "../immigration_faq/NewsSection";

export function WorkContent() {
  return (
    <>
      {/* Step - 0 */}
      <StepWork
        image="https://ik.imagekit.io/eucareerserwis/work/apply%20work%20permmit.webp"
        imageAlt="Work Permit in Poland"
        heading="Why You Should Work in Poland (Europe)"
        paragraph1="Opportunities for employment in a range of industries are safe, legal, and accessible throughout Europe, especially in Poland.  Workers are strongly protected by Polish labor laws, which guarantee equitable pay, controlled working hours, and access to social benefits.  Motivated people can start a career in Europe more easily because there are many skilled and unskilled jobs available.  Candidates are assisted by EU Career Serwis at every stage, including obtaining work permits, processing visas, and preparing all required legal paperwork."
        paragraph2="Formal and transparent, employment contracts specify the terms of pay, working hours, and benefits for employees.  Poland has a professional, cooperative work culture that values dependability, commitment, and productive teamwork.  Logistics, construction, manufacturing, hospitality, agriculture, and transportation are important industries with high demand.  Warsaw, Krakow, Gdansk, Wroclaw, and Poznan are important cities with lots of job opportunities."
        paragraph3="There are long-term and seasonal jobs available, offering flexibility to meet a range of career goals.  Workers can improve their language skills, acquire useful work experience in Europe, and develop practical skills."
        paragraph4="Support with accommodation and relocation ensures a comfortable and secure transition for foreign workers. Overall, Poland offers a combination of economic opportunity, legal protection, and personal growth, making it an ideal destination for building a successful career in Europe."
      />
      {/* work info step */}
      <WorkInfo />

      {/* Step - 1 */}
      <StepWork
        image="https://ik.imagekit.io/eucareerserwis/employer/document%20prepare.webp"
        imageAlt="Step 1: Apply for Work Permit"
        heading="Step 1: Apply for Work Permit"
        paragraph1="The first step in obtaining a work permit in Poland is for your employer to formally apply to the local Voivodeship Office.  This application contains comprehensive details about the role you will occupy, such as your job title and main duties.  Additionally, it details the suggested salary, guaranteeing that it satisfies Polish labor law's minimal requirements.  The employer must justify the hiring of a foreign employee by proving that there isn't a qualified local applicant."
        paragraph2="The employer guarantees that the job is entirely lawful and compliant with Polish labor laws by submitting this application.  To ensure that the position satisfies all legal and industry-specific requirements, the authorities thoroughly examine the application."
        paragraph3="By ensuring accountability and transparency in the hiring process, this step safeguards both the employer and the employee.  Additionally, it produces a formal record of the intended employment, which is necessary for every step that follows in the process of obtaining a work permit and visa."
        paragraph4=""
        isReversed={true}
      />
      {/* Step - 2 */}
      <StepWork
        image="https://ik.imagekit.io/eucareerserwis/work/work%202.webp"
        imageAlt="Receive Work Permit Image"
        heading="Step 2: Receive Work Permit & Prepare Documentation"
        paragraph1="The document, which certifies that the employment has been approved by the Polish authorities, is formally given to the candidate upon approval of the work permit.  A vital step in the legal employment process is obtaining the work permit, which certifies the employer's and employee's eligibility to work in Poland.  This permit acts as official proof that the hiring of a foreign employee is lawful and that the position complies with Polish labor laws.  The candidate must get all the paperwork needed for the next step of the procedure after receiving the work permit."
        paragraph2="A current passport is essential for applying for a visa and gaining entry into Poland.  The terms of the employment contract, which include pay, working hours, benefits, and length of employment, must also be thoroughly examined and prepared.  Proof of lodging, health insurance, and any forms needed by the Polish consulate or embassy are examples of additional documentation.  Every document must be accurate, comprehensive, and in line with the information supplied in the work permit application."
        paragraph3="A seamless and prompt visa application process is ensured by properly preparing these documents.  Additionally, it shows authorities that both the employer and the employee are adhering to the law."
        paragraph4=""
      />
      {/* Step - 3 */}
      <StepWork
        image="https://ik.imagekit.io/eucareerserwis/work/work%203.webp"
        imageAlt="Visa Approval Image"
        heading="Step 3: Visa Approval"
        paragraph1="Non-EU nationals must apply for a National Visa (D-type) at the closest Polish consulate or embassy in their home country after obtaining the authorized work permit.  This visa, which usually covers stays longer than 90 days, is necessary to enter Poland lawfully for work.  The application procedure guarantees that the candidate's employment complies with all EU and Polish immigration regulations."
        paragraph2="In order to prove their eligibility and support their visa application, applicants must submit a number of important documents.  The authorized work permit, which verifies that the employer is permitted to hire the foreign worker, is one of the important documents.  The employment contract, which outlines the terms of employment, compensation, duration, and job responsibilities, is also necessary."
        paragraph3="To ensure correct identification and travel authorization for entry into Poland, a valid passport must be presented.  To demonstrate that the applicant has a place to stay upon arrival and satisfies basic living requirements, proof of accommodations is frequently needed."
        paragraph4=""
        isReversed={true}
      />
      {/* Step - 4 */}
      <StepWork
        image="https://ik.imagekit.io/eucareerserwis/work/work%204.webp"
        imageAlt="Arrival in Poland Image"
        heading="Step 4: Arrival in Poland"
        paragraph1="Following approval of the work permit and National Visa (D-type), the applicant may lawfully travel to Poland for employment.  To ensure compliance with Polish immigration laws, it is imperative to enter the country with the authorized documents."
        paragraph2="Candidates must finish the administrative processes that are necessary for foreign workers upon arrival.  Registering their residential address with the local municipal office (Urún Miasta or Urvé Gminy) is one of the first steps.  Access to social services and official correspondence requires address registration, which is mandated by law.  In order to guarantee appropriate taxation and healthcare coverage, candidates must also register for the Polish social security system (ZUS).  This procedure frequently includes registering for health insurance, which gives them access to medical care while they are there.  Completing these processes on time helps prevent penalties, legal troubles, or job delays."
        paragraph3="EU Career Serwis helps you open a local bank account so you can safely receive your salary after you arrive in Poland.  Additionally, we assist you in obtaining a PESEL number, which is necessary for social security, taxes, and public service access."
        paragraph4=" This assistance guarantees that you can manage your finances, begin employment lawfully, and settle in Poland with ease."
      />
      {/* Step - 5 */}
      <StepWork
        image="https://ik.imagekit.io/eucareerserwis/work/work%205.webp"
        imageAlt="Sign the Contract Image"
        heading="Step 5: Sign the Contract & Start Work"
        paragraph1="Officially signing an employment contract with your Polish employer is the last step in the hiring process. The terms of your employment, including your pay, working hours, benefits, and job duties, are formalized in this contract. Both the employer and the employee are legally bound by Polish labor laws when they sign the contract. It lowers the possibility of miscommunications or conflicts by giving both parties security and clarity."
        paragraph2="You are prepared to start working because you have your work permit, visa, PESEL number, and bank account ready. Beginning your lawful employment certifies that you have complied with all Polish and EU labor regulations."
        paragraph3="To acquaint you with workplace protocols and expectations, the employer may offer orientation or training. In Poland, your employment contract protects your rights and forms the basis of your professional relationship."
        paragraph4="In order to facilitate a seamless transition, EU Career Serwis continues to offer advice and assistance during your first few days of employment. After completing all legal and administrative procedures, you can fully concentrate on carrying out your responsibilities. The recruitment and relocation process has been successfully completed at this point."
        isReversed={true}
      />

      <RecentTestimonials />
      <RecentBlog />
      <NewsSection />
      {/* Government Links Section */}
      <GovernmentLinks />
    </>
  );
}
