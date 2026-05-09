"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import Image from "next/image";
import { useScrollAnimation } from "../../lib/useScrollAnimation";
import sliderIcon1 from "../../public/images/aiicon.svg";
import sliderIcon2 from "../../public/images/ai-technology.png";
import sliderIcon3 from "../../public/images/webicon.svg";
import sliderIcon4 from "../../public/images/statistic.png";
import sliderIcon5 from "../../public/images/chat-bot.png";
import sliderIcon6 from "../../public/images/mobileIcon.svg";
import sliderIcon7 from "../../public/images/arrangement-chart-form-svgrepo-com.svg";
import sliderIcon8 from "../../public/images/ai.png";

export default function SliderHero() {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section
      ref={elementRef}
      className={`bg-[#000000] hero-slider-otr relative z-[3] py-8 max-tablet:py-2 px-39 max-desktop:px-10 max-tablet:px-5 transition-all duration-700 ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
      }`}
      aria-label="Services we offer slider"
    >
      
      <div className="hero-slider-inr">
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 80,
            },
          }}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={2000}
          freeMode={{
            enabled: true,
            momentum: false,
            sticky: true,
          }}
          modules={[Autoplay, FreeMode]}
          touchEventsTarget="container"
          className="mySwiper"
          aria-label="Hero services slider"
        >
          {[
            { icon: sliderIcon1, text: "AI Workflow Automation" },
            { icon: sliderIcon2, text: "Agentic AI Systems" },
            { icon: sliderIcon3, text: "Multi-Agent Orchestration" },
            { icon: sliderIcon4, text: "Autonomous Agents" },
            { icon: sliderIcon5, text: "Process Orchestration" },
            { icon: sliderIcon6, text: "AI Integration & APIs" },
            { icon: sliderIcon7, text: "Robotic Process Automation" },
            { icon: sliderIcon8, text: "AI Strategy & Consulting" },
            { icon: sliderIcon8, text: "Monitoring & Governance" },
          ].map((item, index) => (
            <SwiperSlide key={index}>
              <div className="slider-hero-slide flex items-center gap-2 px-2 transition-all duration-300 hover:scale-110 cursor-pointer group">
                <Image
                  className="star1 w-11 h-11 max-tablet:w-8 max-tablet:h-8 transition-all duration-300 group-hover:filter group-hover:brightness-150"
                  src={item.icon}
                  alt={item.text}
                  width={44}
                  height={44}
                />
                <p className="text-[#ffffff] text-sm max-tablet:text-xs transition-all duration-300 group-hover:text-[#00a8a8]">
                  {item.text}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
