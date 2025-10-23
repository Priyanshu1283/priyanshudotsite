"use client";
import React from "react";
import { motion } from "motion/react";
import Link from "next/link";


export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative ">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-black text-lg hover:opacity-[0.9] dark:text-white"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
             
                layoutId="active" // layoutId ensures smooth animation
                className="bg-black dark:bg-zinc-800 backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-max h-full p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className="relative rounded-full border border-transparent dark:bg-black dark:border-white/[0.4] bg-black shadow-input flex items-center justify-center space-x-2 px-8 py-3 md:py-5 gap-6"
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  description,
  href,
  newTab ,
}: {
  description: string;
  href: string;
  newTab?: boolean;
}) => {
  if (href.startsWith("http")) {
    return (
      <a
        href={href}
        target={newTab ? "_blank" : "_self"}
        rel="noopener noreferrer"
        className="block px-4 hover:bg-blue-300 rounded-md"
      >
        {description}
      </a>
    );
  }

  return (
    <Link href={href} className="flex space-x-2 items-center block px-2 hover:bg-blue-300 rounded-4xl">
      <div>
        <p className="text-neutral-700 text-lg max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

