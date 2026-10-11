import Link from "next/link";
import { ArrowUpRight, Bot, BrainCircuit, Check, Compass, Database, FileText, Network, ShieldCheck, Sparkles, Workflow } from "lucide-react";
import styles from "./HomeServices.module.css";

const services = [
  { number: "02", icon: BrainCircuit, title: "Custom AI products", description: "Make your expertise more accessible with purpose-built copilots, knowledge systems, and intelligent applications.", tags: ["Enterprise copilots", "Knowledge & retrieval"] },
  { number: "03", icon: Network, title: "Integration & engineering", description: "Connect AI to the systems you rely on, with thoughtful architecture, secure data flows, and room to scale.", tags: ["APIs & data pipelines", "Cloud architecture"] },
  { number: "04", icon: Compass, title: "AI strategy & advisory", description: "Find the right starting point. Align your teams, prioritize valuable use cases, and build a practical adoption roadmap.", tags: ["Readiness & discovery", "Pilot planning"] },
];

export default function HomeServices() {
  return (
    <section id="services" className={styles.section} aria-labelledby="services-heading">
      <div className={styles.container}>
        <header className={styles.header}>
          <div><p className={styles.eyebrow}><span />What we build</p><h2 id="services-heading">Real challenges.<br /><span>Intelligent solutions.</span></h2></div>
          <div className={styles.intro}><p>From the first opportunity to the systems that make it happen. We bring the strategy, engineering, and care your AI initiatives deserve.</p><Link href="/contact">Find your starting point<ArrowUpRight size={17} aria-hidden="true" /></Link></div>
        </header>
        <div className={styles.grid}>
          <article className={`${styles.card} ${styles.featured}`}>
            <div className={styles.cardTop}><span>01 / AUTOMATE WITH INTENT</span><Workflow size={25} strokeWidth={1.4} aria-hidden="true" /></div>
            <div className={styles.miniFlow} aria-hidden="true">
              <span className={styles.input}><FileText size={21} strokeWidth={1.4} /><span>Incoming work</span></span>
              <span className={styles.connector} />
              <span className={styles.agent}><Bot size={25} strokeWidth={1.4} /><span>AI agent</span></span>
              <span className={styles.connector} />
              <span className={styles.output}><Check size={22} strokeWidth={1.4} /><span>Action taken</span></span>
            </div>
            <h3>AI agents & automation</h3>
            <p>Give complex, repetitive work a smarter path. We build agents that reason, coordinate, and act across your business—with people in control.</p>
            <div className={styles.tags}><span>Multi-agent systems</span><span>Workflow orchestration</span></div>
          </article>
          {services.map(({ number, icon: Icon, title, description, tags }) => (
            <article key={number} className={styles.card}>
              <div className={styles.cardTop}><span>{number} / BUILT FOR YOUR BUSINESS</span><Icon size={25} strokeWidth={1.4} aria-hidden="true" /></div>
              <div className={styles.serviceMark} aria-hidden="true">
                {number === "02" && <><span><Database size={25} strokeWidth={1.1} /></span><i /><span className={styles.markCenter}><Sparkles size={29} strokeWidth={1.1} /></span><i /><span><FileText size={25} strokeWidth={1.1} /></span></>}
                {number === "03" && <><span><Network size={26} strokeWidth={1.1} /></span><i /><span className={styles.markCenter}><ShieldCheck size={29} strokeWidth={1.1} /></span><i /><span><Database size={25} strokeWidth={1.1} /></span></>}
                {number === "04" && <div className={styles.roadmap}><span>Discover</span><i /><span>Prioritize</span><i /><span>Build</span></div>}
              </div>
              <h3>{title}</h3><p>{description}</p>
              <div className={styles.tags}>{tags.map(tag => <span key={tag}>{tag}</span>)}</div>
            </article>
          ))}
        </div>
        <p className={styles.note}><ShieldCheck size={15} aria-hidden="true" />Security, observability, and human oversight are part of the architecture from day one.</p>
      </div>
    </section>
  );
}
