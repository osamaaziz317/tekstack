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
  
  const handleGetQuoteClick = (e) => {
    e.preventDefault();
    setIsQuoteModalOpen(true);
  };
  
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 24 24">
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
      <footer className="bg-black border-t border-white/10">
        <div className="container mx-auto px-5 md:px-10 py-12 md:py-20">
          {/* Top Section - Logo */}
          <div className="flex justify-center mb-6 md:mb-12">
              <Link href="/" className="inline-block">
              <Image
                src={logoImg}
                alt="tekstack.ai logo"
                className="h-[100px] w-[100px] object-cover"
                priority
              />
            </Link>
          </div>

          {/* Social Handles */}
          <div className="flex justify-center gap-6 md:gap-12 mb-10 md:mb-16">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#00a8a8] transition-all duration-300 transform hover:scale-110"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Pages Navigation with Active Link Underline Effect - Single Line on Mobile */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-0 mb-10 md:mb-16">
            {pageLinks.map((link) => {
              const isActive = pathname === link.href && !link.isModal;
              return (
                <div key={link.name}>
                  {link.isModal ? (
                    <button
                      onClick={handleGetQuoteClick}
                      className={`relative text-sm sm:text-base md:text-lg font-medium transition-colors duration-300 pb-1.5 md:pb-2 whitespace-nowrap cursor-pointer ${
                        isActive 
                          ? "text-[#00a8a8]" 
                          : "text-gray-400 hover:text-white"
                      }`}
                    >
                      {link.name}
                      <span
                        className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#00a8a8] transition-transform duration-300 ease-out origin-left ${
                          isActive
                            ? "scale-x-100"
                            : "scale-x-0 group-hover:scale-x-100"
                        }`}
                      ></span>
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className={`relative text-sm sm:text-base md:text-lg font-medium transition-colors duration-300 pb-1.5 md:pb-2 whitespace-nowrap ${
                        isActive 
                          ? "text-[#00a8a8]" 
                          : "text-gray-400 hover:text-white"
                      }`}
                    >
                      {link.name}
                      <span
                        className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#00a8a8] transition-transform duration-300 ease-out origin-left ${
                          isActive
                            ? "scale-x-100"
                            : "scale-x-0 group-hover:scale-x-100"
                        }`}
                      ></span>
                    </Link>
                  )}
                </div>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-center pt-6 md:pt-8 border-t border-white/10">
<p className="text-gray-500 text-xs sm:text-sm md:text-base">
  © {currentYear} tekstack.ai. All rights reserved.
</p>
          </div>
        </div>

        {/* Add global styles for the underline effect if needed */}
        <style jsx>{`
          .group-hover\\:scale-x-100:hover {
            transform: scaleX(1);
          }
        `}</style>
      </footer>
      
      {/* Modal with animations - placed outside footer */}
      <GetAQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={closeQuoteModal}
      />
    </>
  );
}