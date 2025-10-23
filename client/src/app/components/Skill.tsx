"use client";
import React from "react";
import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FaRegCopy } from "react-icons/fa";
import TextType from "./ui/textType";
import { cn } from "../lib/utils";


const Skills = () => {
  const codeString = `
const profile = {
  name: "Priyanshu Kumar",
  title: "Full-Stack Developer | Problem Solver | Tech Explorer",
  skills: [
    "Java", "JavaScript", "TypeScript", "Node.js",
    "Express.js", "MongoDB", "React.js", "Redux", "Next.js",
    "SQL", "DSA", "GitHub", "TailwindCSS","Postman"
  ],
  hireable() {
    return (
      this.traits.hardWorker &&
      this.traits.problemSolver &&
      this.skills.length >= 5 &&
      this.traits.alwaysCurious
    );
  },
  funFact1: "Code so clean, even ChatGPT approves.",
  funFact2: "Debugs faster with coffee ☕.",
  
  speak() {
    console.log("Hi, I'm " + this.name + ", your next favorite developer");
  }
};

profile.speak();
console.log("Hireable? " + (profile.hireable() ? "Yes" : "Maybe try again later.."));
`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString);
    alert("Code copied!");
  };

  return (
    <section
      id="skills"
      className="min-h-screen bg-black flex flex-col items-center justify-center px-4 py-10"
    > 
    <h1 className={cn("md:text-6xl text-3xl font-bold text-[#0dd9e3ff] relative z-20 mt-12")}>
                <TextType
                  text={[
                    "SKILLS",
                    "Weapons",
                    "SuperPowers"
                  ]}
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor={true}
                  cursorCharacter="|"
                />
              </h1>

      {/* Code Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-4xl bg-[#0f172a] rounded-xl shadow-lg overflow-hidden border border-gray-700 "
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-5 py-3 bg-[#111827] text-gray-400 text-sm font-mono border-b border-gray-700">
          <span>developer.js</span>
          <FaRegCopy
            size={16}
            className="cursor-pointer hover:text-white"
            onClick={handleCopy}
          />
        </div>  

        {/* Code section */}
        <SyntaxHighlighter
          language="javascript"
          style={oneDark}
          customStyle={{
            background: "transparent",
            padding: "20px",
            fontSize: "14px",
            lineHeight: "1",
          }}
          showLineNumbers
        >
          {codeString}
        </SyntaxHighlighter>
      </motion.div>
    </section>
  );
};

export default Skills;
