"use client";

import Image from "next/image";
import { useScrollAnimation } from "../../lib/useScrollAnimation";
import aboutImg1 from "../../public/images/about-us-img1.png";
import aboutImg2 from "../../public/images/about-us-img2.png";
import aboutImg3 from "../../public/images/about-us-img3.png";
import aboutRight from "../../public/images/about-right.svg";

export default function AboutUs() {
  const { elementRef: imagesRef, isVisible: imagesVisible } = useScrollAnimation({ threshold: 0.2 });
  const { elementRef: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <>
      <section
        className="relative overflow-hidden"
        aria-label="About Us section"
      >
        <div className="about-otr relative pt-28 pb-28 max-laptop:pb-12">
          <div className="flex items-center justify-center pb-3">
             <div className="inline-flex items-center gap-2 bg-white/5 rounded-full px-3 py-1.5 lg:px-5 lg:py-2.5 mb-4 lg:mb-8 animate-fade-in-down">
            <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-[#00a8a8]"></div>
            <span className="text-[#00a8a8] text-xs lg:text-sm font-medium font-quicksand uppercase tracking-wider">
              About
            </span>
          </div>
          </div>
          <div className="about-inr px-39 max-desktop:px-10 max-tablet:px-5 flex justify-center items-center gap-x-[50px] max-desktop:gap-x-[20px] max-laptop:flex-col">
            <div
              ref={imagesRef}
              className={`about-images flex gap-[13px] w-[574px] max-laptop:w-full max-tablet:hidden transition-all duration-700 ${
                imagesVisible ? 'animate-fade-in-left' : 'opacity-0 -translate-x-8'
              }`}
            >
              <div className="about-img1-otr max-laptop:w-full">
                <Image
                  className="about-img1 rounded-[20px] max-laptop:w-full max-laptop:h-[500px] object-cover transition-transform duration-500 hover:scale-105"
                  src={aboutImg1}
                  alt="Innovative AI team collaboration"
                />
              </div>
              <div className="about-small-imgs-otr flex flex-col gap-[11px] max-laptop:w-full">
                <div className="about-img2-otr">
                  <Image
                    className="about-img2 rounded-[20px] max-laptop:w-full max-laptop:h-[244px] object-cover transition-transform duration-500 hover:scale-105"
                    src={aboutImg2}
                    alt="Creative development process"
                  />
                </div>
                <div className="about-img3-otr">
                  <Image
                    className="about-img3 rounded-[20px] max-laptop:w-full max-laptop:h-[244px] object-cover transition-transform duration-500 hover:scale-105"
                    src={aboutImg3}
                    alt="AI-powered solutions showcase"
                  />
                </div>
              </div>
            </div>
            <div
              ref={contentRef}
              className={`about-content w-[551px] max-laptop:w-full max-tablet:text-center transition-all duration-700 delay-100 ${
                contentVisible ? 'animate-fade-in-right' : 'opacity-0 translate-x-8'
              }`}
            >
              <p className="about-heading font-gendy font-normal text-[60px] max-tablet:text-[50px]">
                About Us
              </p>
              <p className="about-desc-1">
                At <span className="about-highlight text-[#00FFFF] font-medium">tekstack</span>, we specialize in
                AI-based workflow automation, agentic AI, and multi-agent
                systems. We build intelligent orchestration layers and autonomous
                agents that integrate with enterprise systems to automate complex
                processes end-to-end.
              </p>
              <p className="about-desc-2 pt-2">
                Our interdisciplinary team of researchers, engineers and product
                designers delivers production-grade agentic solutions that
                improve operational efficiency, reduce latency in decision
                making, and scale across business units. We focus on secure,
                auditable deployments that deliver measurable ROI.
              </p>
             
            </div>
          </div>
        </div>
        <Image
          className="absolute -top-[209px] -rotate-30 -right-[25px] max-laptop:hidden"
          src={aboutRight}
          alt=""
          aria-hidden="true"
        />
        <Image
          className="absolute -top-[209px] -rotate-73 -left-[79px] max-laptop:hidden"
          src={aboutRight}
          alt=""
          aria-hidden="true"
        />
      </section>
    </>
  );
}
