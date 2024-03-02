import { Metadata } from "next";
import "./globals.css";
import Header from "./components/header";
import Hero from "./components/hero";

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
      <section id="hero" className="snap-center">
      <Hero />
      </section>

      {/* About */}

      {/* Experiences */}

      {/* Projects */}

      {/* Skills */}

      {/* Contact Me*/}

      {/* Footer */}
    </div>
  );
}
