import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import styles from "./HomeContact.module.css";

export default function HomeContact() {
  return (
    <section className={styles.section} aria-labelledby="contact-heading">
      <div className={styles.container}>
        <div className={styles.copy}><p className={styles.eyebrow}>Let’s make the next move count</p><h2 id="contact-heading">Your next advantage<br />starts with a conversation.</h2><p className={styles.description}>Bring us your challenge. We’ll help you find a clear path forward.</p></div>
        <div className={styles.actions}>
          <Link href="/contact" className={styles.button}>Start a conversation<ArrowUpRight size={20} aria-hidden="true" /></Link>
          <a href="mailto:hello@tekstack.ai" className={styles.email}>hello@tekstack.ai<ArrowUpRight size={13} aria-hidden="true" /></a>
        </div>
        <Image src="/images/logo.svg" width={196} height={238} alt="" className={styles.watermark} aria-hidden="true" />
      </div>
    </section>
  );
}
