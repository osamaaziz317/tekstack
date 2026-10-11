"use client";

import { useScrollAnimation } from "../../lib/useScrollAnimation";
import {
  Workflow,
  Bot,
  Network,
  Cpu,
  Boxes,
  Zap,
  ShieldCheck,
  Compass,
} from "lucide-react";

const services = [
  {
    icon: Workflow,
    title: "AI Workflow Automation",
    description:
      "Design and deploy end-to-end automated pipelines powered by agentic reasoning to eliminate human bottlenecks.",
    tag: "Orchestration",
  },
  {
    icon: Bot,
    title: "Agentic AI Systems",
    description:
      "Build autonomous agents that decompose complex goals into discrete actions with policy-driven execution.",
    tag: "Autonomous",
  },
  {
    icon: Network,
    title: "Multi-Agent Orchestration",
    description:
      "Coordinate specialized fleets of agents in parallel with safe conflict-resolution and recovery protocols.",
    tag: "Distributed",
  },
  {
    icon: Cpu,
    title: "RPA & Cognitive Automation",
    description:
      "Fuse deterministic robotic automation with probabilistic LLM reasoning for high-accuracy document and task processing.",
    tag: "Cognitive",
  },
  {
    icon: Boxes,
    title: "Enterprise API Gateways",
    description:
      "Connect agent systems seamlessly to ERPs, CRMs, and relational databases with secure, rate-limited adapters.",
    tag: "Integration",
  },
  {
    icon: Zap,
    title: "Edge & Real-Time AI",
    description:
      "Deploy optimized micro-models and lightweight agents at the edge for low-latency decisioning and offline resilience.",
    tag: "Edge",
  },
  {
    icon: ShieldCheck,
    title: "Security & Governance",
    description:
      "Enforce deterministic guardrails, human-in-the-loop approvals, and immutable audit logs for regulatory compliance.",
    tag: "Governance",
  },
  {
    icon: Compass,
    title: "AI Strategy & Advisory",
    description:
      "Architect clear deployment roadmaps, high-velocity pilot scopes, and quantitative ROI models for enterprise leaders.",
    tag: "Advisory",
  },
];

export default function Service() {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      ref={elementRef}
      className="bg-white py-16 sm:py-20 lg:py-28 border-b border-[#D6CCBC]"
      aria-label="Services section"
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
              Specialized Capabilities
            </span>
          </div>

          <h2
            className={`font-gendy text-3xl sm:text-4xl lg:text-5xl font-bold text-[#252522] tracking-tight mb-4 transition-all duration-500 delay-100 ${
              isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-4"
            }`}
          >
            Engineered for Autonomous Performance
          </h2>
          <p
            className={`font-quicksand text-base sm:text-lg text-[#706D66] leading-relaxed transition-all duration-500 delay-200 ${
              isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-4"
            }`}
          >
            From single-purpose autonomous task executors to enterprise-wide multi-agent swarms, we deliver production-ready automation architectures.
          </p>
        </div>

        {/* Services Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                style={{
                  transitionDelay: isVisible ? `${index * 60}ms` : "0ms",
                }}
                className={`group relative p-7 rounded-2xl bg-white border border-[#D6CCBC] hover:border-[#B6A58F] hover:bg-[#E8DFD2]/50 card-hover-lift flex flex-col justify-between ${
                  isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-6"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#252522] group-hover:bg-[#B6A58F] border border-[#252522] group-hover:border-[#B6A58F] flex items-center justify-center p-2.5 transition-all duration-300 shadow-md group-hover:scale-105">
                      <IconComponent className="w-6 h-6 text-[#B6A58F] group-hover:text-[#252522] transition-colors" />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#E8DFD2] group-hover:bg-white text-[#706D66] border border-[#D6CCBC]">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="font-questrial font-bold text-lg sm:text-xl text-[#252522] mb-2.5 group-hover:text-[#252522]">
                    {service.title}
                  </h3>

                  <p className="font-quicksand text-sm text-[#706D66] leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#D6CCBC]/70 flex items-center text-xs font-semibold text-[#252522] group-hover:text-[#B6A58F] transition-colors">
                  <span>Learn capability specs</span>
                  <svg
                    className="w-3.5 h-3.5 ml-1.5 transform group-hover:translate-x-1 transition-transform text-[#252522] group-hover:text-[#B6A58F]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}