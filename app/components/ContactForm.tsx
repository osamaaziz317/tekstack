"use client";

import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const serviceOptions = [
    "Select a service",
    "AI Workflow Automation",
    "Agentic AI Systems",
    "Multi-Agent Orchestration",
    "RPA & Intelligent Automation",
    "Edge AI & Real-Time Agents",
    "AI Integration & APIs",
    "AI Strategy & Consulting",
    "Security & Governance",
    "Platform Integrations",
    "Managed Agent Services",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setSubmitStatus("success");
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });
      
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };

  return (
    <section className="bg-gradient-to-b from-black to-[#0a0a0a] py-8 tablet4:py-10 tablet3:py-12 tablet2:py-14 tablet:py-16 laptop:py-20 desktop:py-24">
      <div className="container mx-auto px-2.5 tablet4:px-3 tablet3:px-4 tablet2:px-5 tablet:px-6 laptop:px-8 desktop:px-10">
        {/* Flex container with responsive direction - mobile first */}
         <div className="flex justify-center pb-4">
             <div className="inline-flex items-center gap-2 bg-white/5 rounded-full px-3 py-1.5 lg:px-5 lg:py-2.5 mb-4 lg:mb-8">
            <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-[#00a8a8]"></div>
            <span className="text-[#00a8a8] text-xs lg:text-sm font-medium font-quicksand uppercase tracking-wider">
              Contact Us
            </span>
          </div>
          </div>
        <div className="flex flex-col desktop:flex-row items-start gap-4 tablet4:gap-5 tablet3:gap-6 tablet2:gap-8 tablet:gap-10 laptop:gap-12 desktop:gap-16">
          
          {/* Left Side - Contact Information */}
          <div className="w-full desktop:flex-1 space-y-3 tablet4:space-y-4 tablet3:space-y-5 tablet2:space-y-6 tablet:space-y-7 laptop:space-y-8">
            {/* Header */}
            <div>
              <h2 className="font-gendy text-lg tablet4:text-xl tablet3:text-2xl tablet2:text-3xl tablet:text-4xl laptop:text-5xl desktop:text-6xl text-white mb-2 tablet4:mb-2.5 tablet3:mb-3 tablet2:mb-3.5 tablet:mb-4 laptop:mb-5">
                Get In Touch
              </h2>
              <p className="font-quicksand text-gray-400 text-xs tablet4:text-xs tablet3:text-sm tablet2:text-sm tablet:text-base laptop:text-lg desktop:text-xl">
                30 Minutes Consultation
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 tablet4:space-y-3.5 tablet3:space-y-4 tablet2:space-y-4.5 tablet:space-y-5 laptop:space-y-6">
              {/* Email */}
              <div className="flex items-start gap-2 tablet4:gap-2.5 tablet3:gap-3 tablet2:gap-3.5 tablet:gap-4 group">
                <div className="w-8 h-8 tablet4:w-9 tablet4:h-9 tablet3:w-10 tablet3:h-10 tablet2:w-11 tablet2:h-11 tablet:w-12 tablet:h-12 rounded-full bg-[#00a8a8]/10 flex items-center justify-center group-hover:bg-[#00a8a8]/20 transition-all duration-300 flex-shrink-0">
                  <svg className="w-4 h-4 tablet4:w-4.5 tablet4:h-4.5 tablet3:w-5 tablet3:h-5 tablet2:w-5.5 tablet2:h-5.5 tablet:w-6 tablet:h-6 text-[#00a8a8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-[10px] tablet4:text-[11px] tablet3:text-xs tablet2:text-xs tablet:text-sm laptop:text-base mb-1">Email</p>
                  <a href="mailto:hello@tekstack.ai" className="text-white text-xs tablet4:text-xs tablet3:text-sm tablet2:text-sm tablet:text-base laptop:text-lg hover:text-[#00a8a8] transition-colors duration-300 break-all">
                    hello@tekstack.ai
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-2 tablet4:gap-2.5 tablet3:gap-3 tablet2:gap-3.5 tablet:gap-4 group">
                <div className="w-8 h-8 tablet4:w-9 tablet4:h-9 tablet3:w-10 tablet3:h-10 tablet2:w-11 tablet2:h-11 tablet:w-12 tablet:h-12 rounded-full bg-[#00a8a8]/10 flex items-center justify-center group-hover:bg-[#00a8a8]/20 transition-all duration-300 flex-shrink-0">
                  <svg className="w-4 h-4 tablet4:w-4.5 tablet4:h-4.5 tablet3:w-5 tablet3:h-5 tablet2:w-5.5 tablet2:h-5.5 tablet:w-6 tablet:h-6 text-[#00a8a8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-[10px] tablet4:text-[11px] tablet3:text-xs tablet2:text-xs tablet:text-sm laptop:text-base mb-1">Phone</p>
                  <a href="tel:+923234563720" className="text-white text-xs tablet4:text-xs tablet3:text-sm tablet2:text-sm tablet:text-base laptop:text-lg hover:text-[#00a8a8] transition-colors duration-300">
                    +92 3027899450
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-2 tablet4:gap-2.5 tablet3:gap-3 tablet2:gap-3.5 tablet:gap-4 group">
                <div className="w-8 h-8 tablet4:w-9 tablet4:h-9 tablet3:w-10 tablet3:h-10 tablet2:w-11 tablet2:h-11 tablet:w-12 tablet:h-12 rounded-full bg-[#00a8a8]/10 flex items-center justify-center group-hover:bg-[#00a8a8]/20 transition-all duration-300 flex-shrink-0">
                  <svg className="w-4 h-4 tablet4:w-4.5 tablet4:h-4.5 tablet3:w-5 tablet3:h-5 tablet2:w-5.5 tablet2:h-5.5 tablet:w-6 tablet:h-6 text-[#00a8a8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-[10px] tablet4:text-[11px] tablet3:text-xs tablet2:text-xs tablet:text-sm laptop:text-base mb-1">Address</p>
                  <p className="text-white text-xs tablet4:text-xs tablet3:text-sm tablet2:text-sm tablet:text-base laptop:text-lg leading-relaxed">
                    16192 Coastal Highway, Lewes, Delaware, 19958,<br />
                    County of Sussex, USA
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="hidden desktop:block pt-4 tablet:pt-5 laptop:pt-6">
              <div className="w-16 tablet:w-20 h-0.5 bg-gradient-to-r from-[#00a8a8] to-transparent rounded-full"></div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="w-full desktop:flex-1">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 tablet4:p-5 tablet3:p-6 tablet2:p-7 tablet:p-8 border border-white/10">
              <h3 className="text-base tablet4:text-lg tablet3:text-xl tablet2:text-2xl tablet:text-2xl laptop:text-3xl font-gendy text-white mb-3 tablet4:mb-4 tablet3:mb-5 tablet2:mb-6 tablet:mb-7 laptop:mb-8">
                Send us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-3 tablet4:space-y-3.5 tablet3:space-y-4 tablet2:space-y-4.5 tablet:space-y-5 laptop:space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-1 tablet4:mb-1.5 tablet3:mb-2 text-[11px] tablet4:text-xs tablet3:text-sm tablet2:text-sm tablet:text-base">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-2.5 tablet4:px-3 tablet3:px-3.5 tablet2:px-4 py-2 tablet4:py-2.5 tablet3:py-3 rounded-lg bg-black/50 border border-white/10 text-white text-xs tablet4:text-sm tablet3:text-base placeholder-gray-500 focus:outline-none focus:border-[#00a8a8] focus:ring-1 focus:ring-[#00a8a8] transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-1 tablet4:mb-1.5 tablet3:mb-2 text-[11px] tablet4:text-xs tablet3:text-sm tablet2:text-sm tablet:text-base">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-2.5 tablet4:px-3 tablet3:px-3.5 tablet2:px-4 py-2 tablet4:py-2.5 tablet3:py-3 rounded-lg bg-black/50 border border-white/10 text-white text-xs tablet4:text-sm tablet3:text-base placeholder-gray-500 focus:outline-none focus:border-[#00a8a8] focus:ring-1 focus:ring-[#00a8a8] transition-all duration-300"
                    placeholder="hello@tekstack.ai"
                  />
                </div>

                {/* Service Selection */}
                <div>
                  <label htmlFor="service" className="block text-white font-medium mb-1 tablet4:mb-1.5 tablet3:mb-2 text-[11px] tablet4:text-xs tablet3:text-sm tablet2:text-sm tablet:text-base">
                    Which Service Are You Interested In? *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-2.5 tablet4:px-3 tablet3:px-3.5 tablet2:px-4 py-2 tablet4:py-2.5 tablet3:py-3 rounded-lg bg-black/50 border border-white/10 text-white text-xs tablet4:text-sm tablet3:text-base focus:outline-none focus:border-[#00a8a8] focus:ring-1 focus:ring-[#00a8a8] transition-all duration-300 cursor-pointer"
                  >
                    {serviceOptions.map((option) => (
                      <option key={option} value={option === "Select a service" ? "" : option} className="bg-black text-white">
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Phone and Company Row */}
                <div className="flex flex-col sm:flex-row gap-3 tablet4:gap-3.5 tablet3:gap-4">
                  <div className="flex-1">
                    <label htmlFor="phone" className="block text-white font-medium mb-1 tablet4:mb-1.5 tablet3:mb-2 text-[11px] tablet4:text-xs tablet3:text-sm tablet2:text-sm tablet:text-base">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-2.5 tablet4:px-3 tablet3:px-3.5 tablet2:px-4 py-2 tablet4:py-2.5 tablet3:py-3 rounded-lg bg-black/50 border border-white/10 text-white text-xs tablet4:text-sm tablet3:text-base placeholder-gray-500 focus:outline-none focus:border-[#00a8a8] focus:ring-1 focus:ring-[#00a8a8] transition-all duration-300"
                      placeholder="+92 3027899450"
                    />
                  </div>
                  <div className="flex-1">
                    <label htmlFor="company" className="block text-white font-medium mb-1 tablet4:mb-1.5 tablet3:mb-2 text-[11px] tablet4:text-xs tablet3:text-sm tablet2:text-sm tablet:text-base">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-2.5 tablet4:px-3 tablet3:px-3.5 tablet2:px-4 py-2 tablet4:py-2.5 tablet3:py-3 rounded-lg bg-black/50 border border-white/10 text-white text-xs tablet4:text-sm tablet3:text-base placeholder-gray-500 focus:outline-none focus:border-[#00a8a8] focus:ring-1 focus:ring-[#00a8a8] transition-all duration-300"
                      placeholder="Your company"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-1 tablet4:mb-1.5 tablet3:mb-2 text-[11px] tablet4:text-xs tablet3:text-sm tablet2:text-sm tablet:text-base">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-2.5 tablet4:px-3 tablet3:px-3.5 tablet2:px-4 py-2 tablet4:py-2.5 tablet3:py-3 rounded-lg bg-black/50 border border-white/10 text-white text-xs tablet4:text-sm tablet3:text-base placeholder-gray-500 focus:outline-none focus:border-[#00a8a8] focus:ring-1 focus:ring-[#00a8a8] transition-all duration-300 resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                {/* Submit Button */}
           <button
  type="submit"
  disabled={isSubmitting}
  className="group relative w-full py-2 tablet4:py-2.5 tablet3:py-3 bg-transparent border border-[#00a8a8] text-[#00a8a8] hover:text-white font-medium rounded-full transition-all duration-300 overflow-hidden text-xs tablet4:text-sm tablet3:text-base cursor-pointer disabled:cursor-not-allowed"
>
  <span className="relative z-10 flex items-center justify-center gap-2">
    {isSubmitting ? (
      <>
        <svg className="animate-spin h-4 w-4 tablet4:h-4.5 tablet4:w-4.5 tablet3:h-5 tablet3:w-5 text-[#00a8a8] group-hover:text-white transition-colors duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Sending...
      </>
    ) : (
      "Submit Message"
    )}
  </span>
  <div className="absolute inset-0 bg-[#00a8a8] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
</button>

                {/* Success Message */}
                {submitStatus === "success" && (
                  <div className="p-2 tablet4:p-2.5 tablet3:p-3 rounded-lg bg-green-500/10 border border-green-500/20 text-center">
                    <p className="text-green-400 text-[10px] tablet4:text-xs tablet3:text-sm">Thank you for reaching out! We'll get back to you soon.</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}