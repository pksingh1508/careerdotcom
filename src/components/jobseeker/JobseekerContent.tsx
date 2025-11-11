"use client";
import JobseekerInfo from "./JobseekerInfo";
import { StepWorkBulletPoint } from "../sections/StepWorkBulletPoint";

export function JobseekerContent() {
  return (
    <div>
      <JobseekerInfo />
      {/* step 1 */}
      <StepWorkBulletPoint
        image="https://ik.imagekit.io/eucareerserwis/JobSeeker/Why%20job%20seeker.webp"
        imageAlt="Job Seeker Trust Image"
        heading="Why Job Seekers Trust EU Career Serwis"
        bullet1="Licensed and Registered Agency – Fully obedient accompanying Polish labor and emigration standards."
        bullet2="Legal and Safe Opportunities – All placements trail official work permit and authorization managing."
        bullet3="Transparent Process – Clear contracts, no secret costs, and truthful ideas."
        bullet4="End-to-End Support – Assistance from request, authorization, travel, influx, to local enrollment."
        bullet5="Wide Range of Jobs – Opportunities in skillful, wheeled vehicle for hauling-skillful, and non-skillful functions across enterprises."
        bullet6="Post-Arrival Assistance – Help accompanying reconciliation, PESEL number, savings account, and onboarding."
        bullet7="Trusted by Employers – Strong participations accompanying confirmed associations across Poland and Europe."
      />
      {/* step 2 */}
      <StepWorkBulletPoint
        image="https://ik.imagekit.io/eucareerserwis/JobSeeker/How%20we%20support.webp"
        imageAlt="Job Seeker Support Image"
        heading="How We Support Job Seekers Every Step of the Way"
        bullet1="Candidate Guidance – We help task applicants believe fitness, proof, and task necessities."
        bullet2="Work Permit Assistance – Support in fitting and offering uses to Polish experts."
        bullet3="Visa Processing Support – Guidance on residence assignments, document proof, and approvals."
        bullet4="Travel Arrangements – Assistance accompanying flights, meeting preparation, and adjustment in Poland."
        bullet5="Post-Arrival Help – Support accompanying reconciliation, PESEL enrollment, bank reports, and onboarding."
        bullet6="Job Placement Support – Matching competitors accompanying confirmed employers in accordance with abilities and desires."
        bullet7="Continuous Assistance – Ongoing support to guarantee task applicants establish flatly and work constitutionally."
        isReversed={true}
      />
      {/* step 3 */}
      <StepWorkBulletPoint
        image="https://ik.imagekit.io/eucareerserwis/JobSeeker/Who%20can%20apply.webp"
        imageAlt="Who Can Apply Image"
        heading="Who Can Apply: Eligibility and Requirements for Candidates"
        bullet1="Age Requirement – Candidates must meet the minimum occupied age as per Polish labor regulations."
        bullet2="Skill Level – Open to skillful, almost-skillful, and non-skillful laborers contingent upon the task function."
        bullet3="Nationality – Open to worldwide applicants from Asia, Africa, and Europe."
        bullet4="Legal Documents – Must maintain a genuine authorization and supply inevitable private documents."
        bullet5="Health & Background – Candidates grant permission ought to pass elementary healing and qualification checks."
        bullet6="Language Skills – Not forever required, but elementary ideas abilities in English or Polish are an benefit."
        bullet7="Commitment – Candidates bear suspend to obey Polish labor standards and trade conditions."
      />
      {/* step 4 */}
      <StepWorkBulletPoint
        image="https://ik.imagekit.io/eucareerserwis/JobSeeker/hiring%20journey.webp"
        imageAlt="Job Opportunities Image"
        heading="Job Opportunities We Provide: Skilled, Semi-Skilled, and Non-Skilled Roles"
        bullet1="Skilled Roles – Positions needing particular happening or mechanics knowledge, to a degree motorists, vehicle controllers, and technicians."
        bullet2="Semi-Skilled Roles – Jobs desiring few preparation or happening, containing storage place stick, manufacturing system peasants, and neighborliness helpers."
        bullet3="Non-Skilled Roles – Entry-level positions that demand littlest earlier occurrence, in the way that cleaners, laborers, farm laborers, and approximate assistants."
        bullet4="Industry Diversity – Opportunities across diversified areas containing management, production, building, farming, and neighborliness."
        bullet5="Flexible Positions – Both temporary/migratory and unending service alternatives applicable."
        bullet6="Career Growth Potential – Many functions supply on-the-task preparation and time for ability growth."
        bullet7="Verified Employers – All positions are accompanying constitutionally recorded and trustworthy parties in Poland."
        isReversed={true}
      />
      {/* step 5 */}
      <StepWorkBulletPoint
        image="https://ik.imagekit.io/eucareerserwis/JobSeeker/Licence%20and%20registered%20company.webp"
        imageAlt="Licensed Agency Image"
        heading="The Importance of Working accompanying a Registered and Licensed Agency"
        bullet1="Legal Compliance – Ensures all placements trail Polish labor and emigration societies."
        bullet2="Safety and Security – Protects nominees from illegitimate or immoral work practices."
        bullet3="Transparent Contracts – Guarantees clear conditions, fair hires, and no unseen payments."
        bullet4="Verified Employers – Connects competitors only accompanying reliable and constitutionally recorded parties."
        bullet5="Professional Support – Offers counseling during the whole of work permit, authorization, travel, and post-meeting processes."
        bullet6="Peace of Mind – Candidates can devote effort to something their course experienced all processes are controlled justly."
        bullet7="Long-Term Opportunities – Registered instrumentalities help generate tenable and trustworthy hiring pathways."
      />
      {/* step 6 */}
      <StepWorkBulletPoint
        image="https://ik.imagekit.io/eucareerserwis/JobSeeker/Seamless%20application.webp"
        imageAlt="Seamless Application Image"
        heading="Seamless Application to Arrival: Your Journey Made Easy"
        bullet1="Step-by-Step Guidance – Assistance from beginning use to acquiring the task offer."
        bullet2="Work Permit & Visa Support – Complete management of all permissible documents and residence processes."
        bullet3="Travel Assistance – Help accompanying departure plans and pre-leaving counseling."
        bullet4="Arrival Support – Orientation, reconciliation, and local registrations containing PESEL and savings account arrangement."
        bullet5="Smooth Onboarding – Ensures nominees start work shortly outside delays."
        bullet6="Continuous Assistance – Ongoing support for some challenges confronted afterwards influx in Poland."
        bullet7=""
        isReversed={true}
      />
      {/* step 7 */}
      <StepWorkBulletPoint
        image="https://ik.imagekit.io/eucareerserwis/JobSeeker/Grow%20your%20career.webp"
        imageAlt="Grow Your Career Image"
        heading="Grow Your Career accompanying Trusted Employers Across Europe"
        bullet1="Verified Employers – Connects task applicants accompanying constitutionally recorded and well-known parties."
        bullet2="Diverse Job Opportunities – Positions across diversified labors containing management, production, explanation, neighborliness, and farming."
        bullet3="Career Development – Many acts offer on-the-task preparation and ability augmentation event."
        bullet4="Long-Term Employment – Options for lasting and migratory work to couple course aims."
        bullet5="Safe and Legal Work – Full agreement accompanying labor societies and recruitment rules across Europe."
        bullet6="Supportive Environment – Assistance accompanying onboarding, reconciliation, and unification into the institution."
        bullet7=""
      />
    </div>
  );
}
