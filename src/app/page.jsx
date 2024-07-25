import Image from "next/image";
import HomePage from "./components/HomePage";
import About from "./about/page";
import Skill from "./skill/page";
import Project from "./project/page";

export default function Home() {
  return (
    <main>
      <HomePage />
      <About />
      <Skill />
      <Project />
    </main>
  );
}
