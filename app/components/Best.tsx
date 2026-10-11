"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectCoverflow, Navigation, Autoplay, Pagination } from "swiper/modules";
import { useScrollAnimation } from "../../lib/useScrollAnimation";

interface FeatureItem {
  title: string;
  description: string;
}

interface SlideData {
  id?: number | string;
  title?: string;
  subtitle?: string;
  features?: FeatureItem[];
  isSkeleton?: boolean;
}

interface BestData {
  heading: string;
  description: string;
  slides: SlideData[];
}

// Dummy API service
const dummyApiService = {
  fetchBestData: (): Promise<BestData> => {
    return new Promise<BestData>((resolve) => {
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
      }, 300);
    });
  },
};

import {
  Workflow,
  Bot,
  Network,
  Cpu,
  Zap,
  Boxes,
  ShieldCheck,
  Compass,
} from "lucide-react";

const getSlideIcon = (id?: number | string) => {
  switch (id) {
    case 1:
      return Workflow;
    case 2:
      return Bot;
    case 3:
      return Network;
    case 4:
      return Cpu;
    case 5:
      return Zap;
    case 6:
      return Boxes;
    case 7:
      return ShieldCheck;
    case 8:
      return Compass;
    default:
      return Workflow;
  }
};

// Skeleton Card Component
const SkeletonCard = () => {
  return (
    <div className="min-h-[460px] w-full rounded-2xl border border-[#D6CCBC] p-7 bg-[#E8DFD2]/60 animate-pulse flex flex-col justify-between">
      <div>
        <div className="w-12 h-12 rounded-xl bg-[#D6CCBC] mb-4"></div>
        <div className="h-6 w-3/4 bg-[#D6CCBC] rounded mb-2"></div>
        <div className="h-4 w-full bg-[#D6CCBC] rounded mb-6"></div>
        <div className="space-y-3">
          <div className="h-4 w-5/6 bg-[#D6CCBC] rounded"></div>
          <div className="h-4 w-4/6 bg-[#D6CCBC] rounded"></div>
          <div className="h-4 w-5/6 bg-[#D6CCBC] rounded"></div>
        </div>
      </div>
      <div className="h-4 w-24 bg-[#D6CCBC] rounded mt-6"></div>
    </div>
  );
};

// Card Component
const BestCard = ({ data }: { data: SlideData }) => {
  const IconComponent = getSlideIcon(data.id);
  return (
    <div className="group min-h-[460px] w-full rounded-2xl border border-[#D6CCBC] p-7 bg-[#E8DFD2] hover:bg-white hover:border-[#B6A58F] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
      <div>
        <div className="w-12 h-12 rounded-xl bg-[#252522] group-hover:bg-[#B6A58F] border border-[#252522] group-hover:border-[#B6A58F] flex items-center justify-center p-2.5 mb-5 shadow-md transition-all duration-300 group-hover:scale-105">
          <IconComponent className="w-6 h-6 text-[#B6A58F] group-hover:text-[#252522] transition-colors" />
        </div>

        <h3 className="font-gendy font-bold text-xl uppercase tracking-tight text-[#252522] mb-2">
          {data.title}
        </h3>

        <p className="font-quicksand font-medium text-xs text-[#706D66] mb-6 leading-relaxed">
          {data.subtitle}
        </p>

        <div className="space-y-3.5">
          {data.features?.map((feature: FeatureItem, idx: number) => (
            <div key={idx} className="border-t border-[#D6CCBC]/60 pt-2.5 first:border-0 first:pt-0">
              <p className="font-semibold text-xs uppercase flex items-center gap-2 text-[#252522] mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#252522] group-hover:bg-[#B6A58F] inline-block transition-colors"></span>
                {feature.title}
              </p>
              <p className="font-quicksand font-normal text-xs text-[#706D66] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-5 border-t border-[#D6CCBC] flex items-center justify-between text-xs font-semibold text-[#252522]">
        <span>Explore Core Architecture</span>
        <span className="text-[#252522] font-bold group-hover:text-[#B6A58F] group-hover:translate-x-1 transition-all">&rarr;</span>
      </div>
    </div>
  );
};

export default function Best() {
  const [data, setData] = useState<BestData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await dummyApiService.fetchBestData();
        if (isMounted) {
          setData(result);
          setError(null);
        }
      } catch {
        if (isMounted) {
          setError("Failed to load capabilities. Please refresh.");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  const slidesData = loading
    ? Array(6).fill(null).map((_, i) => ({ id: `skeleton-${i}`, isSkeleton: true }))
    : data?.slides || [];

  return (
    <section
      ref={elementRef}
      className="bg-white py-16 sm:py-20 lg:py-28 border-b border-[#D6CCBC] overflow-hidden"
      aria-label="What we do best section"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8DFD2] border border-[#D6CCBC] mb-4 transition-all duration-500 ${
              isVisible ? "animate-fade-in-down" : "opacity-0 -translate-y-4"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#B6A58F]"></span>
            <span className="text-xs font-semibold tracking-wider uppercase text-[#252522] font-quicksand">
              Architectural Core
            </span>
          </div>

          <h2
            className={`font-gendy text-3xl sm:text-4xl lg:text-5xl font-bold text-[#252522] tracking-tight mb-4 transition-all duration-500 delay-100 ${
              isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-4"
            }`}
          >
            {loading ? "What We Do Best" : data?.heading}
          </h2>
          <p
            className={`font-quicksand text-base sm:text-lg text-[#706D66] leading-relaxed transition-all duration-500 delay-200 ${
              isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-4"
            }`}
          >
            {loading ? "Loading architectural capabilities..." : data?.description}
          </p>
        </div>

        {error ? (
          <div className="text-center py-12 bg-[#E8DFD2] rounded-2xl border border-[#D6CCBC] p-8 max-w-md mx-auto">
            <p className="text-sm text-[#706D66] mb-4">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-5 py-2 rounded-full bg-[#252522] text-white text-xs font-semibold hover:bg-[#B6A58F] transition-colors"
            >
              Retry
            </button>
          </div>
        ) : (
          <div
            className={`best-otr relative max-w-6xl mx-auto transition-all duration-500 delay-300 ${
              isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-4"
            }`}
          >
            <Swiper
              key={loading ? "skeleton" : "actual"}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 24,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 28,
                },
              }}
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              speed={750}
              navigation={true}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              initialSlide={1}
              coverflowEffect={{
                rotate: 24,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
              }}
              modules={[EffectCoverflow, Navigation, Autoplay, Pagination]}
              className="py-8 !pb-16"
            >
              {slidesData.map((slide) => (
                <SwiperSlide key={slide.id}>
                  {loading ? <SkeletonCard /> : <BestCard data={slide} />}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>
    </section>
  );
}