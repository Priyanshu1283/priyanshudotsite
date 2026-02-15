'use client';
import Navbar from './components/Nav';
import Landing from './components/Landing'
import About from './components/About'
import Skills from './components/Skill';
import Contact from './components/Contact';
import Project from './components/Project';
import Certification from './components/Certification';
export default function Home() {
  return (
    <main className="min-h-screen" style={{ userSelect: "none" }}>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <Landing />
      {/* <div className="min-h-[150vh] pt-20 w-full bg-black"> */}
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="certifications">
        <Certification />
      </div>
      <div id="projects">
        <Project />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </main>
  );
}
