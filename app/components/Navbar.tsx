"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import styles from "./Navbar.module.css";

const navigation = [
  { label: "Services", href: "/#services" },
  { label: "Our work", href: "/#our-work" },
  { label: "Our process", href: "/#our-process" },
  { label: "About", href: "/about" },
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h16m-6-6 6 6-6 6"}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 901px)");
    const closeOnDesktop = () => {
      if (desktop.matches) {
        if (menuRef.current?.contains(document.activeElement) || document.activeElement === toggleRef.current) {
          headerRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();
        }
        setIsOpen(false);
      }
    };

    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    };
    const closeOutside = (event: Event) => {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOutside);
    document.addEventListener("focusin", closeOutside);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOutside);
      document.removeEventListener("focusin", closeOutside);
    };
  }, [isOpen]);

  return (
    <header className={styles.header} ref={headerRef}>
      <div className={styles.bar}>
        <Link href="/" className={styles.brand} aria-label="Tekstack home" onClick={() => setIsOpen(false)}>
          <Image src="/images/logo.svg" alt="" width={30} height={37} priority />
          <span>tekstack<span className={styles.brandSuffix}>.ai</span></span>
        </Link>

        <nav className={styles.desktopNav} aria-label="Main navigation">
          {navigation.map((item) => (
            <Link
              href={item.href}
              key={item.href}
              className={styles.navLink}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <Link href="/contact" className={styles.contactLink}>
            Let’s talk <Arrow diagonal />
          </Link>
          <button
            type="button"
            className={styles.menuToggle}
            onClick={() => setIsOpen((open) => !open)}
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            ref={toggleRef}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d={isOpen ? "m6 6 12 12M6 18 18 6" : "M4 8h16M4 16h16"}
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <nav
        className={styles.mobileNav}
        aria-label="Mobile navigation"
        id="mobile-navigation"
        hidden={!isOpen}
        ref={menuRef}
      >
        <div className={styles.mobileContent}>
          <span className={styles.menuLabel}>Explore Tekstack</span>
          <ul>
            {navigation.map((item, index) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  <span className={styles.mobileIndex}>0{index + 1}</span>
                  <span>{item.label}</span>
                  <Arrow />
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/contact" className={styles.mobileContact} onClick={() => setIsOpen(false)}>
            Let’s talk <Arrow diagonal />
          </Link>
        </div>
      </nav>
    </header>
  );
}
