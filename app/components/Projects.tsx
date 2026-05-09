"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useScrollAnimation, useStaggerAnimation } from "../../lib/useScrollAnimation";

const projectsData = {
  all: [
    {
      id: 1,
      title: "Agentic Workflow Orchestrator",
      description: "A multi-agent orchestration platform that coordinates autonomous agents to complete end-to-end business processes, with built-in retry, monitoring and audit trails.",
      image: "/images/projects/agentic-orchestrator.jpg",
      video: "agentic-orchestrator",
      tags: ["Agentic AI", "Orchestration", "Workflow"],
      liveLink: "#",
      category: "ai"
    },
    {
      id: 2,
      title: "Autonomous Agent Fleet for Logistics",
      description: "An agentic system that automates scheduling, routing and exception handling across a fleet of logistics tasks, reducing manual coordination.",
      image: "/images/projects/agent-fleet.jpg",
      video: "agent-fleet",
      tags: ["Multi-Agent", "Logistics", "Autonomy"],
      liveLink: "#",
      category: "ai"
    },
    {
      id: 3,
      title: "AI-Driven Process Automation Platform",
      description: "Platform combining RPA and agent decisioning to automate invoice processing, approvals, and exception workflows with human-in-the-loop oversight.",
      image: "/images/projects/process-automation.jpg",
      video: "process-automation",
      tags: ["RPA", "Automation", "AI"],
      liveLink: "#",
      category: "ai"
    },
    {
      id: 4,
      title: "Conversational Agent for Support",
      description: "An NLP-powered conversational agent that routes and resolves customer requests autonomously or escalates to human agents when needed.",
      image: "/images/projects/conversational-agent.jpg",
      video: "conversational-agent",
      tags: ["NLP", "Agentic", "Support"],
      liveLink: "#",
      category: "ai"
    },
    {
      id: 5,
      title: "Predictive Maintenance & Agentic Monitoring",
      description: "Edge agents monitor equipment telemetry and coordinate maintenance workflows, triggering field service agents and automating parts ordering.",
      image: "/images/projects/predictive-maintenance.jpg",
      video: "predictive-maintenance",
      tags: ["Edge AI", "Monitoring", "Agents"],
      liveLink: "#",
      category: "ai"
    },
    {
      id: 6,
      title: "Platform Integrations & APIs",
      description: "Custom integrations connecting agentic orchestration to ERPs, CRMs and data platforms to enable end-to-end automation.",
      image: "/images/projects/integrations.jpg",
      video: "integrations",
      tags: ["Integration", "APIs", "SaaS"],
      liveLink: "#",
      category: "ai"
    }
  ],
  ai: [
    {
      id: 1,
      title: "AI-Powered Healthcare Diagnostic System",
      description: "An advanced AI system that analyzes medical images and patient data to provide accurate diagnostic recommendations. Uses deep learning algorithms trained on millions of medical records to assist doctors in early disease detection and treatment planning.",
      image: "/images/projects/healthcare-ai.jpg",
      tags: ["AI", "Healthcare", "Deep Learning"],
      liveLink: "https://healthcare-ai-demo.vercel.app",
      category: "ai"
    },
    {
      id: 2,
      title: "Autonomous Drone Navigation System",
      description: "Computer vision-based autonomous drone system for real-time obstacle avoidance and path planning. Implements reinforcement learning algorithms for efficient navigation in complex environments.",
      image: "/images/projects/drone-ai.jpg",
      tags: ["AI", "Computer Vision", "Robotics"],
      liveLink: "https://drone-ai-demo.vercel.app",
      category: "ai"
    },
    {
      id: 5,
      title: "Predictive Maintenance System",
      description: "IoT-based predictive maintenance system using machine learning to predict equipment failures before they occur. Reduces downtime by 40% and maintenance costs by 25%.",
      image: "/images/projects/predictive-maintenance.jpg",
      tags: ["AI", "IoT", "Predictive Analytics"],
      liveLink: "https://predictive-demo.vercel.app",
      category: "ai"
    }
  ],
  frontend: [
    {
      id: 3,
      title: "E-Commerce Platform with AI Recommendations",
      description: "Modern e-commerce platform featuring AI-powered product recommendations, personalized shopping experiences, and intelligent search functionality. Built with Next.js, Node.js, and integrated with machine learning models.",
      image: "/images/projects/ecommerce.jpg",
      tags: ["Frontend", "Next.js", "AI"],
      liveLink: "https://ecommerce-demo.vercel.app",
      category: "frontend"
    },
    {
      id: 4,
      title: "Real-Time Chat Application",
      description: "Full-stack chat application with real-time messaging, file sharing, and video calling capabilities. Features end-to-end encryption and seamless user experience across devices.",
      image: "/images/projects/chat-app.jpg",
      tags: ["Frontend", "React", "WebSockets"],
      liveLink: "https://chat-app-demo.vercel.app",
      category: "frontend"
    },
    {
      id: 6,
      title: "Portfolio & Creative Agency Website",
      description: "Modern portfolio website for creative agency with smooth animations, interactive elements, and responsive design. Showcases projects and client work beautifully.",
      image: "/images/projects/portfolio.jpg",
      tags: ["Frontend", "TailwindCSS", "Framer Motion"],
      liveLink: "https://portfolio-demo.vercel.app",
      category: "frontend"
    }
  ]
};

