import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
import Service from "../components/Service";
import Best from "../components/Best";

export const metadata = {
  title: "About Us | Tekstack",
  description:
    "Learn about Tekstack — our mission, our engineering philosophy, and the core capabilities that power autonomous enterprise workflows.",
};

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen flex flex-col text-[#252522]">
      <Navbar />
      <main className="flex-1">
        <AboutUs />
        <Service />
        <Best />
      </main>
      <Footer />
    </div>
  );
}
