import Link from "next/link";
import { ArrowUpRight, Check, Fingerprint, Handshake, LockKeyhole, Network, ShieldCheck } from "lucide-react";
import styles from "./HomeApproach.module.css";

const principles = [
  { number: "01", icon: Network, title: "Fits your world", description: "We work with your existing infrastructure, data, and ways of working. The architecture follows your needs." },
  { number: "02", icon: ShieldCheck, title: "Trust is part of the design", description: "Clear permissions, human approvals, and observable decisions give your teams control as systems become more capable." },
  { number: "03", icon: Handshake, title: "A team alongside yours", description: "Work directly with the people building your system, from discovery and regular demos to handover and ongoing improvement." },
];

export default function HomeApproach() {
  return (
    <section className={styles.section} aria-labelledby="approach-heading">
      <div className={styles.container}>
        <div className={styles.left}>
          <p className={styles.eyebrow}><span />The Tekstack approach</p>
          <h2 id="approach-heading">Built for complexity.<br /><span>Designed for confidence.</span></h2>
          <p className={styles.description}>Thoughtful engineering. A close working partnership. AI your people can understand, trust, and build on.</p>
          <div className={styles.control} aria-hidden="true">
            <div className={styles.controlIcon}><Fingerprint size={31} strokeWidth={1.1} /></div>
            <div><span>YOUR ENTERPRISE. YOUR CONTROL.</span><p><LockKeyhole size={12} />Private by design<i />Human oversight<Check size={13} /></p></div>
          </div>
          <Link href="/about" className={styles.link}>Meet your engineering partner<ArrowUpRight size={17} aria-hidden="true" /></Link>
        </div>
        <div className={styles.principles}>
          {principles.map(({ number, icon: Icon, title, description }) => (
            <article className={styles.principle} key={number}>
              <span className={styles.number}>{number}</span>
              <div><h3>{title}</h3><p>{description}</p></div>
              <Icon size={23} strokeWidth={1.25} className={styles.icon} aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
