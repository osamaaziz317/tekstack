"use client";

import Link from "next/link";
import { useScrollAnimation } from "../../lib/useScrollAnimation";

export default function Hero() {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      ref={elementRef}
      className="relative bg-white pt-12 pb-16 lg:pt-20 lg:pb-24 overflow-hidden border-b border-[#E5DFD3]"
      aria-label="Hero section"
    >
      {/* Soft warm ambient background accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-gradient-to-b from-[#F5F2EB] via-[#F5F2EB]/50 to-transparent rounded-full blur-3xl opacity-70" />
        <div className="absolute top-1/3 -right-24 w-80 h-80 bg-[#C2A676]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-24 w-80 h-80 bg-[#E5DFD3]/40 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Sleek Beige Pill-Badge */}
        <div
          className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#F5F2EB] border border-[#E5DFD3] mb-6 sm:mb-8 transition-all duration-500 ${
            isVisible ? "animate-fade-in-down" : "opacity-0 -translate-y-4"
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-[#C2A676] animate-pulse-gold" />
          <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-[#1A1A1A] font-quicksand">
            Agentic AI &bull; Workflow Automation &bull; Enterprise Scale
          </span>
        </div>

        {/* Hero Heading with Deep Off-Black Contrast */}
        <h1
          className={`max-w-4xl mx-auto font-questrial font-bold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-[#1A1A1A] leading-[1.15] mb-6 transition-all duration-500 delay-100 ${
            isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-4"
          }`}
        >
          Automate complex workflows with{" "}
          <span className="relative inline-block text-[#1A1A1A]">
            agentic AI
            <span className="absolute bottom-1 left-0 w-full h-2.5 bg-[#C2A676]/20 -z-10 rounded-sm"></span>
          </span>
        </h1>

        {/* Muted Slate Taupe Description */}
        <p
          className={`max-w-2xl mx-auto font-quicksand text-base sm:text-lg lg:text-xl text-[#666158] leading-relaxed mb-10 transition-all duration-500 delay-200 ${
            isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-4"
          }`}
        >
          We engineer autonomous multi-agent systems and intelligent orchestration layers that eliminate manual bottlenecks, streamline decisions, and deliver audited operational ROI.
        </p>

        {/* Call to Actions */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-500 delay-300 ${
            isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-4"
          }`}
        >
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-medium text-sm sm:text-base bg-[#1A1A1A] text-white hover:bg-[#C2A676] transition-all duration-300 btn-hover-lift shadow-sm"
          >
            <span>Talk to an AI Architect</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>

          <Link
            href="/stories"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-medium text-sm sm:text-base bg-[#F5F2EB] text-[#1A1A1A] border border-[#E5DFD3] hover:bg-[#ECE7DC] hover:border-[#C2A676] transition-all duration-300"
          >
            <span>Explore Case Studies</span>
          </Link>
        </div>

        {/* Metric Badges */}
        <div
          className={`mt-14 pt-10 border-t border-[#E5DFD3]/80 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto transition-all duration-500 delay-400 ${
            isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="flex flex-col items-center">
            <span className="font-gendy text-2xl sm:text-3xl font-bold text-[#1A1A1A]">99.4%</span>
            <span className="text-xs text-[#666158] font-quicksand mt-1">Execution Accuracy</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-gendy text-2xl sm:text-3xl font-bold text-[#C2A676]">&gt;65%</span>
            <span className="text-xs text-[#666158] font-quicksand mt-1">OpEx Reduction</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-gendy text-2xl sm:text-3xl font-bold text-[#1A1A1A]">10x</span>
            <span className="text-xs text-[#666158] font-quicksand mt-1">Process Velocity</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-gendy text-2xl sm:text-3xl font-bold text-[#C2A676]">24/7</span>
            <span className="text-xs text-[#666158] font-quicksand mt-1">Autonomous Uptime</span>
          </div>
        </div>
      </div>
    </section>
  );
}
