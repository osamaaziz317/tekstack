"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import { useScrollAnimation } from "../../lib/useScrollAnimation";
import {
  Workflow,
  Bot,
  Network,
  Activity,
  MessageSquareCode,
  Boxes,
  Cpu,
  ShieldCheck,
  Gauge,
} from "lucide-react";

export default function SliderHero() {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.15 });

  const capabilities = [
    { icon: Workflow, text: "AI Workflow Automation", tag: "Core" },
    { icon: Bot, text: "Agentic AI Systems", tag: "Autonomous" },
    { icon: Network, text: "Multi-Agent Orchestration", tag: "Distributed" },
    { icon: Activity, text: "Continuous Observability", tag: "Telemetry" },
    { icon: MessageSquareCode, text: "Conversational Agents", tag: "NLP" },
    { icon: Boxes, text: "Enterprise API Gateways", tag: "Integration" },
    { icon: Cpu, text: "Intelligent RPA", tag: "Automation" },
    { icon: ShieldCheck, text: "Governance & Guardrails", tag: "Safety" },
    { icon: Gauge, text: "Real-Time Telemetry", tag: "SLA" },
  ];

  return (
    <section
      ref={elementRef}
      className={`bg-[#F5F2EB] py-6 sm:py-8 border-b border-[#E5DFD3] transition-all duration-500 ${
        isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-4"
      }`}
      aria-label="Capabilities ticker"
    >
      <div className="container mx-auto px-4">
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 28,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 32,
            },
          }}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={1800}
          freeMode={{
            enabled: true,
            momentum: false,
            sticky: true,
          }}
          modules={[Autoplay, FreeMode]}
          className="capabilities-swiper"
        >
          {capabilities.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <SwiperSlide key={index}>
                <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white border border-[#E5DFD3] shadow-[0_2px_8px_rgba(26,26,26,0.03)] hover:border-[#C2A676] hover:shadow-[0_4px_16px_rgba(194,166,118,0.18)] transition-all duration-300 group cursor-default">
                  <div className="w-10 h-10 rounded-xl bg-[#1A1A1A] group-hover:bg-[#C2A676] border border-[#1A1A1A] group-hover:border-[#C2A676] flex items-center justify-center p-2 flex-shrink-0 transition-all duration-300 group-hover:scale-105 shadow-sm">
                    <IconComponent className="w-5 h-5 text-[#C2A676] group-hover:text-[#1A1A1A] transition-colors" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-[#1A1A1A] group-hover:text-[#C2A676] transition-colors">
                      {item.tag}
                    </span>
                    <p className="text-xs sm:text-sm font-medium text-[#1A1A1A] truncate transition-colors">
                      {item.text}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
