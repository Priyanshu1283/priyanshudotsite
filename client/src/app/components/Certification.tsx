"use client";
import { div } from "motion/react-client";
import { AnimatedTestimonials } from "./ui/animated-testimonials";
import TextType from "./ui/textType";
import { cn } from "../lib/utils";

export default function Certification() {
  const testimonials = [
    {
      quote:
        "FrontEnd mine React library and next.js FrameWork se sikh rekha hu. Aur basic HTML , CSS to aati hai additional chij ki mi Tailwind CSS ka use krta hau. ",
      name: "FrontEnd Domination",
      designation: "By - Sheryians Coding School",
      src: "FrontEnd.png",
    },
    {
      quote:
        "Yrr ye wala bass Certification free me college karba reha tha too kr lia.Baki As a cloud Storage Provider ke roop me isko use krta hu development me.",
      name: "AWS",
      designation: "CTO at InnovateSphere",
      src: "AWS.png",
    },
    {
      quote:
        "Yrr ye wali Certification se mine Sare chijee sikh rekhi hai , yeha takk ki ye wali website vi issi ka den hai.. ",
      name: "Cohort - FULLSTACK DEVELOPER",
      designation: "By - Sheryians Coding School",
      src: "Cohort.png",
    },
    {
      quote:
        "Salesforce ko explore kia too CRM ke ware me pata chala. Bhai kasam se bhaut khatarnal chijj hai jarur Explore kro salesforce ko.",
      name: "SalesForce",
      designation: "By - Online Salseforce",
      src: "Salesforce.png",
    },
    {
      quote:
        "Proud to have completed my Internet of Things (IoT) certification. Gained strong knowledge of IoT architecture, sensors, communication protocols, and real-time data processing. Excited to apply these skills to build smart and connected solutions. 🚀",
      name: "IOT",
      designation: "By - PMKVY",
      src: "IOT.png",
    },
    {
      quote:
        "Proud to have earned the Agentforce Specialist certification. This certification validates my ability to configure, customize, and optimize AI-powered agents within the Salesforce ecosystem. Excited to leverage these skills to build intelligent, automated, and customer-focused solutions. 🚀",
      name: "AgentForce",
      designation: "By - Salesforce",
      src: "AgentForce.png",
    },
    {
      quote:
        "Proud to have earned the Salesforce Platform Developer I (PD1) certification. This credential validates my ability to build and deploy custom applications on the Salesforce Platform using Apex, SOQL, and Lightning Web Components. Excited to apply these skills to build scalable and efficient Salesforce solutions. 🚀",
      name: "salesforce platform developer 1(PD1)",
      designation: "By - Salesforce",
      src: "Salesforce_PD1.png",
    }
  ];
  return (
    <div className="h-auto w-full">
      <h1 className={cn("w-full flex justify-center text-[#0dd9e3ff] items-center py-12 text-5xl font-bold bg-black")}>
        <TextType
          text={["Certifications", "Achievements", " My Credentials"]}
          typingSpeed={95}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="_"
        />
      </h1>
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  );
}
