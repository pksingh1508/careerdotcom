export type FaqItem = {
  key: string;
  question: string;
  answer: string;
};

export const faqContent = {
  title: "Frequently Asked Questions",
  subtitle: "Get answers to common questions about our services and processes",
  questions: [
    {
      key: "choose",
      question: "Why should I choose EU Career Serwis for my career in Europe?",
      answer:
        "Because we are a registered and trusted recruitment company in Poland, fully compliant with EU laws, ensuring transparency, legal security, and reliable opportunities."
    },
    {
      key: "trust",
      question: "Why should I trust EU Career Serwis today?",
      answer:
        "Because we put people first - protecting candidates from fraud, ensuring legal jobs, and helping companies grow with the right workforce."
    },
    {
      key: "realJobs",
      question: "How do I know the jobs are real and safe?",
      answer:
        "We only work with verified employers who meet EU labor standards, guaranteeing genuine contracts and safe working conditions."
    },
    {
      key: "documents",
      question: "Can you help with work permits and documents?",
      answer:
        "Yes. We work with legal experts to prepare and process all documents - work permits, visas, and contracts - so you do not face stress or delays."
    },
    {
      key: "industries",
      question: "What industries do you recruit for?",
      answer:
        "We specialize in logistics, construction, manufacturing, hospitality, and seasonal work, connecting candidates with sectors that need workers the most."
    },
    {
      key: "startWork",
      question: "How quickly can I start working?",
      answer:
        "Many placements are completed within 2-6 weeks, depending on the role and country, thanks to our fast and efficient recruitment process."
    },
    {
      key: "support",
      question: "Do you provide support after I get the job?",
      answer:
        "Yes. We assist with onboarding, accommodation, relocation, and ongoing support so you feel secure and confident abroad."
    },
    {
      key: "employers",
      question: "Can EU Career Serwis also help employers find workers?",
      answer:
        "Absolutely. We provide staffing and outsourcing solutions to companies across Europe, ensuring reliable, skilled, and motivated workers."
    },
    {
      key: "difference",
      question: "What makes EU Career Serwis different from other agencies?",
      answer:
        "We combine legal expertise, international recruitment experience, and personal care for every client - building trust and long-term success."
    },
    {
      key: "clients",
      question: "How does EU Career Serwis treat its clients?",
      answer:
        "We treat every client with respect, honesty, and professionalism. Whether you are a job seeker or an employer, we listen to your needs, provide clear information, and offer full support throughout the process. Our priority is to build long-term trust and relationships, not just short-term results."
    }
  ],
  cta: {
    heading: "Need more details?",
    description:
      "Connect with our consultants for guidance that is tailored to your goals, from documentation to final placement.",
    button: "Contact Us"
  }
} as const;

export const someFaqContent = {
  heading: "What Makes EU Career Serwis The Best?",
  description:
    "With deep expertise and strong industry knowledge, we guide students to achieve world-class education and turn it into rewarding career opportunities. Our unique services support every stage of their journey, whether the goal is to study, work, or build a life abroad."
} as const;
