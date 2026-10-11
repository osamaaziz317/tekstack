import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

const companyLinks = [
  { label: "About us", href: "/about" },
  { label: "Our work", href: "/#our-work" },
  { label: "Our process", href: "/#our-process" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = ["AI agents", "Workflow automation", "Custom AI applications", "AI strategy & integration"];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.introduction}>
            <Link href="/" className={styles.brand} aria-label="Tekstack home">
              <Image src="/images/logo.svg" alt="" width={30} height={37} />
              <span>tekstack<span className={styles.brandSuffix}>.ai</span></span>
            </Link>
            <p className={styles.tagline}>AI with purpose.<br />Built around you.</p>
            <p className={styles.description}>From integration to governance, enterprise AI built around your people and the way you work.</p>
          </div>

          <nav className={styles.linkColumn} aria-label="Footer company navigation">
            <h2>Explore</h2>
            <ul>
              {companyLinks.map((link) => (
                <li key={link.href}><Link href={link.href}>{link.label}</Link></li>
              ))}
            </ul>
          </nav>

          <nav className={styles.linkColumn} aria-label="Footer services">
            <h2>What we do</h2>
            <ul>
              {serviceLinks.map((label) => (
                <li key={label}><Link href="/#services">{label}</Link></li>
              ))}
            </ul>
          </nav>

          <div className={styles.contactColumn}>
            <h2>Get in touch</h2>
            <a className={styles.email} href="mailto:hello@tekstack.ai">hello@tekstack.ai</a>
            <a href="tel:+923027899450">+92 302 7899450</a>
            <a
              className={styles.social}
              href="https://www.linkedin.com/company/tekstack1/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Tekstack on LinkedIn (opens in a new tab)"
            >
              LinkedIn
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6 18 18 6M6 6h12v12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} Tekstack. All rights reserved.</p>
          <p className={styles.signoff}><span aria-hidden="true" />Thoughtfully engineered. Human at heart.</p>
        </div>
      </div>
    </footer>
  );
}
