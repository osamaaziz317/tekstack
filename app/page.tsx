import AboutUs from "./components/AboutUs";
import Best from "./components/Best";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Service from "./components/Service";
import SliderHero from "./components/SliderHero";
import Value from "./components/Value";
import Projects from "./components/Projects";
import { listVideoSlugs, readVideoMetadata } from "../lib/videos";

export default function Home() {
  const videoSlugs = listVideoSlugs();
  const videoMeta = readVideoMetadata();

  return (
    <div className="bg-white min-h-screen text-[#1A1A1A]">
      <Navbar />
      <Hero />
      <SliderHero />
      <Service />
      <AboutUs />
      <Best />
      <Projects videoSlugs={videoSlugs} videoMeta={videoMeta} />
      <Value />
      <Footer />
    </div>
  );
}
