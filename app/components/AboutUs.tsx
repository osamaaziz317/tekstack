"use client";

import Image from "next/image";
import { useScrollAnimation } from "../../lib/useScrollAnimation";
import aboutImg1 from "../../public/images/about-us-img1.png";
import aboutImg2 from "../../public/images/about-us-img2.png";
import aboutImg3 from "../../public/images/about-us-img3.png";

export default function AboutUs() {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.15 });

  const coreValues = [
    {
      title: "Agent Autonomy with Safety",
      description: "We architect agents capable of independent multi-step planning, bounded by strict policy enforcement and deterministic safety guardrails.",
    },
    {
      title: "Operational Observability",
      description: "Every tool call, reasoning step, and state mutation is logged into replayable audit pipelines for enterprise compliance.",
    },
    {
      title: "Measurable Economic ROI",
      description: "Our solutions are measured directly against latency reduction, error minimization, and operating expenditure compression.",
    },
  ];

  return (
    <section
      ref={elementRef}
      className="bg-[#F5F2EB] py-16 sm:py-20 lg:py-28 border-b border-[#E5DFD3]"
      aria-label="About Tekstack"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image Collage with Soft Beige Frames */}
          <div
            className={`lg:col-span-6 transition-all duration-700 ${
              isVisible ? "animate-fade-in-left" : "opacity-0 -translate-x-6"
            }`}
          >
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-7">
                <div className="relative h-[340px] sm:h-[420px] rounded-2xl overflow-hidden border border-[#E5DFD3] shadow-md group">
                  <Image
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src={aboutImg1}
                    alt="Autonomous AI engineering team"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/40 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4 right-4 p-3 bg-white/95 backdrop-blur-sm rounded-xl border border-[#E5DFD3] shadow-sm">
                    <p className="text-xs font-semibold text-[#1A1A1A]">Enterprise AI Architects</p>
                    <p className="text-[11px] text-[#666158]">Distributed agent system deployment</p>
                  </div>
                </div>
              </div>

              <div className="col-span-5 flex flex-col gap-4">
                <div className="relative h-[162px] sm:h-[202px] rounded-2xl overflow-hidden border border-[#E5DFD3] shadow-md group">
                  <Image
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src={aboutImg2}
                    alt="Agent workflow monitoring"
                  />
                </div>
                <div className="relative h-[162px] sm:h-[202px] rounded-2xl overflow-hidden border border-[#E5DFD3] shadow-md group">
                  <Image
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src={aboutImg3}
                    alt="System architecture schema"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Strategic Narrative */}
          <div
            className={`lg:col-span-6 transition-all duration-700 delay-150 ${
              isVisible ? "animate-fade-in-right" : "opacity-0 translate-x-6"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E5DFD3] mb-4">
              <span className="w-2 h-2 rounded-full bg-[#C2A676]"></span>
              <span className="text-xs font-semibold tracking-wider uppercase text-[#1A1A1A] font-quicksand">
                Who We Are
              </span>
            </div>

            <h2 className="font-gendy text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight mb-6">
              Engineering the Next Era of Enterprise Intelligence
            </h2>

            <p className="font-quicksand text-base sm:text-lg text-[#666158] leading-relaxed mb-6">
              At <strong className="text-[#1A1A1A] font-semibold">tekstack</strong>, we build production-grade agentic layers and multi-agent coordination frameworks. Rather than static chatbots, our architectures execute complete business lifecycles—integrating directly with enterprise software to process data, resolve exceptions, and enforce policies.
            </p>

            {/* Alternating Value Cards in Pure White with Soft Borders */}
            <div className="space-y-3.5 pt-2">
              {coreValues.map((val, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white border border-[#E5DFD3] hover:border-[#C2A676] transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-[#1A1A1A] border border-[#1A1A1A] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                      <svg className="w-3.5 h-3.5 text-[#C2A676]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-[#1A1A1A] mb-1">
                        {val.title}
                      </h4>
                      <p className="text-xs text-[#666158] leading-relaxed font-quicksand">
                        {val.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
