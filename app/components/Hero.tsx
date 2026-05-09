"use client";

import Image from "next/image";
import { useScrollAnimation } from "../../lib/useScrollAnimation";
import starWhite from "../../public/images/hero-star-white.svg";
import starBlue from "../../public/images/hero-star-blue.svg";

export default function Hero() {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section
      ref={elementRef}
      className="hero-otr bg-[#000000] py-[51px] flex justify-center relative z-[3]"
    >
      {/* Background Video */}
      <div className="video-wrapper w-full h-full absolute z-[-1]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          aria-label="Background video showcasing futuristic animations"
        >
          <source src="/images/hero-gif.mp4" type="video/mp4" />
          <p>
            Your browser does not support HTML5 video. Please upgrade your
            browser.
          </p>
        </video>
      </div>

      <div className="hero-inr px-39 max-desktop:px-10 max-tablet:px-5">
        {/* Tagline */}
        <div className={`tagline-otr flex items-center justify-center gap-[5px] transition-all duration-700 ${
          isVisible ? 'animate-fade-in-down' : 'opacity-0 translate-y-8'
        }`}>
          <Image className="star1" src={starWhite} alt="White star icon" />
          <p className="tagline-text1 text-[#ffffff] font-quicksand font-semibold text-[15px] max-tablet2:text-[12px]">
            AI WORKFLOW AUTOMATION -{" "}
            <span className="relative left-[-5px] tagline-text2 text-[#00A8A8] font-quicksand font-semibold text-[15px] max-tablet2:text-[12px]">
               Agentic, Orchestrated, Reliable
            </span>
          </p>
          <Image className="star2" src={starBlue} alt="Blue star icon" />
        </div>

        {/* Hero Heading */}
        <h1 className={`hero-heading-otr flex items-baseline gap-[6px] max-laptop:justify-center transition-all duration-700 delay-100 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
        }`}>
          <span className="hero-heading text-[#ffffff] font-questrial font-semibold text-[60px] max-laptop:text-[40px] max-tablet2:text-[28px]">
            Automate complex workflows with agentic AI
          </span>
          <span className="block hero-heading-dot bg-[#00A8A8] w-3 h-3 rounded-full max-tablet2:w-2 max-tablet2:h-2 animate-glow-pulse"></span>
        </h1>

        {/* Description */}
        <p className={`hero-desc max-w-[700px] mx-auto text-[#ffffff] font-quicksand font-semibold text-[18px] max-tablet2:text-[14px] text-center transition-all duration-700 delay-200 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
        }`}>
          We design and deploy agentic AI and multi-agent systems that
          orchestrate and automate business workflows — reducing manual work,
          accelerating decisions, and delivering measurable operational impact.
        </p>

        {/* Call to Action */}
        <div className={`hero-action-otr mt-4 flex justify-center transition-all duration-700 delay-300 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
        }`}>
          <a href="/contact" className="group relative inline-flex items-center gap-2 px-8 py-3 border border-[#00a8a8] text-[#00a8a8] hover:text-white rounded-full font-medium transition-all duration-300 overflow-hidden btn-hover-lift">
            <span className="relative z-10">Talk to an Expert</span>
            <svg className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            <div className="absolute inset-0 bg-[#00a8a8] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </a>
        </div>
      </div>
    </section>
  );
}
