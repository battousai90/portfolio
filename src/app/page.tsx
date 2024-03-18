import { Metadata } from "next";
import "./globals.css";
import Header from "./components/header";
import Hero from "./components/hero";
import About from "./components/about";
import WorkExperience from "./components/workExperience";
import Skills from "./components/skills";

export const metadata: Metadata = {
  title: "Gilbert's Portfolio",
  description: "This is my Portfolio",
  keywords: ["portfolio", "gilbert", "Courtot", "developer", "react", "nextjs", "typescript", "Integration", "API"],
};

export default function Home() {
  return (
    <div className=" bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      {/* Header */}
      <Header />

      {/* Hero */}
      <section id="hero" className="snap-start">
      <Hero />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Experience */}
      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>
      
      {/* Skills */}
      <section id="skills" className="snap-center">
        <Skills />
      </section>

      {/* Projects */}

      {/* Contact Me*/}

      {/* Footer */}
    </div>
  );
}
