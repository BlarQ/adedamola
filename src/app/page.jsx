import Image from "next/image";
import HomePage from "./components/HomePage";
import About from "./about/page";
import Skill from "./skill/page";
import Project from "./project/page";
import Contact from "./contact/page";
import Footer from "./components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function Home() {
  return (
    <main>
      <HomePage />
      <About />
      <Skill />
      <Project />
      <Contact />
      <Footer />
      <SpeedInsights />
    </main>
  );
}
