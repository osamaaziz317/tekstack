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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

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

    // Clear reactive error on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate robust asynchronous form processing
      await new Promise((resolve) => setTimeout(resolve, 1200));

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });
      setErrors({});
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      ref={elementRef}
      className="bg-white py-16 sm:py-20 lg:py-28 border-b border-[#E5DFD3]"
      aria-label="Contact and Consultation Form"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-20">
          <div
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5F2EB] border border-[#E5DFD3] mb-4 transition-all duration-500 ${
              isVisible ? "animate-fade-in-down" : "opacity-0 -translate-y-4"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#C2A676]"></span>
            <span className="text-xs font-semibold tracking-wider uppercase text-[#1A1A1A] font-quicksand">
              Direct Engagement
            </span>
          </div>

          <h2
            className={`font-gendy text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight mb-4 transition-all duration-500 delay-100 ${
              isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-4"
            }`}
          >
            Initiate a Technical Consultation
          </h2>

          <p
            className={`font-quicksand text-base sm:text-lg text-[#666158] leading-relaxed transition-all duration-500 delay-200 ${
              isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-4"
            }`}
          >
            Schedule a 30-minute architectural discussion with an AI Systems Lead to map your automation objectives.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start max-w-6xl mx-auto">
          {/* Left Side: Contact Information Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#F5F2EB] border border-[#E5DFD3]">
              <h3 className="font-questrial font-bold text-xl text-[#1A1A1A] mb-2">
                Engineering Headquarters
              </h3>
              <p className="font-quicksand text-sm text-[#666158] leading-relaxed mb-6">
                Our distributed engineering teams operate across North America and global centers, delivering rapid turnaround on enterprise pilots.
              </p>

              <div className="space-y-4 text-sm font-quicksand">
                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white border border-[#E5DFD3]">
                  <div className="w-10 h-10 rounded-xl bg-[#1A1A1A] border border-[#1A1A1A] flex items-center justify-center flex-shrink-0 text-[#C2A676] shadow-sm">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-[#1A1A1A] uppercase tracking-wider">Direct Email</span>
                    <a href="mailto:hello@tekstack.ai" className="text-[#666158] hover:text-[#1A1A1A] font-medium transition-colors">
                      hello@tekstack.ai
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white border border-[#E5DFD3]">
                  <div className="w-10 h-10 rounded-xl bg-[#1A1A1A] border border-[#1A1A1A] flex items-center justify-center flex-shrink-0 text-[#C2A676] shadow-sm">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-[#1A1A1A] uppercase tracking-wider">Direct Line</span>
                    <a href="tel:+923027899450" className="text-[#666158] hover:text-[#1A1A1A] font-medium transition-colors">
                      +92 302 7899450
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white border border-[#E5DFD3]">
                  <div className="w-10 h-10 rounded-xl bg-[#1A1A1A] border border-[#1A1A1A] flex items-center justify-center flex-shrink-0 text-[#C2A676] shadow-sm">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-[#1A1A1A] uppercase tracking-wider">Corporate Entity</span>
                    <p className="text-[#666158] leading-snug">
                      16192 Coastal Highway, Lewes, Delaware, 19958, County of Sussex, USA
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E5DFD3]">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#C2A676] animate-pulse"></span>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#1A1A1A]">
                  Current Response Window
                </span>
              </div>
              <p className="font-quicksand text-xs text-[#666158] mt-2">
                All client requests receive a senior engineering response and mutual NDA within 24 to 48 business hours.
              </p>
            </div>
          </div>

          {/* Right Side: High-Integrity Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-2xl bg-white border border-[#E5DFD3] shadow-sm">
              <h3 className="font-questrial font-bold text-xl sm:text-2xl text-[#1A1A1A] mb-6">
                Tell Us About Your Project
              </h3>

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-[#1A1A1A] mb-1.5">
                    Your Full Name <span className="text-[#C2A676]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    placeholder="e.g. Elena Rostova"
                    className={`w-full px-4 py-3 rounded-xl bg-[#FFFFFF] border text-sm text-[#1A1A1A] placeholder-[#666158]/50 transition-all focus:outline-none focus:ring-1 focus:ring-[#C2A676] focus:border-[#C2A676] disabled:opacity-60 disabled:cursor-not-allowed ${
                      errors.name ? "border-red-400 bg-red-50/20" : "border-[#E5DFD3]"
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-red-600 font-medium">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-[#1A1A1A] mb-1.5">
                    Corporate Email <span className="text-[#C2A676]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    placeholder="elena@enterprise.com"
                    className={`w-full px-4 py-3 rounded-xl bg-[#FFFFFF] border text-sm text-[#1A1A1A] placeholder-[#666158]/50 transition-all focus:outline-none focus:ring-1 focus:ring-[#C2A676] focus:border-[#C2A676] disabled:opacity-60 disabled:cursor-not-allowed ${
                      errors.email ? "border-red-400 bg-red-50/20" : "border-[#E5DFD3]"
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-600 font-medium">{errors.email}</p>
                  )}
                </div>

                {/* Service Selection */}
                <div>
                  <label htmlFor="service" className="block text-xs font-semibold uppercase tracking-wider text-[#1A1A1A] mb-1.5">
                    Area of Interest <span className="text-[#C2A676]">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className={`w-full px-4 py-3 rounded-xl bg-[#FFFFFF] border text-sm text-[#1A1A1A] transition-all focus:outline-none focus:ring-1 focus:ring-[#C2A676] focus:border-[#C2A676] disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer ${
                      errors.service ? "border-red-400 bg-red-50/20" : "border-[#E5DFD3]"
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
                    <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-[#1A1A1A] mb-1.5">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 rounded-xl bg-[#FFFFFF] border border-[#E5DFD3] text-sm text-[#1A1A1A] placeholder-[#666158]/50 transition-all focus:outline-none focus:ring-1 focus:ring-[#C2A676] focus:border-[#C2A676] disabled:opacity-60 disabled:cursor-not-allowed"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-xs font-semibold uppercase tracking-wider text-[#1A1A1A] mb-1.5">
                      Organization / Firm
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      placeholder="Acme Corp"
                      className="w-full px-4 py-3 rounded-xl bg-[#FFFFFF] border border-[#E5DFD3] text-sm text-[#1A1A1A] placeholder-[#666158]/50 transition-all focus:outline-none focus:ring-1 focus:ring-[#C2A676] focus:border-[#C2A676] disabled:opacity-60 disabled:cursor-not-allowed"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-[#1A1A1A] mb-1.5">
                    Workflow Scope &amp; Target Objectives <span className="text-[#C2A676]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    placeholder="Briefly describe the processes you aim to automate, systems involved, and desired timelines..."
                    className={`w-full px-4 py-3 rounded-xl bg-[#FFFFFF] border text-sm text-[#1A1A1A] placeholder-[#666158]/50 transition-all focus:outline-none focus:ring-1 focus:ring-[#C2A676] focus:border-[#C2A676] resize-none disabled:opacity-60 disabled:cursor-not-allowed ${
                      errors.message ? "border-red-400 bg-red-50/20" : "border-[#E5DFD3]"
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-red-600 font-medium">{errors.message}</p>
                  )}
                </div>

                {/* Feedback Alerts matching Beige / Pure White theme */}
                {submitStatus === "success" && (
                  <div className="p-4 rounded-xl bg-[#F5F2EB] border border-[#C2A676] text-[#1A1A1A] flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#C2A676] text-white flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold">Message Dispatched Successfully</h4>
                      <p className="text-xs text-[#666158]">
                        Thank you for reaching out. An AI solutions engineer will follow up with you within 24 business hours.
                      </p>
                    </div>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-900 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold">Transmission Failed</h4>
                      <p className="text-xs text-red-700">
                        Unable to submit the request at this time. Please email us directly at hello@tekstack.ai.
                      </p>
                    </div>
                  </div>
                )}

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-full font-semibold text-sm uppercase tracking-wider bg-[#1A1A1A] text-white hover:bg-[#C2A676] transition-all duration-300 btn-hover-lift flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span>Transmitting Consultation Request...</span>
                    </>
                  ) : (
                    <>
                      <span>Transmit Consultation Request</span>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}