"use client";

import Link from "next/link";
import { useCallback } from "react";
import { useScrollAnimation } from "../../lib/useScrollAnimation";
import { useParallaxMouse, useMouseGlow } from "../../lib/useMouseInteraction";

export default function Hero() {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const parallaxRef = useParallaxMouse();
  const glowRef = useMouseGlow();

  // Combine scroll-animation, parallax, and glow refs onto the same DOM node
  const sectionRef = useCallback(
    (node: HTMLElement | null) => {
      (elementRef as React.MutableRefObject<HTMLElement | null>).current = node;
      (parallaxRef as React.MutableRefObject<HTMLElement | null>).current = node;
      (glowRef as React.MutableRefObject<HTMLElement | null>).current = node;
    },
    [elementRef, parallaxRef, glowRef]
  );

  return (
    <section
      ref={sectionRef}
      className="group relative bg-white pt-12 pb-16 lg:pt-20 lg:pb-24 overflow-hidden border-b border-[#D6CCBC]"
      aria-label="Hero section"
    >
      {/* Soft warm ambient background accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-gradient-to-b from-[#E8DFD2] via-[#E8DFD2]/50 to-transparent rounded-full blur-3xl opacity-70"
          style={{ transform: 'translate(var(--mouse-x), var(--mouse-y))' }}
        />
        <div
          className="absolute top-1/3 -right-24 w-80 h-80 bg-[#B6A58F]/10 rounded-full blur-3xl"
          style={{ transform: 'translate(calc(var(--mouse-x) * -0.5), calc(var(--mouse-y) * -0.5))' }}
        />
        <div
          className="absolute bottom-0 -left-24 w-80 h-80 bg-[#E8DFD2]/40 rounded-full blur-3xl"
          style={{ transform: 'translate(var(--mouse-x), var(--mouse-y))' }}
        />
      </div>

      {/* Radial glow that follows the mouse */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{ background: 'radial-gradient(600px circle at var(--glow-x, 50%) var(--glow-y, 50%), rgba(182,165,143,0.06), transparent 60%)' }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Sleek Beige Pill-Badge */}
        <div
          className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#E8DFD2] border border-[#D6CCBC] mb-6 sm:mb-8 transition-all duration-500 ${
            isVisible ? "animate-fade-in-down" : "opacity-0 -translate-y-4"
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-[#B6A58F] animate-pulse-gold" />
          <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-[#252522] font-quicksand">
            Agentic AI &bull; Workflow Automation &bull; Enterprise Scale
          </span>
        </div>

        {/* Hero Heading with Deep Off-Black Contrast */}
        <h1
          className={`max-w-4xl mx-auto font-questrial font-bold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-[#252522] leading-[1.15] mb-6 transition-all duration-500 delay-100 ${
            isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-4"
          }`}
        >
          Automate complex workflows with{" "}
          <span className="relative inline-block text-[#252522]">
            agentic AI
            <span className="absolute bottom-1 left-0 w-full h-2.5 bg-[#B6A58F]/20 -z-10 rounded-sm"></span>
          </span>
        </h1>

        {/* Muted Slate Taupe Description */}
        <p
          className={`max-w-2xl mx-auto font-quicksand text-base sm:text-lg lg:text-xl text-[#706D66] leading-relaxed mb-10 transition-all duration-500 delay-200 ${
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
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-medium text-sm sm:text-base bg-[#252522] text-white hover:bg-[#B6A58F] transition-all duration-300 btn-hover-lift shadow-sm"
          >
            <span>Talk to an AI Architect</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>

          <Link
            href="/stories"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-medium text-sm sm:text-base bg-[#F3EDE4] text-[#252522] border border-[#D6CCBC] hover:bg-[#DDD3C3] hover:border-[#B6A58F] transition-all duration-300"
          >
            <span>Explore Case Studies</span>
          </Link>
        </div>

        {/* Metric Badges */}
        <div
          className={`mt-14 pt-10 border-t border-[#D6CCBC]/80 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto transition-all duration-500 delay-400 ${
            isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="flex flex-col items-center">
            <span className="font-gendy text-2xl sm:text-3xl font-bold text-[#252522]">99.4%</span>
            <span className="text-xs text-[#706D66] font-quicksand mt-1">Execution Accuracy</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-gendy text-2xl sm:text-3xl font-bold text-[#B6A58F]">&gt;65%</span>
            <span className="text-xs text-[#706D66] font-quicksand mt-1">OpEx Reduction</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-gendy text-2xl sm:text-3xl font-bold text-[#252522]">10x</span>
            <span className="text-xs text-[#706D66] font-quicksand mt-1">Process Velocity</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-gendy text-2xl sm:text-3xl font-bold text-[#B6A58F]">24/7</span>
            <span className="text-xs text-[#706D66] font-quicksand mt-1">Autonomous Uptime</span>
          </div>
        </div>
      </div>
    </section>
  );
}
