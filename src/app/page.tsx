import React from "react";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Skills } from "@/components/sections/Skills";
import { Journey } from "@/components/sections/Journey";
import { Education } from "@/components/sections/Education";
import { Achievements } from "@/components/sections/Achievements";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <main className="flex-1 w-full bg-charcoal text-off-white">
      <Hero />
      <About />
      <FeaturedProjects />
      <Skills />
      <Journey />
      <Education />
      <Achievements />
      <Certifications />
      <Contact />
    </main>
  );
}
