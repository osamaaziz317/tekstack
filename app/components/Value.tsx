"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useScrollAnimation } from "../../lib/useScrollAnimation";

// FAQ Data
const faqData = [
  {
    id: 1,
    question: "What is agentic AI and how does it differ from standard LLMs?",
    answer:
      "Traditional LLMs respond to individual prompts in isolation. Agentic AI refers to autonomous systems capable of continuous multi-step reasoning, goal decomposition, environment tool calling (APIs, databases, code execution), and self-healing error recovery without constant manual guidance.",
  },
  {
    id: 2,
    question: "How do multi-agent systems coordinate without conflicts?",
    answer:
      "We implement server-authoritative state machines, distributed locking protocols, and role-based policies. Agents operate as specialized workers (planners, executors, evaluators) managed by an orchestrator with deterministic consensus and transaction rollbacks.",
  },
  {
    id: 3,
    question: "How do you integrate agentic workflows with our existing enterprise software?",
    answer:
      "We design custom gateway adapters and webhooks that interface with ERPs (SAP, NetSuite), CRMs (Salesforce, HubSpot), relational databases, and proprietary cloud microservices. All interactions use authenticated, rate-limited tokens.",
  },
  {
    id: 4,
    question: "What measures do you implement for compliance, security, and governance?",
    answer:
      "We embed human-in-the-loop approval thresholds for high-stakes decisions, complete cryptographically auditable telemetry logs, strict data minimization, and SOC2 / GDPR compliant data isolation.",
  },
  {
    id: 5,
    question: "Can agents be deployed on-premise, in private clouds, or at the edge?",
    answer:
      "Yes. Our deployment architectures support sovereign VPCs, private AWS/GCP/Azure clusters, on-premise Kubernetes clusters, and quantized edge models for air-gapped or latency-critical industrial environments.",
  },
  {
    id: 6,
    question: "What timeline and ROI can we realistically expect?",
    answer:
      "A focused production pilot typically delivers functional validation within 4 to 6 weeks. Most enterprise clients experience measurable labor cost reduction and 5x to 10x process speedup within the first quarter of deployment.",
  },
];

// Individual Accordion Item Component
const AccordionItem = ({
  item,
  isOpen,
  onToggle,
}: {
  item: { id: number; question: string; answer: string };
  isOpen: boolean;
  onToggle: () => void;
}) => {
  return (
    <div className="border border-[#D6CCBC] rounded-2xl bg-white overflow-hidden transition-all duration-300 hover:border-[#B6A58F] shadow-xs">
      <button
        onClick={onToggle}
        className="flex justify-between items-center w-full p-5 sm:p-6 text-left focus:outline-none group cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className="text-base sm:text-lg font-questrial font-semibold text-[#252522] group-hover:text-[#B6A58F] transition-colors pr-4">
          {item.question}
        </span>
        <div
          className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
            isOpen
              ? "bg-[#B6A58F] text-[#252522] border-[#B6A58F] rotate-180 shadow-sm"
              : "bg-[#252522] text-[#B6A58F] border-[#252522] group-hover:bg-[#B6A58F] group-hover:text-[#252522] group-hover:border-[#B6A58F] shadow-xs"
          }`}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {/* Expandable answer panel */}
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-1 text-sm sm:text-base font-quicksand text-[#706D66] leading-relaxed border-t border-[#D6CCBC]/50">
          {item.answer}
        </div>
      </div>
    </div>
  );
};

export default function Value() {
  const [openId, setOpenId] = useState<number | null>(1);
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const toggleAccordion = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      ref={elementRef}
      className="bg-[#E8DFD2] py-16 sm:py-20 lg:py-28 border-b border-[#D6CCBC]"
      aria-label="Frequently asked questions section"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#D6CCBC] mb-4 transition-all duration-500 ${
              isVisible ? "animate-fade-in-down" : "opacity-0 -translate-y-4"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#B6A58F]"></span>
            <span className="text-xs font-semibold tracking-wider uppercase text-[#252522] font-quicksand">
              Knowledge Base
            </span>
          </div>

          <h2
            className={`font-gendy text-3xl sm:text-4xl lg:text-5xl font-bold text-[#252522] tracking-tight mb-4 transition-all duration-500 delay-100 ${
              isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-4"
            }`}
          >
            Frequently Asked Questions
          </h2>

          <p
            className={`font-quicksand text-base sm:text-lg text-[#706D66] leading-relaxed max-w-2xl mx-auto transition-all duration-500 delay-200 ${
              isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-4"
            }`}
          >
            Clear architectural answers regarding multi-agent reliability, system integration, security, and economic returns.
          </p>
        </div>

        {/* Accordion List */}
        <div
          className={`space-y-3.5 transition-all duration-500 delay-300 ${
            isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-4"
          }`}
        >
          {faqData.map((item) => (
            <AccordionItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => toggleAccordion(item.id)}
            />
          ))}
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-12 text-center p-8 rounded-2xl bg-white border border-[#D6CCBC] shadow-xs">
          <h3 className="font-questrial font-bold text-lg sm:text-xl text-[#252522] mb-2">
            Have a custom workflow challenge?
          </h3>
          <p className="font-quicksand text-sm text-[#706D66] mb-6 max-w-md mx-auto">
            Our principal engineers review technical briefs and provide architectural feedback within 48 hours.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-xs sm:text-sm uppercase tracking-wider bg-[#252522] text-white hover:bg-[#B6A58F] transition-all duration-300 btn-hover-lift"
          >
            <span>Consult Our Engineering Team</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}