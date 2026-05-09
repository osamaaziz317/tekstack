import AboutUs from "./components/AboutUs";
import Best from "./components/Best";
import Contact from "./components/ContactForm";
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
    <>
      <div className="relative mb-[127px] max-tablet:mb-[78px] max-tablet3:mb-[61px]">
        <Navbar />
        <Hero />
        <SliderHero />
        <p className="absolute left-2/4 -translate-x-2/4   service-half-heading text-center text-[150px] max-tablet:text-[90px] max-tablet3:text-[70px] font-medium bg-clip-text text-transparent bg-[linear-gradient(0deg,_#BEC9C3,_#0E0E0E)]">
          Services
        </p>
      </div>
      <Service />
      <AboutUs />
      <Best />
      <Value/>
      <Projects videoSlugs={videoSlugs} videoMeta={videoMeta} />
      <Footer />
    </>
  );
}
