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
        "Ye wali certification Ind Gov krr waa reha tha too wahi se mine kr li. Q ki mi vii ECE background se hu to kr lia.",
      name: "IOT",
      designation: "By - PMKVY",
      src: "IOT.png",
    },
     {
      quote:
        "AgentForce vi Salesforce se related hai , jo ki ek exam me pass hone ke badd milta hai. Iska Exam thora tough hota hai, waise Online hi hota hai prr bitch-bitch me examener join krke pura room check krrtai hai.",
      name: "AgentForce",
      designation: "VP of Technology at FutureNet",
      src: "AgentForce.png",
    }
  ];
  return (
    <div className="h-auto w-full">
     <h1 className={cn("w-full flex justify-center text-[#0dd9e3ff] items-center py-12 text-5xl font-bold bg-black")}>
      <TextType
              text={["Certifications", "Achievements"," My Credentials"]}
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
