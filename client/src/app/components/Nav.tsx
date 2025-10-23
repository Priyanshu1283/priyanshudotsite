"use client";
import React, { useState } from "react";
import { Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { Button } from "./ui/button_moving-border"


export default function Navbar() {
  const [active, setActive] = useState<string | null>(null);
  
  return (
    <nav className=" w-[60%] z-10  absolute top-2 left-[50%] transform -translate-x-1/2 md:w-[45%]">
      <Menu setActive={setActive}>
        <MenuItem  setActive={setActive} active={active} item="Pages">
          <ProductItem description="Landing Page" href="/" /> 
          <ProductItem description="About Me" href="#about" /> 
          <ProductItem description="Skills" href="#skills" /> 
          <ProductItem description="Certifications" href="#certifications" />   
          <ProductItem description="Projects" href="#projects" /> 
          <ProductItem description="Contact Me" href="#contact" /> 
          
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Social">
          <ProductItem description="LinkedIn" href="https://www.linkedin.com/in/priyanshu-kumar-03310a253/" newTab /> 
          <ProductItem description="GitHub" href="http://github.com/Priyanshu1283" newTab /> 
          <ProductItem description="Leetcode" href="https://leetcode.com/u/Pranshu_066/" newTab />
          <ProductItem description="Twitter" href="https://x.com/ShivamS89004941" newTab />
        </MenuItem> 
       <Button className="rounded-4xl transition-colors duration-300">
        <ProductItem description="T☕a" href="/routes" />
       </Button>

      </Menu>
    </nav>
  );
}