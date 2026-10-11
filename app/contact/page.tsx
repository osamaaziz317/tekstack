import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

export const metadata = {
  title: "Contact Us | Tekstack",
  description: "Schedule a technical consultation with an enterprise AI systems architect.",
};

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen flex flex-col text-[#252522]">
      <Navbar />
      <main className="flex-1">
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}