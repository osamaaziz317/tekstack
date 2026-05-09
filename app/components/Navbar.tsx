"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import logoImg from "../../public/images/Logo.png";
import logoMobile from "../../public/images/Logo.png";
import GetAQuoteModal from "./GetAQuoteButton"; // Fixed import name

export default function Navbar() {
  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Success Stories", href: "/stories" },
    { name: "Get a Quote", href: "#", isModal: true },
    { name: "Contact Us", href: "/contact" },
  ];
  
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const pathname = usePathname();
  
  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isSidebarOpen]);
  
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isQuoteModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isQuoteModalOpen]);
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  
  const handleGetQuoteClick = (e) => {
    e.preventDefault();
    setIsQuoteModalOpen(true);
    closeSidebar();
  };
  
  const closeQuoteModal = () => {
    setIsQuoteModalOpen(false);
  };

  return (
    <>
      <nav className="navbar-otr bg-[#000000] relative z-50">
        <div className="navbar-inr py-5 px-39 max-desktop:px-10 max-tablet:px-5 max-md:py-3 max-md:px-4 flex items-center max-laptop:justify-between relative">
          
          {/* Logo Section */}
          <div className="logo-otr">
            <Link href="/">
              <Image
                className="logo max-tablet:w-[55px] max-laptop:hidden w-[135px] h-[74px] object-cover cursor-pointer"
                src={logoImg}
                alt="tekstack.ai logo"
              />
            </Link>
            <Link href="/">
              <Image
                className="cursor-pointer w-[95px] h-[74px] object-cover hidden max-laptop:block"
                src={logoMobile}
                alt="Your Logo"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <ul className="max-laptop:hidden max-desktop:relative absolute left-2/4 -translate-x-2/4 ul-nav flex items-center gap-8 py-2 px-5 rounded-4xl bg-[#FFFFFF30] backdrop-blur-sm">
            {menuItems.map((item) => {
              const isActive = pathname === item.href && !item.isModal;
              return (
                <li key={item.name} className="li-nav">
                  {item.isModal ? (
                    <button
                      onClick={handleGetQuoteClick}
                      className={`a-nav transition-colors duration-200 cursor-pointer ${
                        isActive 
                          ? "text-[#00a8a8]" 
                          : "text-[#ffffff] hover:text-gray-300"
                      }`}
                      style={{
                        backgroundImage: 'linear-gradient(to right, #00a8a8, #00a8a8)',
                        backgroundPosition: isActive ? '0 100%' : '100% 100%',
                        backgroundSize: '100% 2px',
                        backgroundRepeat: 'no-repeat',
                        transition: 'background-position 0.3s ease',
                      }}
                    >
                      {item.name}
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={`a-nav transition-all duration-300 relative group ${
                        isActive 
                          ? "text-[#00a8a8]" 
                          : "text-[#ffffff] hover:text-[#00a8a8]"
                      }`}
                    >
                      {item.name}
                      <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-[#00a8a8] group-hover:w-full transition-all duration-300 ${isActive ? 'w-full' : ''}`}></span>
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Mobile Hamburger Button */}
          <div className="hidden max-laptop:flex max-laptop:justify-end">
            <button
              onClick={toggleSidebar}
              className="cursor-pointer p-0 focus:outline-none relative"
              aria-label="Open menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="rgba(255,255,255,1)"
                className="w-6 h-6 max-md:w-5 max-md:h-5"
              >
                <path d="M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z"></path>
              </svg>
            </button>
          </div>

          {/* Stylish Sidebar - Comes from Top to Bottom */}
          <div 
            className={`
              fixed top-0 left-0 w-full z-40
              transition-all duration-500 ease-out
              ${isSidebarOpen ? 'visible' : 'invisible'}
            `}
          >
            {/* Overlay */}
            <div 
              className={`
                fixed inset-0 bg-black/60 backdrop-blur-sm
                transition-opacity duration-500 ease-out
                ${isSidebarOpen ? 'opacity-100' : 'opacity-0'}
              `}
              onClick={closeSidebar}
            />
            
            {/* Sidebar Panel - Slides from Top */}
            <div 
              className={`
                fixed top-0 left-0 w-full
                bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]
                shadow-2xl
                transition-all duration-500 ease-out
                ${isSidebarOpen ? 'translate-y-0' : '-translate-y-full'}
              `}
            >
              {/* Decorative Top Border - Teal Color */}
              <div className="h-1 bg-[#00a8a8] w-full"></div>
              
              {/* Sidebar Content */}
              <div className="container mx-auto px-5 py-8 max-md:px-4 max-md:py-4 max-h-[90vh] overflow-y-auto">
                {/* Close Button & Header */}
                <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/20 max-md:mb-4 max-md:pb-3">
                  <div className="flex items-center gap-3 max-md:gap-2">
                    <div className="w-2 h-2 bg-[#00a8a8] rounded-full max-md:w-1.5 max-md:h-1.5"></div>
                    <span className="text-white text-xl font-semibold max-md:text-base">
                      Menu
                    </span>
                  </div>
                  <button
                    onClick={closeSidebar}
                    className="p-2 hover:bg-white/10 rounded-full transition-all duration-200 max-md:p-1"
                    aria-label="Close menu"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="rgba(255,255,255,1)"
                      className="w-6 h-6 max-md:w-4 max-md:h-4"
                    >
                      <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
                    </svg>
                  </button>
                </div>
                
                {/* Navigation Links with Menu Dots */}
                <ul className="space-y-3 max-md:space-y-1.5">
                  {menuItems.map((item, index) => {
                    const isActive = pathname === item.href && !item.isModal;
                    return (
                      <li 
                        key={item.name}
                        className={`
                          transform transition-all duration-500 ease-out
                          ${isSidebarOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}
                        `}
                        style={{ transitionDelay: `${index * 80}ms` }}
                      >
                        {item.isModal ? (
                          <button
                            onClick={handleGetQuoteClick}
                            className={`group flex items-center gap-4 py-4 px-6 rounded-2xl hover:bg-white/10 transition-all duration-300 w-full text-left max-md:gap-2.5 max-md:py-2.5 max-md:px-4 ${
                              isActive ? "bg-white/10" : "bg-white/5"
                            }`}
                          >
                            <div className="w-1.5 h-1.5 rounded-full transition-transform duration-300 group-hover:scale-125 max-md:w-1 max-md:h-1 bg-[#00a8a8]"></div>
                            <span className="text-lg font-medium group-hover:translate-x-1 transition-transform duration-300 max-md:text-sm text-white">
                              {item.name}
                            </span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                              className="w-5 h-5 ml-auto transition-all duration-300 max-md:w-3.5 max-md:h-3.5 text-white/30 group-hover:text-[#00a8a8] group-hover:translate-x-1"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                          </button>
                        ) : (
                          <Link
                            href={item.href}
                            onClick={closeSidebar}
                            className={`group flex items-center gap-4 py-4 px-6 rounded-2xl hover:bg-white/10 transition-all duration-300 max-md:gap-2.5 max-md:py-2.5 max-md:px-4 ${
                              isActive ? "bg-white/10" : "bg-white/5"
                            }`}
                          >
                            <div className={`w-1.5 h-1.5 rounded-full transition-transform duration-300 group-hover:scale-125 max-md:w-1 max-md:h-1 ${
                              isActive ? "bg-[#00a8a8]" : "bg-[#00a8a8]"
                            }`}></div>
                            <span className={`text-lg font-medium group-hover:translate-x-1 transition-transform duration-300 max-md:text-sm ${
                              isActive ? "text-[#00a8a8]" : "text-white"
                            }`}>
                              {item.name}
                            </span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                              className={`w-5 h-5 ml-auto transition-all duration-300 max-md:w-3.5 max-md:h-3.5 ${
                                isActive 
                                  ? "text-[#00a8a8] group-hover:translate-x-1" 
                                  : "text-white/30 group-hover:text-[#00a8a8] group-hover:translate-x-1"
                              }`}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
                
                <div className="mt-8 pt-6 border-t border-white/20 max-md:mt-4 max-md:pt-4">
                  <div className="text-center">
                    <p className="text-white/40 text-sm max-md:text-xs">Get in touch with us</p>
                    <p className="text-white/60 text-sm mt-1 max-md:text-xs max-md:mt-0.5">hello@tekstack.ai</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Modal with animations */}
      <GetAQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={closeQuoteModal}
      />
    </>
  );
}