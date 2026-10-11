"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logoImg from "../../public/images/Logo.png";
import GetAQuoteModal from "./GetAQuoteButton";
import { useState } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const closeQuoteModal = () => {
    setIsQuoteModalOpen(false);
  };

  const handleGetQuoteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsQuoteModalOpen(true);
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
      url: "https://www.linkedin.com/company/tekstack1/?viewAsMember=true",
    },
  ];

  const pageLinks = [
    { name: "Home", href: "/" },
    { name: "Success Stories", href: "/stories" },
    { name: "Get a Quote", href: "#", isModal: true },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      <footer className="bg-[#F5F2EB] border-t border-[#E5DFD3] text-[#1A1A1A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#E5DFD3]">
            {/* Brand Column */}
            <div className="md:col-span-5 flex flex-col items-start">
              <Link href="/" className="flex items-center gap-2 mb-4 group" aria-label="Tekstack Home">
                <div className="relative w-11 h-11 flex items-center justify-center rounded-xl bg-white border border-[#E5DFD3] p-1.5 shadow-sm transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src={logoImg}
                    alt="Tekstack Logo"
                    width={36}
                    height={36}
                    className="object-contain"
                  />
                </div>
                <span className="font-gendy text-2xl font-bold tracking-tight text-[#1A1A1A]">
                  tekstack<span className="text-[#C2A676]">.ai</span>
                </span>
              </Link>
              <p className="font-quicksand text-sm text-[#666158] leading-relaxed max-w-sm mb-6">
                Pioneering intelligent system architectures, autonomous agent fleets, and resilient workflow automation for forward-thinking enterprises.
              </p>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#1A1A1A] border border-[#1A1A1A] text-[#C2A676] hover:bg-[#C2A676] hover:text-[#1A1A1A] hover:border-[#C2A676] flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-105"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links Column */}
            <div className="md:col-span-3">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-[#1A1A1A] mb-4">
                Navigation
              </h4>
              <ul className="space-y-2.5">
                {pageLinks.map((link) => {
                  const isActive = pathname === link.href && !link.isModal;
                  return (
                    <li key={link.name}>
                      {link.isModal ? (
                        <button
                          onClick={handleGetQuoteClick}
                          className="text-sm font-medium text-[#666158] hover:text-[#C2A676] transition-colors cursor-pointer"
                        >
                          {link.name}
                        </button>
                      ) : (
                        <Link
                          href={link.href}
                          className={`text-sm font-medium transition-colors ${
                            isActive
                              ? "text-[#C2A676] font-semibold"
                              : "text-[#666158] hover:text-[#C2A676]"
                          }`}
                        >
                          {link.name}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Contact Details Column */}
            <div className="md:col-span-4">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-[#1A1A1A] mb-4">
                Direct Contact
              </h4>
              <div className="space-y-3 text-sm font-quicksand text-[#666158]">
                <p>
                  <strong className="text-[#1A1A1A] font-medium block">Inquiries:</strong>
                  <a href="mailto:hello@tekstack.ai" className="hover:text-[#C2A676] transition-colors">
                    hello@tekstack.ai
                  </a>
                </p>
                <p>
                  <strong className="text-[#1A1A1A] font-medium block">Phone:</strong>
                  <a href="tel:+923027899450" className="hover:text-[#C2A676] transition-colors">
                    +92 302 7899450
                  </a>
                </p>
                <p>
                  <strong className="text-[#1A1A1A] font-medium block">Headquarters:</strong>
                  16192 Coastal Highway, Lewes, Delaware, 19958, USA
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Copyright & Rights */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#666158] font-quicksand">
            <p>© {currentYear} tekstack.ai. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <span className="hover:text-[#1A1A1A] transition-colors">Enterprise AI Orchestration</span>
              <span className="w-1 h-1 rounded-full bg-[#E5DFD3]"></span>
              <span className="hover:text-[#1A1A1A] transition-colors">Multi-Agent Systems</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Quote Modal */}
      <GetAQuoteModal isOpen={isQuoteModalOpen} onClose={closeQuoteModal} />
    </>
  );
}