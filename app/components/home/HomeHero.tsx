import Link from "next/link";
import { ArrowDown, ArrowUpRight, Check, Cloud, Database, Network, ShieldCheck } from "lucide-react";
import HeroSystemVisual from "./HeroSystemVisual";
import styles from "./HomeHero.module.css";

export default function HomeHero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.copy}>
            <p className={styles.eyebrow}><span />Your enterprise AI partner</p>
            <h1 id="hero-heading">Enterprise AI,<br /><span>put to work.</span></h1>
            <p className={styles.description}>Move beyond the proof of concept. We build intelligent agents and connected workflows that turn your AI ambition into everyday operational impact.</p>
            <div className={styles.actions}>
              <Link href="/contact" className={styles.primary}>Let’s build what’s next<ArrowUpRight size={18} aria-hidden="true" /></Link>
              <a href="#our-work" className={styles.secondary}>Explore our work<ArrowDown size={16} aria-hidden="true" /></a>
            </div>
            <div className={styles.reassurance}>
              <span><Check size={14} aria-hidden="true" />From strategy to production</span>
              <span><Check size={14} aria-hidden="true" />Built around your business</span>
            </div>
          </div>
          <div className={styles.art}><HeroSystemVisual /></div>
        </div>
        <div className={styles.foundation}>
          <p>New possibilities.<br /><strong>Your existing ecosystem.</strong></p>
          <div><Database size={21} strokeWidth={1.35} aria-hidden="true" /><span>Your data & knowledge</span></div>
          <div><Network size={21} strokeWidth={1.35} aria-hidden="true" /><span>Enterprise tools & APIs</span></div>
          <div><Cloud size={23} strokeWidth={1.35} aria-hidden="true" /><span>Cloud & private infrastructure</span></div>
          <div><ShieldCheck size={22} strokeWidth={1.35} aria-hidden="true" /><span>People & governance</span></div>
        </div>
      </div>
    </section>
  );
}
