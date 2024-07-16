import Image from "next/image";
import HomePage from "./components/HomePage";
import About from "./about/page";

export default function Home() {
  return (
    <main>
      <HomePage />
      <About />
    </main>
  );
}
