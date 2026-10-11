"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import logoImg from "../../public/images/Logo.png";
import GetAQuoteModal from "./GetAQuoteButton";

export default function Navbar() {
  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Success Stories", href: "/stories" },
    { name: "Get a Quote", href: "#", isModal: true },
    { name: "Contact Us", href: "/contact" },
  ];

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Scroll listener for enhanced header elevation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Hydration-safe body scroll locking
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (isSidebarOpen || isQuoteModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isSidebarOpen, isQuoteModalOpen]);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleGetQuoteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsQuoteModalOpen(true);
    closeSidebar();
  };

  const closeQuoteModal = () => {
    setIsQuoteModalOpen(false);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_4px_20px_-4px_rgba(26,26,26,0.05)] border-b border-[#E5DFD3]"
            : "bg-white/90 backdrop-blur-sm border-b border-[#E5DFD3]/80"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo Section */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-2 group" aria-label="Tekstack home">
                <div className="relative w-12 h-12 flex items-center justify-center rounded-xl bg-[#F5F2EB] border border-[#E5DFD3] p-1.5 transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src={logoImg}
                    alt="Tekstack Logo"
                    width={40}
                    height={40}
                    priority
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-gendy text-2xl font-bold tracking-tight text-[#1A1A1A]">
                    tekstack<span className="text-[#C2A676]">.ai</span>
                  </span>
                  <span className="text-[10px] tracking-widest uppercase font-medium text-[#666158]">
                    AI Systems & Automation
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 bg-[#F5F2EB]/80 p-1.5 rounded-full border border-[#E5DFD3]">
              {menuItems.map((item) => {
                const isActive = pathname === item.href && !item.isModal;
                if (item.isModal) {
                  return (
                    <button
                      key={item.name}
                      onClick={handleGetQuoteClick}
                      className="px-5 py-2 text-sm font-medium font-quicksand text-[#1A1A1A] hover:text-[#C2A676] rounded-full transition-colors duration-200 cursor-pointer"
                    >
                      {item.name}
                    </button>
                  );
                }
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative px-5 py-2 text-sm font-medium font-quicksand rounded-full transition-all duration-200 ${
                      isActive
                        ? "bg-white text-[#1A1A1A] font-semibold shadow-sm border border-[#E5DFD3]"
                        : "text-[#666158] hover:text-[#1A1A1A] hover:bg-white/60"
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#C2A676]"></span>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Action CTA & Mobile Trigger */}
            <div className="flex items-center gap-3">
              <button
                onClick={handleGetQuoteClick}
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#1A1A1A] text-white hover:bg-[#C2A676] transition-all duration-300 btn-hover-lift cursor-pointer"
              >
                <span>Get a Quote</span>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

              {/* Mobile Hamburger Toggle */}
              <button
                onClick={toggleSidebar}
                className="lg:hidden p-2.5 rounded-xl bg-[#1A1A1A] text-[#C2A676] border border-[#1A1A1A] hover:bg-[#C2A676] hover:text-[#1A1A1A] transition-colors focus:outline-none cursor-pointer shadow-sm"
                aria-label="Toggle navigation menu"
                aria-expanded={isSidebarOpen}
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isSidebarOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Beige & White Frosted Overlay) */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isSidebarOpen ? "visible" : "invisible pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`fixed inset-0 bg-[#1A1A1A]/30 backdrop-blur-sm transition-opacity duration-300 ${
            isSidebarOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeSidebar}
        />

        {/* Sliding Panel */}
        <div
          className={`fixed top-0 left-0 right-0 bg-[#FFFFFF] border-b border-[#E5DFD3] shadow-2xl transition-transform duration-300 ease-out ${
            isSidebarOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          {/* Top Beige Stripe */}
          <div className="h-1 bg-[#C2A676] w-full" />

          <div className="container mx-auto px-5 py-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#E5DFD3]">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#C2A676]" />
                <span className="font-semibold text-[#1A1A1A]">Menu</span>
              </div>
              <button
                onClick={closeSidebar}
                className="p-1.5 rounded-lg text-[#666158] hover:text-[#1A1A1A] hover:bg-[#F5F2EB] transition-colors"
                aria-label="Close menu"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <ul className="py-4 space-y-2">
              {menuItems.map((item) => {
                const isActive = pathname === item.href && !item.isModal;
                if (item.isModal) {
                  return (
                    <li key={item.name}>
                      <button
                        onClick={handleGetQuoteClick}
                        className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-left font-medium text-[#1A1A1A] bg-[#F5F2EB]/60 hover:bg-[#F5F2EB] border border-[#E5DFD3] transition-colors"
                      >
                        <span>{item.name}</span>
                        <span className="text-[#C2A676] text-xs font-semibold uppercase tracking-wider">
                          Quote &rarr;
                        </span>
                      </button>
                    </li>
                  );
                }
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={closeSidebar}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl font-medium transition-colors ${
                        isActive
                          ? "bg-[#F5F2EB] text-[#1A1A1A] font-semibold border border-[#E5DFD3]"
                          : "text-[#666158] hover:text-[#1A1A1A] hover:bg-[#F5F2EB]/40"
                      }`}
                    >
                      <span>{item.name}</span>
                      {isActive && <span className="w-2 h-2 rounded-full bg-[#C2A676]"></span>}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="pt-4 border-t border-[#E5DFD3] flex flex-col gap-3">
              <a
                href="mailto:hello@tekstack.ai"
                className="text-xs text-[#666158] text-center hover:text-[#1A1A1A]"
              >
                Need assistance? hello@tekstack.ai
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Request Modal */}
      <GetAQuoteModal isOpen={isQuoteModalOpen} onClose={closeQuoteModal} />
    </>
  );
}