"use client";

import React from "react";
import { useStaggerAnimation, useScrollAnimation } from "../../lib/useScrollAnimation";
import {
  Truck,
  ShieldCheck,
  HeartPulse,
  Factory,
  Users,
  AlertTriangle,
  Lightbulb,
  TrendingUp,
} from "lucide-react";

interface CaseStudy {
  id: number;
  industry: string;
  title: string;
  problem: string;
  solution: string;
  impact: string[];
  icon: React.ComponentType<{ className?: string }>;
  tags: string[];
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    industry: "Supply Chain & Logistics",
    title: "Autonomous Demand Forecasting & Inventory Optimization",
    problem:
      "A multinational distributor faced $12M in annual losses from overstocking slow-moving SKUs and stockouts on high-demand products across 140+ warehouses.",
    solution:
      "We deployed a multi-agent forecasting pipeline that ingests real-time POS data, supplier lead times, and seasonal signals — autonomously adjusting reorder points and routing purchase orders without manual intervention.",
    impact: [
      "34% reduction in excess inventory",
      "$8.2M annual savings recovered",
      "Stockout incidents down 61%",
    ],
    icon: Truck,
    tags: ["Multi-Agent", "Forecasting", "Orchestration"],
  },
  {
    id: 2,
    industry: "Financial Services",
    title: "Real-Time Compliance Monitoring & Fraud Detection",
    problem:
      "A mid-tier bank's compliance team manually reviewed 15,000+ transactions daily, resulting in 72-hour investigation backlogs and regulatory penalties for late SAR filings.",
    solution:
      "We built an agentic compliance engine that continuously monitors transaction streams, flags anomalies using multi-model consensus, and auto-generates preliminary SAR narratives for analyst review.",
    impact: [
      "Investigation backlog eliminated",
      "92% faster SAR filing turnaround",
      "False positive rate reduced by 47%",
    ],
    icon: ShieldCheck,
    tags: ["Agentic AI", "Compliance", "Real-Time"],
  },
  {
    id: 3,
    industry: "Healthcare Operations",
    title: "Intelligent Patient Intake & Clinical Workflow Automation",
    problem:
      "A regional hospital network averaged 45-minute patient intake cycles with 23% data entry errors, causing downstream billing disputes and clinician frustration.",
    solution:
      "We deployed document-understanding agents that extract, validate, and reconcile patient records from insurance cards, referrals, and intake forms — routing verified data directly into the EHR.",
    impact: [
      "Intake time reduced to 12 minutes",
      "Data entry errors dropped to under 3%",
      "$1.4M annual billing recovery",
    ],
    icon: HeartPulse,
    tags: ["Document AI", "Workflow", "Integration"],
  },
  {
    id: 4,
    industry: "Manufacturing",
    title: "Predictive Maintenance with Edge AI & IoT Telemetry",
    problem:
      "An automotive parts manufacturer experienced 340+ hours of unplanned downtime per year across 28 CNC production lines, costing $2.1M per incident in lost throughput.",
    solution:
      "We deployed lightweight edge agents on each machine that analyze vibration, thermal, and acoustic telemetry in real time — predicting failures 48–72 hours ahead and auto-scheduling maintenance windows.",
    impact: [
      "Unplanned downtime reduced by 78%",
      "Maintenance costs down 41%",
      "OEE improved from 64% to 87%",
    ],
    icon: Factory,
    tags: ["Edge AI", "Predictive", "IoT"],
  },
  {
    id: 5,
    industry: "Human Resources",
    title: "Autonomous Recruitment Pipeline & Talent Matching",
    problem:
      "A fast-scaling tech firm's HR team spent 80% of their time on resume screening and interview scheduling, with an average time-to-hire of 47 days and a 35% offer-decline rate.",
    solution:
      "We built a multi-agent recruitment system that screens candidates against role requirements, conducts automated skill assessments, coordinates interview scheduling, and surfaces top matches with explainable scoring.",
    impact: [
      "Time-to-hire reduced to 19 days",
      "Recruiter capacity increased 3×",
      "Offer acceptance rate up to 78%",
    ],
    icon: Users,
    tags: ["Multi-Agent", "HR Ops", "Cognitive"],
  },
];