export default function Projects({ videoSlugs = [], videoMeta = {} }: { videoSlugs?: string[], videoMeta?: Record<string, any> }) {
  const [hoveredProject, setHoveredProject] = useState(null);
  const { containerRef, isVisible, getItemStyle } = useStaggerAnimation(Math.max(videoSlugs?.length || 0, 6), 0.08);

  // Generate project entries from video files (slug -> project)
  const generatedFromVideos = (videoSlugs || []).map((slug, idx) => {
    const meta = (videoMeta && videoMeta[slug]) || {};
    const title = meta.title || slug.replace(/_/g, " ");
    return {
      id: 1000 + idx,
      title,
      description: meta.description || `Auto-generated demo project for video ${slug}. Replace with real content.`,
      image: meta.image || "/images/projects/placeholder.jpg",
      video: slug,
      tags: meta.tags || ["VideoDemo"],
      liveLink: meta.liveLink || "#",
      category: meta.category || "ai",
    };
  });

  // If there are video files, show only generated projects (one per video).
  // Otherwise fall back to the hardcoded projects list.
  const currentProjectsMerged = (videoSlugs && videoSlugs.length > 0)
    ? generatedFromVideos
    : (projectsData[activeTab] || projectsData.all);

  return (
    <section className="bg-gradient-to-b from-black to-[#0a0a0a] py-12 tablet4:py-14 tablet3:py-16 tablet2:py-18 tablet:py-20 laptop:py-24">
      <div className="container mx-auto px-4 tablet3:px-5 tablet:px-6 laptop:px-8 desktop:px-10">
        {/* Section Header */}
         <div className="flex justify-center pb-3">
             <div className="inline-flex items-center gap-2 bg-white/5 rounded-full px-3 py-1.5 lg:px-5 lg:py-2.5 mb-4 lg:mb-8">
            <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-[#00a8a8]"></div>
            <span className="text-[#00a8a8] text-xs lg:text-sm font-medium font-quicksand uppercase tracking-wider">
              All Projects
            </span>
          </div>
          </div>
        <div className="text-center mb-8 tablet4:mb-10 tablet3:mb-12 tablet2:mb-14 tablet:mb-16 laptop:mb-20">
          <h2 className="font-gendy text-3xl tablet3:text-4xl tablet:text-5xl laptop:text-6xl text-white mb-2 tablet:mb-3 laptop:mb-4">
            PROJECTS
          </h2>
          <p className="font-quicksand text-gray-400 text-sm tablet3:text-base tablet:text-lg max-w-2xl mx-auto">
            We bring results. Our clients are proof.
          </p>
        </div>

        {/* Projects Grid - Responsive columns with custom breakpoints */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 tablet2:grid-cols-2 laptop:grid-cols-3 gap-5 tablet4:gap-6 tablet3:gap-7 tablet2:gap-8"
        >
          {currentProjectsMerged.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:border-[#00a8a8]/50 transition-all duration-500 hover:transform hover:scale-[1.02] flex flex-col h-full card-hover-lift ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
              }`}
              style={getItemStyle(index)}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image Placeholder */}
              <div className="relative h-40 tablet4:h-44 tablet3:h-48 tablet2:h-52 tablet:h-56 overflow-hidden bg-gradient-to-br from-[#00a8a8]/20 to-[#008a8a]/20 flex-shrink-0">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <svg className="w-10 h-10 tablet4:w-11 tablet4:h-11 tablet3:w-12 tablet3:h-12 tablet2:w-13 tablet2:h-13 tablet:w-14 tablet:h-14 text-white/30 mx-auto mb-1 tablet4:mb-1.5 tablet3:mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h14a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-white/40 text-[10px] tablet4:text-xs tablet3:text-sm">Project Preview</p>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Project Content */}
              <div className="p-4 tablet4:p-5 tablet3:p-6 flex flex-col flex-grow">
                <h3 className="font-gendy text-base tablet4:text-lg tablet3:text-xl text-white mb-2 tablet4:mb-2.5 tablet3:mb-3 line-clamp-2 min-h-[48px] tablet4:min-h-[52px] tablet3:min-h-[56px] tablet2:min-h-[60px]">
                  {project.title}
                </h3>
                <p className="font-quicksand text-gray-400 text-[11px] tablet4:text-xs tablet3:text-sm leading-relaxed mb-3 tablet4:mb-3.5 tablet3:mb-4 line-clamp-3 flex-grow">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-1 tablet4:gap-1.5 tablet3:gap-2 mb-3 tablet4:mb-3.5 tablet3:mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-1.5 tablet4:px-2 tablet3:px-3 py-0.5 tablet4:py-1 bg-white/10 rounded-full text-[9px] tablet4:text-[10px] tablet3:text-xs text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Demo Video Button */}
                <div className="flex items-center pt-2 border-t border-white/10 mt-auto">
                  {project.video && (
                    <a
                      href={`/video/${project.video}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[#00a8a8] hover:text-white font-medium transition-all duration-300 text-[11px] tablet4:text-xs tablet3:text-sm"
                      aria-label={`Open demo video for ${project.title}`}
                    >
                      Demo Video
                      <svg className="w-3 h-3 tablet4:w-3.5 tablet4:h-3.5 tablet3:w-4 tablet3:h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              {/* Animated Border on Hover */}
              <div className={`absolute inset-0 border-2 border-[#00a8a8] rounded-2xl pointer-events-none transition-all duration-500 ${hoveredProject === project.id ? 'opacity-100' : 'opacity-0'}`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}