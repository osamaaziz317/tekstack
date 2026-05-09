"use client";

import React, { useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

// import required modules
import { EffectCoverflow, Navigation } from "swiper/modules";

import Image from "next/image";
import { useScrollAnimation } from "../../lib/useScrollAnimation";
import cardIcon from "../../public/images/best-card-icon.svg";

// Dummy API service
const dummyApiService = {
  // Simulate API call with delay
  fetchBestData: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          heading: "What We Do Best",
          description:
            "We design and deliver agentic AI and workflow automation solutions that orchestrate complex processes, reduce manual work, and provide operational observability and governance.",
         slides: [
    {
      id: 1,
      title: "AI Workflow Automation",
      subtitle: "Automate repetitive and cross-system workflows with agent orchestration.",
      features: [
        { title: "End-to-End Orchestration", description: "Connect systems, data and agents into reliable pipelines that execute without manual intervention." },
        { title: "Human-in-the-Loop", description: "Safe escalation paths and approvals when human oversight is required." },
        { title: "Audit & Traceability", description: "Full audit trails and replayable workflows for compliance and debugging." },
      ],
    },
    {
      id: 2,
      title: "Agentic AI Systems",
      subtitle: "Design autonomous agents that plan, act, and learn to achieve business goals.",
      features: [
        { title: "Planner & Executor", description: "Agents that decompose goals into actionable steps and execute them reliably." },
        { title: "Goal-Oriented Behavior", description: "Policy-driven agents that prioritize objectives and resources." },
        { title: "Continuous Learning", description: "Feedback loops and retraining pipelines to improve agent performance." },
      ],
    },
    {
      id: 3,
      title: "Multi-Agent Orchestration",
      subtitle: "Coordinate agent fleets to run parallel tasks and handle complex workflows.",
      features: [
        { title: "Task Distribution", description: "Scale work across specialized agents for throughput and resilience." },
        { title: "Conflict Resolution", description: "Rules and negotiation patterns to resolve competing actions safely." },
        { title: "Monitoring & Healing", description: "Automated detection and recovery for failed agent tasks." },
      ],
    },
    {
      id: 4,
      title: "RPA & Intelligent Automation",
      subtitle: "Combine robotic process automation with AI decisioning for reliable task automation.",
      features: [
        { title: "Document & Data Extraction", description: "NLP and vision pipelines to parse documents and extract structured data." },
        { title: "Rule-Based Flows", description: "Deterministic steps integrated with probabilistic AI decisions." },
        { title: "Integrations", description: "Connectors to ERPs, CRMs and common business apps for end-to-end automation." },
      ],
    },
    {
      id: 5,
      title: "Edge & Real-Time AI",
      subtitle: "Deploy lightweight agents and models for low-latency decisions at the edge.",
      features: [
        { title: "Edge Deployment", description: "Run inference and small agents on-device for instant responses." },
        { title: "Stream Processing", description: "Real-time telemetry analysis and event-driven agent triggers." },
        { title: "Bandwidth Resilience", description: "Operate reliably with limited or intermittent connectivity." },
      ],
    },
    {
      id: 6,
      title: "AI Integration & APIs",
      subtitle: "Connect agentic systems to your data and services through secure APIs.",
      features: [
        { title: "Secure APIs", description: "Authenticated, rate-limited endpoints for agent communication." },
        { title: "Data Connectors", description: "Prebuilt adapters for common databases and SaaS platforms." },
        { title: "Event Bus", description: "Reliable messaging and event routing between services and agents." },
      ],
    },
    {
      id: 7,
      title: "Security & Governance",
      subtitle: "Embed observability, controls and policies into agentic deployments.",
      features: [
        { title: "Policy Enforcement", description: "Govern what agents can do and which data they can access." },
        { title: "Explainability", description: "Logs and explanations for agent decisions to support audits." },
        { title: "Access Controls", description: "Role-based permissions and secure secrets management." },
      ],
    },
    {
      id: 8,
      title: "AI Strategy & Consulting",
      subtitle: "Roadmaps, pilots and governance to adopt agentic AI responsibly.",
      features: [
        { title: "Pilot Programs", description: "Identify high-impact processes and run fast pilots to prove value." },
        { title: "Operational Roadmaps", description: "Planning for scale, SLOs and maintenance of agentic systems." },
        { title: "Compliance & Ethics", description: "Risk assessments and policies for safe AI adoption." },
      ],
    },
  ],
        });
      }, 1500);
    });
  },
};