export default function Projects() {
  const { elementRef: headerRef, isVisible: isHeaderVisible } =
    useScrollAnimation({ threshold: 0.1 });
  const { containerRef, isVisible, getItemStyle } = useStaggerAnimation(5, 0.1);

  return (
    <section
      ref={headerRef}
      className="bg-white py-16 sm:py-20 lg:py-28 border-b border-[#D6CCBC]"
      aria-label="Case Studies"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-20">
          <div
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8DFD2] border border-[#D6CCBC] mb-4 transition-all duration-500 ${
              isHeaderVisible
                ? "animate-fade-in-down"
                : "opacity-0 -translate-y-4"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#B6A58F]"></span>
            <span className="text-xs font-semibold tracking-wider uppercase text-[#252522] font-quicksand">
              Featured Work
            </span>
          </div>

          <h2
            className={`font-gendy text-3xl sm:text-4xl lg:text-5xl font-bold text-[#252522] tracking-tight mb-4 transition-all duration-500 delay-100 ${
              isHeaderVisible
                ? "animate-fade-in-up"
                : "opacity-0 translate-y-4"
            }`}
          >
            Proven Results &amp; Realized Impact
          </h2>

          <p
            className={`font-quicksand text-base sm:text-lg text-[#706D66] leading-relaxed transition-all duration-500 delay-200 ${
              isHeaderVisible
                ? "animate-fade-in-up"
                : "opacity-0 translate-y-4"
            }`}
          >
            Real-world case studies where our autonomous systems delivered
            measurable outcomes across industries.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto"
        >
          {caseStudies.map((study, index) => {
            const IconComponent = study.icon;
            const isLast = index === caseStudies.length - 1;
            return (
              <div
                key={study.id}
                style={getItemStyle(index)}
                className={`group relative flex flex-col rounded-2xl bg-white border border-[#D6CCBC] hover:border-[#B6A58F] overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 ${
                  isLast ? "lg:col-span-2 lg:max-w-[calc(50%-1rem)] lg:mx-auto" : ""
                } ${
                  isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-6"
                }`}
              >
                {/* Card Header */}
                <div className="px-6 sm:px-7 pt-6 sm:pt-7 pb-0">
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-[#252522] group-hover:bg-[#B6A58F] flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-105">
                        <IconComponent className="w-5 h-5 text-[#B6A58F] group-hover:text-[#252522] transition-colors" />
                      </div>
                      <div>
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-[#B6A58F]">
                          {study.industry}
                        </span>
                        <div className="text-[11px] font-mono text-[#706D66]/60">
                          Case Study 0{index + 1}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1.5 justify-end max-w-[55%]">
                      {study.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded-full text-[9px] font-semibold uppercase tracking-wider bg-[#E8DFD2] text-[#706D66] border border-[#D6CCBC]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <h3 className="font-questrial font-bold text-lg sm:text-xl text-[#252522] leading-snug mb-5">
                    {study.title}
                  </h3>
                </div>

                {/* Problem / Solution / Impact */}
                <div className="px-6 sm:px-7 pb-6 sm:pb-7 flex flex-col flex-1">
                  <div className="space-y-4 flex-1">
                    {/* Problem */}
                    <div className="rounded-xl bg-[#E8DFD2]/60 border border-[#D6CCBC]/60 p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertTriangle className="w-3.5 h-3.5 text-[#B6A58F]" />
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-[#252522]">
                          Challenge
                        </span>
                      </div>
                      <p className="font-quicksand text-xs sm:text-sm text-[#706D66] leading-relaxed">
                        {study.problem}
                      </p>
                    </div>

                    {/* Solution */}
                    <div className="rounded-xl bg-[#E8DFD2]/60 border border-[#D6CCBC]/60 p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Lightbulb className="w-3.5 h-3.5 text-[#B6A58F]" />
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-[#252522]">
                          Solution
                        </span>
                      </div>
                      <p className="font-quicksand text-xs sm:text-sm text-[#706D66] leading-relaxed">
                        {study.solution}
                      </p>
                    </div>

                    {/* Impact */}
                    <div className="rounded-xl bg-[#252522] p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <TrendingUp className="w-3.5 h-3.5 text-[#B6A58F]" />
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-[#B6A58F]">
                          Impact
                        </span>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                        {study.impact.map((item, iIdx) => (
                          <div
                            key={iIdx}
                            className="flex items-start gap-2 flex-1"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#B6A58F] mt-1.5 flex-shrink-0"></span>
                            <span className="font-quicksand text-xs sm:text-sm text-white/90 leading-snug font-medium">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
