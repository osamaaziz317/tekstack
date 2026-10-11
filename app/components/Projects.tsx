"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useStaggerAnimation, useScrollAnimation } from "../../lib/useScrollAnimation";

interface VideoProjectMeta {
  title?: string;
  description?: string;
  image?: string;
  tags?: string[];
  liveLink?: string;
  category?: string;
}

interface ProjectItem {
  id: number;
  title: string;
  description: string;
  image: string;
  video?: string;
  tags: string[];
  liveLink: string;
  category: string;
}

const defaultProjects: ProjectItem[] = [
  {
    id: 1,
    title: "AI Architect: Autonomous Pipeline Engine",
    description: "An agentic system orchestrating end-to-end data ingestion, model routing, and automated validation with policy compliance.",
    image: "/videos/AI_s-impact-on-HR_Sharing-image.png",
    video: "AI_Architect",
    tags: ["Agentic AI", "Architecture", "Orchestration"],
    liveLink: "/video/AI_Architect",
    category: "ai",
  },
  {
    id: 2,
    title: "Autonomous Agent Fleet for HR & Operations",
    description: "Multi-agent framework coordinating talent matching, automated scheduling, and continuous candidate evaluation.",
    image: "/videos/AI_s-impact-on-HR_Sharing-image.png",
    video: "HR_AI",
    tags: ["Multi-Agent", "HR Ops", "Workflow"],
    liveLink: "/video/HR_AI",
    category: "ai",
  },
  {
    id: 3,
    title: "Synthetic Focus Group Collaboration Platform",
    description: "A distributed persona-simulation platform where autonomous agents debate, critique, and synthesize consumer insights.",
    image: "/videos/synthetic-users-focus-group-ai.jpg",
    video: "Focus_group",
    tags: ["Simulation", "Multi-Agent", "Cognitive"],
    liveLink: "/video/Focus_group",
    category: "ai",
  },
  {
    id: 4,
    title: "Real-Time Observability & Telemetry Control Center",
    description: "Unified telemetry dashboard monitoring agent states, latency budgets, token consumption, and failover triggers in real time.",
    image: "/videos/AI_s-impact-on-HR_Sharing-image.png",
    video: "Interactive_Dahboard",
    tags: ["Observability", "APIs", "Control"],
    liveLink: "/video/Interactive_Dahboard",
    category: "frontend",
  },
  {
    id: 5,
    title: "Predictive Enterprise Diagnostics Gateway",
    description: "Edge and cloud hybrid agent diagnosing hardware and service telemetry before critical SLA failures occur.",
    image: "/images/projects/placeholder.jpg",
    tags: ["Edge AI", "Predictive", "IoT"],
    liveLink: "#",
    category: "ai",
  },
  {
    id: 6,
    title: "Cross-System ERP Automation Connector",
    description: "Autonomous reconciliation agent connecting disparate ERPs, invoices, and accounting systems with full audit logging.",
    image: "/images/projects/placeholder.jpg",
    tags: ["Enterprise", "Integration", "RPA"],
    liveLink: "#",
    category: "frontend",
  },
];

