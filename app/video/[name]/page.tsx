import React from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { getVideoProject, listVideoSlugs } from "../../../lib/videos";

interface Props {
  params: Promise<{ name: string }>;
}

export default async function VideoPage({ params }: Props) {
  const { name } = await params;
  const project = getVideoProject(name);
  const otherSlugs = listVideoSlugs().filter((s) => s !== project?.slug);

  return (
    <div className="bg-white min-h-screen flex flex-col text-[#1A1A1A]">
      <Navbar />

      <main className="flex-1 py-10 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-quicksand text-[#666158]">
            <Link href="/" className="hover:text-[#1A1A1A] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/stories" className="hover:text-[#1A1A1A] transition-colors">
              Success Stories
            </Link>
            <span>/</span>
            <span className="text-[#1A1A1A] font-medium truncate max-w-xs">
              {project?.title || name}
            </span>
          </nav>

          {/* Heading Section */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F5F2EB] border border-[#E5DFD3] text-xs font-semibold text-[#1A1A1A] uppercase tracking-wider mb-3">
              <span className="w-2 h-2 rounded-full bg-[#C2A676]"></span>
              <span>Production Demo Showcase</span>
            </div>
            <h1 className="font-gendy text-2xl sm:text-4xl font-bold text-[#1A1A1A] tracking-tight mb-3">
              {project?.title || name.replace(/[-_]/g, " ")}
            </h1>
            <p className="font-quicksand text-sm sm:text-base text-[#666158] max-w-3xl leading-relaxed">
              {project?.description}
            </p>
          </div>

          {/* Fixed Aspect Ratio Video Container (Prevents layout shift) */}
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden bg-[#F5F2EB] border border-[#E5DFD3] shadow-lg mb-8">
            {project && project.sources.length > 0 ? (
              <video
                className="w-full h-full object-cover bg-black"
                controls
                autoPlay
                playsInline
                poster={project.image}
              >
                {project.sources.map((s) => (
                  <source key={s.src} src={s.src} type={s.type} />
                ))}
                <p className="p-4 text-center text-sm text-[#666158]">
                  Your browser does not support HTML5 video elements.
                </p>
              </video>
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-[#F5F2EB]">
                <div className="w-16 h-16 rounded-full bg-[#1A1A1A] border border-[#1A1A1A] flex items-center justify-center mb-4 text-[#C2A676] shadow-md">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-questrial font-bold text-lg text-[#1A1A1A] mb-2">
                  Demo Video In Processing
                </h3>
                <p className="text-sm font-quicksand text-[#666158] max-w-md mb-6 leading-relaxed">
                  The demo recording for <strong>{name}</strong> is currently being transcoded. You can explore our other active demonstrations below.
                </p>
                <Link
                  href="/stories"
                  className="px-6 py-2.5 rounded-full bg-[#1A1A1A] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#C2A676] transition-colors"
                >
                  Return to All Projects
                </Link>
              </div>
            )}
          </div>

          {/* Project Details Card */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 sm:p-8 rounded-2xl bg-[#F5F2EB] border border-[#E5DFD3] mb-12">
            <div className="md:col-span-2 space-y-4">
              <h3 className="font-questrial font-bold text-lg text-[#1A1A1A]">
                Architectural Tags &amp; Paradigms
              </h3>
              <div className="flex flex-wrap gap-2">
                {project?.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-white text-[#1A1A1A] border border-[#E5DFD3]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-xs font-quicksand text-[#666158] leading-relaxed pt-2">
                This architecture was designed to operate within fault-tolerant SLAs, ensuring automated rollback if agent sub-tasks exceed latency or error thresholds.
              </p>
            </div>

            <div className="flex flex-col justify-between p-5 rounded-xl bg-white border border-[#E5DFD3]">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#666158]">
                  Ready to deploy?
                </span>
                <h4 className="font-questrial font-bold text-base text-[#1A1A1A] mt-1 mb-2">
                  Request Custom Scoping
                </h4>
                <p className="text-xs text-[#666158] font-quicksand">
                  Incorporate this workflow pattern into your own tech stack.
                </p>
              </div>
              <Link
                href="/contact"
                className="mt-4 w-full py-2.5 rounded-full text-center text-xs font-semibold uppercase tracking-wider bg-[#1A1A1A] text-white hover:bg-[#C2A676] transition-colors"
              >
                Consult Our Team
              </Link>
            </div>
          </div>

          {/* Related Showcases */}
          {otherSlugs.length > 0 && (
            <div>
              <h3 className="font-questrial font-bold text-xl text-[#1A1A1A] mb-4">
                Other Architectural Showcases
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {otherSlugs.slice(0, 2).map((slug) => (
                  <Link
                    key={slug}
                    href={`/video/${slug}`}
                    className="p-5 rounded-xl bg-white border border-[#E5DFD3] hover:border-[#C2A676] hover:bg-[#F5F2EB]/50 transition-all flex items-center justify-between group"
                  >
                    <div>
                      <h4 className="font-medium text-sm text-[#1A1A1A] group-hover:text-[#1A1A1A]">
                        {slug.replace(/[-_]/g, " ")}
                      </h4>
                      <span className="text-xs text-[#666158] font-quicksand">View demo video &rarr;</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#F5F2EB] flex items-center justify-center text-[#1A1A1A] group-hover:bg-[#C2A676] group-hover:text-white transition-colors">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
