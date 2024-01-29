'use client'
import { AboutSection } from "./components/AboutSection";
import { HomeSection } from "./components/HomeSection";
import { ProjectSection } from "./components/ProjectsSection";

export default function Home() {
  return (
    <>
      <HomeSection />
      <AboutSection />
      <ProjectSection/>
    </>
  );
}
