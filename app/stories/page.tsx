import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Projects from "../components/Projects";

export const metadata = {
  title: "Success Stories & Case Studies | Tekstack",
  description:
    "Explore real-world deployments of autonomous agents and enterprise workflow automation.",
};

export default function StoriesPage() {
  return (
    <div className="bg-white min-h-screen flex flex-col text-[#252522]">
      <Navbar />
      <main className="flex-1">
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
