"use client";
import React from "react";
import TextType from "./ui/textType";
import { cn } from "../lib/utils";

export default function About() {
  return (
    <section
      id="about"
      className="h-screen w-full bg-black flex items-center justify-center relative overflow-hidden px-4"
    >
      <div className="relative w-full max-w-3xl flex items-center justify-center  mt-16">
        <div className="absolute w-[95%] h-[85%] bg-white/60 backdrop-blur-md rounded-2xl shadow-2xl border border-white/40 rotate-[-6deg] translate-x-5 translate-y-6" />
        <div className="absolute w-[97%] h-[87%] bg-zinc-400 backdrop-blur-md rounded-2xl shadow-2xl border border-white/50 rotate-[4deg] -translate-x-5 translate-y-3" />
        {/* Top Paper with Spiral */}
        <div
          className="relative  w-[92%] h-[86vh] max-h-[700px] 
  rounded-3xl shadow-3xl border border-zinc-200 p-10 md:p-14 
  flex flex-col justify-between z-20 overflow-hidden 
  hover:bg-gradient-to-br from-blue-300 to-zinc-600 
  transition-all duration-500 ease-out
  hover:w-[96%] hover:h-[90vh]"
        >
          {/* Spiral binding */}
          <div className="absolute left-15 top-4 h-full flex  justify-center space-x-13">
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={i}
                className="w-4 h-4 rounded-full  border-[3px] border-zinc-400 bg-black shadow-inner"
              />
            ))}
          </div>
          <div className="absolute left-15 bottom-2 h-full flex  justify-center space-x-16">
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={i}
                className="w-1px h-8 rounded-full border-[3px] border-zinc-400 shadow-inner"
              />
            ))}
          </div>
          {/* Title */}
          <h1
            className={cn(
              "text-4xl md:text-5xl font-semibold text-[#0dd9e3ff] mb-8 italic underline underline-offset-4 decoration-zinc-400"
            )}
          >
            <TextType
              text={["About Me", "Know me!"]}
              typingSpeed={95}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
            />
          </h1>

          {/* Content */}
          <div className="space-y-5 text-zinc-700 leading-relaxed text-lg md:text-xl font-light">
            <p>
              Hello 👋 I’m{" "}
              <span className="font-semibold text-blue-600">
                Priyanshu Kumar
              </span>
              , a passionate{" "}
              <span className="font-medium">Full Stack Developer</span> who
              loves building modern, meaningful web experiences.
            </p>

            <p>
              My journey began with front-end design and evolved into a deep
              love for backend architecture, where I combine creativity with
              clean, efficient logic.
            </p>

            <p>
              I work with{" "}
              <span className="font-medium text-green-600">
                React, Next.js, Node.js
              </span>
              , and <span className="font-medium text-green-600">MongoDB</span>{" "}
              to bring digital ideas to life — and I’m always learning something
              new.
            </p>

            <p>
              When I’m not coding, I’m exploring new designs, refining UI
              animations, or helping others in the dev community.
            </p>
          </div>

          {/* Signature */}
          <div className="flex justify-end mt-10 text-right">
            <div className="flex flex-col items-end">
              <span className="italic text-zinc-600 text-sm mb-1">
                — Priyanshu Kumar
              </span>
              <div className="w-28 h-[2px] bg-zinc-400 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
