"use client";
import React from "react";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import TextType from "./ui/textType";
import { cn } from "@/lib/utils";

export default function BackgroundBoxesDemo() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Priyanshu_Resume_OS.pdf";
    link.download = "Priyanshu_Resume.pdf"; // downloaded filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-slate-900 relative overflow-hidden">
      <BackgroundBeamsWithCollision>
        <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
          <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

          <h1 className={cn("md:text-6xl text-3xl font-bold text-[#0dd9e3ff] relative z-20")}>
            <TextType
              text={[
                "Welcome to My Portfolio",
                "Hello Guests!",
                "Explore My Work",
                "Discover My Skills",
                "Let's Connect",
              ]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
            />
          </h1>

          <h1 className={cn("md:text-2xl text-xl text-white relative z-20 mt-4")}>
            Hello I am Priyanshu Kumar
          </h1>

          <p className="text-center mt-2 text-neutral-300 relative z-20">
            A passionate Full Stack Developer and Learner.
          </p>
          <button
            onClick={handleDownload}
            suppressHydrationWarning
            className="relative z-20 mt-6 bg-zinc-600 text-white px-6 py-2 rounded-full shadow-md hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300"
          >
            <span className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
              </svg>
              Download Resume
            </span>
          </button>

        </div>
      </BackgroundBeamsWithCollision>
    </div>
  );
}
