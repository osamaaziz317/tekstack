import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import { listVideoSlugs, readVideoMetadata } from "../../lib/videos";

export const metadata = {
  title: "Success Stories & Case Studies | Tekstack",
  description: "Explore real-world deployments of autonomous agents and enterprise workflow automation.",
};

export default function StoriesPage() {
  const videoSlugs = listVideoSlugs();
  const videoMeta = readVideoMetadata();

  return (
    <div className="bg-white min-h-screen flex flex-col text-[#1A1A1A]">
      <Navbar />
      <main className="flex-1">
        <Projects videoSlugs={videoSlugs} videoMeta={videoMeta} />
      </main>
      <Footer />
    </div>
  );
}