// Skeleton Card Component
const SkeletonCard = () => {
  return (
    <div className="best-card-inr min-h-[487px] w-full rounded-[24px] border border-[#FFFFFF1A] pt-[23px] pb-[76px] px-[19px] max-tablet3:py-[30px] max-tablet3:px-[17px] backdrop-blur-md bg-[rgba(255,255,255,0.1)] animate-pulse">
      <div className="flex justify-center">
        <div className="w-12 h-12 rounded-full bg-white/20"></div>
      </div>
      <div className="pt-[12px] flex justify-center">
        <div className="h-7 w-36 bg-white/20 rounded"></div>
      </div>
      <div className="pt-2 flex justify-center">
        <div className="h-5 w-52 bg-white/20 rounded"></div>
      </div>
      <div className="pt-4 flex flex-col gap-[12px]">
        {[1, 2, 3].map((item) => (
          <div key={item}>
            <div className="flex items-center gap-[6px] mb-1">
              <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
              <div className="h-4 w-32 bg-white/20 rounded"></div>
            </div>
            <div className="h-12 w-full bg-white/20 rounded mt-1"></div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-[12px] right-[12px]">
        <div className="h-4 w-24 bg-white/20 rounded"></div>
      </div>

      <style jsx>{`
        .best-card-inr {
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          background-color: rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </div>
  );
};

// Card Component
const BestCard = ({ data }) => {
  return (
    <div className="best-card-inr min-h-[487px] w-full rounded-[24px] border border-[#FFFFFF1A] pt-[23px] pb-[76px] px-[19px] max-tablet3:py-[30px] max-tablet3:px-[17px] backdrop-blur-md bg-[rgba(255,255,255,0.1)] transition-all duration-300 hover:scale-105">
      <div className="flex justify-center">
        <Image
          className="cursor-pointer w-10 h-10"
          src={cardIcon}
          alt="Service icon"
          height={80}
          width={80}
        />
      </div>
      <p className="font-medium text-[22px] uppercase text-center pt-[12px] text-white">
        {data.title}
      </p>
      <p className="font-quicksand font-medium text-[13px] text-center text-gray-300">
        {data.subtitle}
      </p>
      <div className="pt-4 flex flex-col gap-[14px]">
        {data.features.map((feature, idx) => (
          <div key={idx}>
            <p className="font-medium text-[14px] uppercase flex items-center gap-[6px] text-white">
              <span className="w-1.5 h-1.5 rounded-full bg-white block"></span>{" "}
              {feature.title}
            </p>
            <p className="font-quicksand font-normal text-[14px] text-gray-300 w-full leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
      <p className="font-quicksand font-medium text-[11px] flex items-center gap-[6px] absolute bottom-[12px] right-[12px] text-white/60 hover:text-white transition-colors cursor-pointer">
        Explore More
        <span className="tl-span block w-1.5 h-1.5 rounded-full bg-white"></span>
      </p>

      <style jsx>{`
        .best-card-inr {
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          background-color: rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </div>
  );
};

export default function Best() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await dummyApiService.fetchBestData();
        setData(result);
        setError(null);
      } catch (err) {
        setError("Failed to load data. Please try again later.");
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return (
      <div className="relative overflow-hidden bg-black min-h-[400px]">
        <div className="best-otr relative bg-black pb-[40px]">
          <div className="best-inr px-39 max-desktop:px-10 max-tablet:px-5 relative">
            <div className="text-center text-red-500 py-20">
              <p>{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="mt-4 px-6 py-2 bg-[#00a8a8] text-white rounded-lg hover:bg-[#008a8a] transition-colors"
              >
                Retry
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Get slides data - either skeleton or actual
  const slidesData = loading 
    ? Array(6).fill(null).map((_, i) => ({ id: `skeleton-${i}`, isSkeleton: true }))
    : data?.slides || [];

  return (
    <div className="relative overflow-hidden">
      
      <div
        ref={elementRef}
        className={`best-otr relative bg-black pb-[40px] transition-all duration-700 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="best-inr px-39 max-desktop:px-10 max-tablet:px-5 relative">
          <p className={`best-heading font-gendy font-normal text-[60px] text-center max-tablet:text-[40px] text-white transition-all duration-700 ${
            isVisible ? 'animate-fade-in-down' : 'opacity-0 -translate-y-8'
          }`}>
            {loading ? "What We Do Best" : data?.heading}
          </p>
          <p className={`best-desc font-normal text-[16px] w-[844px] text-center mx-auto max-laptop:w-full text-white/80 transition-all duration-700 delay-100 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}>
            {loading ? "Loading amazing content..." : data?.description}
          </p>
          <div className={`best-row-main relative bg-cover bg-center bg-no-repeat transition-all duration-700 delay-200 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}>
            <Swiper
              key={loading ? "skeleton" : "actual"}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              navigation={true}
              initialSlide={1}
              slidesPerView={3}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              modules={[EffectCoverflow, Navigation]}
              className="mySwiper !pb-[70px] max-laptop:!pb-[50px] !pt-[47px]"
              onInit={(swiper) => {
                setTimeout(() => {
                  swiper.update();
                }, 50);
              }}
            >
              {slidesData.map((slide) => (
                <SwiperSlide key={slide.id}>
                  {loading ? <SkeletonCard /> : <BestCard data={slide} />}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}