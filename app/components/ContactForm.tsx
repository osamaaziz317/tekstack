"use client";

import React, { useState } from "react";
import { useScrollAnimation } from "../../lib/useScrollAnimation";

interface FormState {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  service?: string;
  message?: string;
}

export default function ContactForm() {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [emailDraft, setEmailDraft] = useState<string | null>(null);

  const serviceOptions = [
    "Select a service or architecture",
    "Autonomous Agent Systems",
    "Multi-Agent Workflow Orchestration",
    "Cognitive RPA & Document Pipelines",
    "Enterprise System & API Integration",
    "Edge AI & Embedded Agent Deployment",
    "Security, Guardrails & Governance",
    "AI Architecture Advisory & Feasibility",
  ];

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = "Please provide your full name (minimum 2 characters).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please provide a valid business email address.";
    }

    if (!formData.service || formData.service === serviceOptions[0]) {
      newErrors.service = "Please select the service or capability of interest.";
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = "Please enter a message describing your requirements (minimum 10 characters).";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setEmailDraft(null);

    // Clear reactive error on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    const subject = `Project consultation: ${formData.service}`;
    const body = [
      "Project consultation request",
      "",
      `Name: ${formData.name.trim()}`,
      `Business email: ${formData.email.trim()}`,
      `Phone: ${formData.phone.trim() || "Not provided"}`,
      `Organization: ${formData.company.trim() || "Not provided"}`,
      `Area of interest: ${formData.service}`,
      "",
      "Workflow scope & target objectives:",
      formData.message.trim(),
    ].join("\r\n");

    setEmailDraft(
      `mailto:hello@tekstack.ai?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    );
  };

  return (
    <section
      ref={elementRef}
      className="bg-white py-16 sm:py-20 lg:py-28 border-b border-[#D6CCBC]"
      aria-label="Contact and Consultation Form"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-20">
          <div
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8DFD2] border border-[#D6CCBC] mb-4 transition-all duration-500 ${
              isVisible ? "animate-fade-in-down" : "opacity-0 -translate-y-4"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#B6A58F]"></span>
            <span className="text-xs font-semibold tracking-wider uppercase text-[#252522] font-quicksand">
              Direct Engagement
            </span>
          </div>

          <h2
            className={`font-gendy text-3xl sm:text-4xl lg:text-5xl font-bold text-[#252522] tracking-tight mb-4 transition-all duration-500 delay-100 ${
              isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-4"
            }`}
          >
            Initiate a Technical Consultation
          </h2>

          <p
            className={`font-quicksand text-base sm:text-lg text-[#706D66] leading-relaxed transition-all duration-500 delay-200 ${
              isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-4"
            }`}
          >
            Schedule a 30-minute architectural discussion with an AI Systems Lead to map your automation objectives.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start max-w-6xl mx-auto">
          {/* Left Side: Contact Information Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#E8DFD2] border border-[#D6CCBC]">
              <h3 className="font-questrial font-bold text-xl text-[#252522] mb-2">
                Engineering Headquarters
              </h3>
              <p className="font-quicksand text-sm text-[#706D66] leading-relaxed mb-6">
                Our distributed engineering teams operate across North America and global centers, delivering rapid turnaround on enterprise pilots.
              </p>

              <div className="space-y-4 text-sm font-quicksand">
                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white border border-[#D6CCBC]">
                  <div className="w-10 h-10 rounded-xl bg-[#252522] border border-[#252522] flex items-center justify-center flex-shrink-0 text-[#B6A58F] shadow-sm">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-[#252522] uppercase tracking-wider">Direct Email</span>
                    <a href="mailto:hello@tekstack.ai" className="text-[#706D66] hover:text-[#252522] font-medium transition-colors">
                      hello@tekstack.ai
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white border border-[#D6CCBC]">
                  <div className="w-10 h-10 rounded-xl bg-[#252522] border border-[#252522] flex items-center justify-center flex-shrink-0 text-[#B6A58F] shadow-sm">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-[#252522] uppercase tracking-wider">Direct Line</span>
                    <a href="tel:+923027899450" className="text-[#706D66] hover:text-[#252522] font-medium transition-colors">
                      +92 302 7899450
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white border border-[#D6CCBC]">
                  <div className="w-10 h-10 rounded-xl bg-[#252522] border border-[#252522] flex items-center justify-center flex-shrink-0 text-[#B6A58F] shadow-sm">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-[#252522] uppercase tracking-wider">Corporate Entity</span>
                    <p className="text-[#706D66] leading-snug">
                      16192 Coastal Highway, Lewes, Delaware, 19958, County of Sussex, USA
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#D6CCBC]">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#B6A58F] animate-pulse"></span>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#252522]">
                  Current Response Window
                </span>
              </div>
              <p className="font-quicksand text-xs text-[#706D66] mt-2">
                All client requests receive a senior engineering response and mutual NDA within 24 to 48 business hours.
              </p>
            </div>
          </div>

          {/* Right Side: High-Integrity Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-2xl bg-white border border-[#D6CCBC] shadow-sm">
              <h3 className="font-questrial font-bold text-xl sm:text-2xl text-[#252522] mb-6">
                Tell Us About Your Project
              </h3>

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-[#252522] mb-1.5">
                    Your Full Name <span className="text-[#B6A58F]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Elena Rostova"
                    className={`w-full px-4 py-3 rounded-xl bg-[#FFFFFF] border text-sm text-[#252522] placeholder-[#706D66]/50 transition-all focus:outline-none focus:ring-1 focus:ring-[#B6A58F] focus:border-[#B6A58F] ${
                      errors.name ? "border-red-400 bg-red-50/20" : "border-[#D6CCBC]"
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-red-600 font-medium">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-[#252522] mb-1.5">
                    Corporate Email <span className="text-[#B6A58F]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="elena@enterprise.com"
                    className={`w-full px-4 py-3 rounded-xl bg-[#FFFFFF] border text-sm text-[#252522] placeholder-[#706D66]/50 transition-all focus:outline-none focus:ring-1 focus:ring-[#B6A58F] focus:border-[#B6A58F] ${
                      errors.email ? "border-red-400 bg-red-50/20" : "border-[#D6CCBC]"
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-600 font-medium">{errors.email}</p>
                  )}
                </div>

                {/* Service Selection */}
                <div>
                  <label htmlFor="service" className="block text-xs font-semibold uppercase tracking-wider text-[#252522] mb-1.5">
                    Area of Interest <span className="text-[#B6A58F]">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-[#FFFFFF] border text-sm text-[#252522] transition-all focus:outline-none focus:ring-1 focus:ring-[#B6A58F] focus:border-[#B6A58F] cursor-pointer ${
                      errors.service ? "border-red-400 bg-red-50/20" : "border-[#D6CCBC]"
                    }`}
                  >
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt === serviceOptions[0] ? "" : opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="mt-1.5 text-xs text-red-600 font-medium">{errors.service}</p>
                  )}
                </div>

                {/* Phone & Company Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-[#252522] mb-1.5">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 rounded-xl bg-[#FFFFFF] border border-[#D6CCBC] text-sm text-[#252522] placeholder-[#706D66]/50 transition-all focus:outline-none focus:ring-1 focus:ring-[#B6A58F] focus:border-[#B6A58F]"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-xs font-semibold uppercase tracking-wider text-[#252522] mb-1.5">
                      Organization / Firm
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Acme Corp"
                      className="w-full px-4 py-3 rounded-xl bg-[#FFFFFF] border border-[#D6CCBC] text-sm text-[#252522] placeholder-[#706D66]/50 transition-all focus:outline-none focus:ring-1 focus:ring-[#B6A58F] focus:border-[#B6A58F]"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-[#252522] mb-1.5">
                    Workflow Scope &amp; Target Objectives <span className="text-[#B6A58F]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Briefly describe the processes you aim to automate, systems involved, and desired timelines..."
                    className={`w-full px-4 py-3 rounded-xl bg-[#FFFFFF] border text-sm text-[#252522] placeholder-[#706D66]/50 transition-all focus:outline-none focus:ring-1 focus:ring-[#B6A58F] focus:border-[#B6A58F] resize-none ${
                      errors.message ? "border-red-400 bg-red-50/20" : "border-[#D6CCBC]"
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-red-600 font-medium">{errors.message}</p>
                  )}
                </div>

                {/* Prepared email feedback */}
                {emailDraft && (
                  <div role="status" className="p-4 rounded-xl bg-[#E8DFD2] border border-[#B6A58F] text-[#252522] flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#B6A58F] text-white flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold">Your project email is ready</h4>
                      <p className="text-xs text-[#706D66]">
                        Review and send it from your email app. Nothing has been sent yet.
                      </p>
                      <a
                        href={emailDraft}
                        className="inline-flex mt-3 text-sm font-semibold text-[#252522] underline underline-offset-4 hover:text-[#706D66] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#252522]"
                      >
                        Open email draft
                      </a>
                    </div>
                  </div>
                )}

                {/* Submit CTA */}
                <p className="text-xs text-[#706D66]">
                  Prepare an email, then review and send it in your email app.
                </p>
                <button
                  type="submit"
                  className="w-full py-4 rounded-full font-semibold text-sm uppercase tracking-wider bg-[#252522] text-white hover:bg-[#B6A58F] transition-all duration-300 btn-hover-lift flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Prepare project email</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
