"use client";

import React, { useState, useEffect } from "react";

// Budget options
const budgetOptions = [
  { value: "", label: "Select project budget range" },
  { value: "$10,000 - $25,000", label: "$10,000 - $25,000 (Targeted Pilot)" },
  { value: "$25,000 - $50,000", label: "$25,000 - $50,000 (Multi-Workflow Automation)" },
  { value: "$50,000 - $100,000", label: "$50,000 - $100,000 (Departmental Swarm)" },
  { value: "$100,000 - $250,000", label: "$100,000 - $250,000 (Enterprise Deployment)" },
  { value: "$250,000+", label: "$250,000+ (Full Transformational Program)" },
  { value: "Request Advisory", label: "Request Architectural Scoping First" },
];

// Service options
const serviceOptions = [
  "Select a core solution",
  "Autonomous Agent Systems",
  "Multi-Agent Workflow Orchestration",
  "Cognitive RPA & Document Automation",
  "Enterprise System & API Integration",
  "Edge AI & Embedded Agent Deployment",
  "Governance, Guardrails & Audit Trails",
  "AI Strategy & Architecture Advisory",
];

export default function GetAQuoteModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    phone: "",
    company: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  // Keyboard navigation & escape key binding
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Full name is required.";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = "Valid corporate email is required.";
    }
    if (!formData.service || formData.service === serviceOptions[0]) {
      errs.service = "Please select a solution.";
    }
    if (!formData.budget || formData.budget === budgetOptions[0].value) {
      errs.budget = "Please select a budget range.";
    }
    setFormErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitStatus("success");
      setTimeout(() => {
        setSubmitStatus(null);
        onClose();
        setFormData({
          name: "",
          email: "",
          service: "",
          budget: "",
          phone: "",
          company: "",
          message: "",
        });
      }, 1800);
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      {/* Frosted Dark Glass Backdrop */}
      <div
        className="fixed inset-0 bg-[#252522]/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl bg-white rounded-3xl border border-[#D6CCBC] shadow-2xl overflow-hidden my-auto z-10 animate-scale-in">
        {/* Header */}
        <div className="bg-[#E8DFD2] px-6 sm:px-8 py-6 border-b border-[#D6CCBC] flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-[#B6A58F]"></span>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#252522]">
                Scope &amp; Estimation
              </span>
            </div>
            <h2 id="modal-title" className="font-gendy text-2xl sm:text-3xl font-bold text-[#252522]">
              Request an Architectural Quote
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-[#252522] text-[#B6A58F] hover:bg-[#B6A58F] hover:text-[#252522] transition-colors border border-[#252522] cursor-pointer shadow-sm"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body Form */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          {submitStatus === "success" ? (
            <div className="py-8 text-center space-y-3">
              <div className="w-14 h-14 rounded-full bg-[#252522] border border-[#252522] text-[#B6A58F] flex items-center justify-center mx-auto shadow-md">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-questrial text-xl font-bold text-[#252522]">
                Quote Request Received
              </h3>
              <p className="font-quicksand text-sm text-[#706D66] max-w-md mx-auto">
                Thank you. Our solutions team will analyze your requirements and prepare an architectural estimate within 24 business hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="modal-name" className="block text-xs font-semibold uppercase tracking-wider text-[#252522] mb-1">
                    Your Name <span className="text-[#B6A58F]">*</span>
                  </label>
                  <input
                    type="text"
                    id="modal-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    placeholder="Elena Rostova"
                    className={`w-full px-4 py-2.5 rounded-xl bg-white border text-sm text-[#252522] placeholder-[#706D66]/50 focus:outline-none focus:ring-1 focus:ring-[#B6A58F] focus:border-[#B6A58F] ${
                      formErrors.name ? "border-red-400 bg-red-50/20" : "border-[#D6CCBC]"
                    }`}
                  />
                  {formErrors.name && (
                    <p className="mt-1 text-xs text-red-600 font-medium">{formErrors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="modal-email" className="block text-xs font-semibold uppercase tracking-wider text-[#252522] mb-1">
                    Corporate Email <span className="text-[#B6A58F]">*</span>
                  </label>
                  <input
                    type="email"
                    id="modal-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    placeholder="elena@enterprise.com"
                    className={`w-full px-4 py-2.5 rounded-xl bg-white border text-sm text-[#252522] placeholder-[#706D66]/50 focus:outline-none focus:ring-1 focus:ring-[#B6A58F] focus:border-[#B6A58F] ${
                      formErrors.email ? "border-red-400 bg-red-50/20" : "border-[#D6CCBC]"
                    }`}
                  />
                  {formErrors.email && (
                    <p className="mt-1 text-xs text-red-600 font-medium">{formErrors.email}</p>
                  )}
                </div>
              </div>

              {/* Service & Budget Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="modal-service" className="block text-xs font-semibold uppercase tracking-wider text-[#252522] mb-1">
                    Target Solution <span className="text-[#B6A58F]">*</span>
                  </label>
                  <select
                    id="modal-service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className={`w-full px-4 py-2.5 rounded-xl bg-white border text-sm text-[#252522] focus:outline-none focus:ring-1 focus:ring-[#B6A58F] focus:border-[#B6A58F] cursor-pointer ${
                      formErrors.service ? "border-red-400 bg-red-50/20" : "border-[#D6CCBC]"
                    }`}
                  >
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt === serviceOptions[0] ? "" : opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  {formErrors.service && (
                    <p className="mt-1 text-xs text-red-600 font-medium">{formErrors.service}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="modal-budget" className="block text-xs font-semibold uppercase tracking-wider text-[#252522] mb-1">
                    Budget Range <span className="text-[#B6A58F]">*</span>
                  </label>
                  <select
                    id="modal-budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className={`w-full px-4 py-2.5 rounded-xl bg-white border text-sm text-[#252522] focus:outline-none focus:ring-1 focus:ring-[#B6A58F] focus:border-[#B6A58F] cursor-pointer ${
                      formErrors.budget ? "border-red-400 bg-red-50/20" : "border-[#D6CCBC]"
                    }`}
                  >
                    {budgetOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  {formErrors.budget && (
                    <p className="mt-1 text-xs text-red-600 font-medium">{formErrors.budget}</p>
                  )}
                </div>
              </div>

              {/* Phone & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="modal-phone" className="block text-xs font-semibold uppercase tracking-wider text-[#252522] mb-1">
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    id="modal-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#D6CCBC] text-sm text-[#252522] placeholder-[#706D66]/50 focus:outline-none focus:ring-1 focus:ring-[#B6A58F] focus:border-[#B6A58F]"
                  />
                </div>
                <div>
                  <label htmlFor="modal-company" className="block text-xs font-semibold uppercase tracking-wider text-[#252522] mb-1">
                    Organization / Firm
                  </label>
                  <input
                    type="text"
                    id="modal-company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    placeholder="Acme Corp"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#D6CCBC] text-sm text-[#252522] placeholder-[#706D66]/50 focus:outline-none focus:ring-1 focus:ring-[#B6A58F] focus:border-[#B6A58F]"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="modal-message" className="block text-xs font-semibold uppercase tracking-wider text-[#252522] mb-1">
                  Project Context &amp; Key Requirements
                </label>
                <textarea
                  id="modal-message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  placeholder="Tell us about the current processes, tech stack, and goals..."
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#D6CCBC] text-sm text-[#252522] placeholder-[#706D66]/50 focus:outline-none focus:ring-1 focus:ring-[#B6A58F] focus:border-[#B6A58F] resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-full font-semibold text-sm uppercase tracking-wider bg-[#252522] text-white hover:bg-[#B6A58F] transition-all duration-300 btn-hover-lift flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span>Submitting Scope Details...</span>
                    </>
                  ) : (
                    <span>Submit Quote Request</span>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}