export default function Projects({
  videoSlugs = [],
  videoMeta = {},
}: {
  videoSlugs?: string[];
  videoMeta?: Record<string, VideoProjectMeta>;
}) {
  const [activeTab, setActiveTab] = useState<"all" | "ai" | "frontend">("all");
  const { elementRef: headerRef, isVisible: isHeaderVisible } = useScrollAnimation({ threshold: 0.1 });
  const { containerRef, isVisible, getItemStyle } = useStaggerAnimation(6, 0.08);

  // Generate dynamic projects from public videos directory
  const dynamicProjects: ProjectItem[] = (videoSlugs || []).map((slug, idx) => {
    const meta = (videoMeta && videoMeta[slug]) || {};
    const title = meta.title || slug.replace(/_/g, " ");
    return {
      id: 100 + idx,
      title,
      description:
        meta.description ||
        `Production demo showcasing autonomous agent capabilities in ${title}.`,
      image: meta.image || "/videos/AI_s-impact-on-HR_Sharing-image.png",
      video: slug,
      tags: meta.tags || ["Autonomous AI", "Production Demo"],
      liveLink: `/video/${slug}`,
      category: meta.category || "ai",
    };
  });

  // Merge projects: dynamic videos first, followed by default showcases
  const allProjectsList: ProjectItem[] =
    dynamicProjects.length > 0
      ? [
          ...dynamicProjects,
          ...defaultProjects.filter((dp) => !dynamicProjects.some((p) => p.video === dp.video)),
        ]
      : defaultProjects;

  const filteredProjects =
    activeTab === "all"
      ? allProjectsList
      : allProjectsList.filter((p) => p.category === activeTab);

  return (
    <section
      ref={headerRef}
      className="bg-white py-16 sm:py-20 lg:py-28 border-b border-[#E5DFD3]"
      aria-label="Projects and Case Studies"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5F2EB] border border-[#E5DFD3] mb-4 transition-all duration-500 ${
              isHeaderVisible ? "animate-fade-in-down" : "opacity-0 -translate-y-4"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#C2A676]"></span>
            <span className="text-xs font-semibold tracking-wider uppercase text-[#1A1A1A] font-quicksand">
              Featured Work
            </span>
          </div>

          <h2
            className={`font-gendy text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight mb-4 transition-all duration-500 delay-100 ${
              isHeaderVisible ? "animate-fade-in-up" : "opacity-0 translate-y-4"
            }`}
          >
            Proven Results &amp; Realized Impact
          </h2>

          <p
            className={`font-quicksand text-base sm:text-lg text-[#666158] leading-relaxed transition-all duration-500 delay-200 ${
              isHeaderVisible ? "animate-fade-in-up" : "opacity-0 translate-y-4"
            }`}
          >
            Explore our autonomous systems deployed across real-world workflows, human-in-the-loop pipelines, and distributed architectures.
          </p>

          {/* Filter Tabs in Soft Beige */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {(
              [
                { id: "all", label: "All Projects" },
                { id: "ai", label: "Agentic AI & ML" },
                { id: "frontend", label: "Observability & UI" },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-[#1A1A1A] text-white shadow-sm"
                    : "bg-[#F5F2EB] text-[#666158] border border-[#E5DFD3] hover:text-[#1A1A1A] hover:bg-[#ECE7DC]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              style={getItemStyle(index)}
              className={`group flex flex-col rounded-2xl bg-white border border-[#E5DFD3] hover:border-[#C2A676] hover:bg-[#F5F2EB]/40 overflow-hidden card-hover-lift shadow-xs transition-all duration-300 ${
                isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-6"
              }`}
            >
              {/* Media Preview Box */}
              <div className="relative h-48 sm:h-52 bg-[#F5F2EB] border-b border-[#E5DFD3] overflow-hidden flex-shrink-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {project.video && (
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm border border-[#E5DFD3] text-[10px] font-semibold tracking-wider text-[#1A1A1A] uppercase">
                    Demo Available
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.slice(0, 3).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-[#F5F2EB] text-[#666158] border border-[#E5DFD3]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="font-questrial font-bold text-lg text-[#1A1A1A] mb-2 group-hover:text-[#1A1A1A] leading-snug">
                    {project.title}
                  </h3>

                  <p className="font-quicksand text-xs sm:text-sm text-[#666158] leading-relaxed line-clamp-3 mb-4">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E5DFD3]/80 flex items-center justify-between mt-auto">
                  {project.video ? (
                    <Link
                      href={`/video/${project.video}`}
                      className="inline-flex items-center gap-2 text-xs font-semibold text-[#1A1A1A] hover:text-[#C2A676] transition-colors group/link"
                    >
                      <span className="w-6 h-6 rounded-full bg-[#1A1A1A] text-[#C2A676] group-hover/link:bg-[#C2A676] group-hover/link:text-[#1A1A1A] flex items-center justify-center transition-all shadow-xs">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                      <span>Watch Demo Video</span>
                    </Link>
                  ) : (
                    <span className="text-xs text-[#666158] font-medium">Enterprise Custom Architecture</span>
                  )}
                  <span className="text-[11px] font-mono text-[#666158]/70">0{index + 1}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}