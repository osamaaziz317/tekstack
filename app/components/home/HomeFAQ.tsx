import { ArrowUpRight, Plus } from "lucide-react";
import styles from "./HomeFAQ.module.css";

const questions = [
  {
    question: "We know we need AI. Where do we start?",
    answer: "Start with a workflow, not a technology. We work with your team to understand the bottlenecks, review the available data, and identify a focused use case. You leave discovery with a practical roadmap and a clear definition of success.",
  },
  {
    question: "Can you work with our existing systems?",
    answer: "Yes. We design around your existing ERP, CRM, databases, and internal tools. During discovery, we review the available APIs, access requirements, and integration constraints so the solution fits the way your business operates.",
  },
  {
    question: "How do you approach security and human oversight?",
    answer: "We define data access, permissions, and approval points with your team before implementation. Sensitive actions can require human review, while logging and monitoring help your team understand what the system is doing. Deployment and data handling are scoped to your requirements.",
  },
  {
    question: "How long does a pilot take?",
    answer: "A focused pilot is typically planned over 4–6 weeks after discovery. The timeline depends on your data, integrations, and scope. We agree on milestones together and share working demos throughout the build.",
  },
  {
    question: "What happens after launch?",
    answer: "We plan the handover alongside the build, with documentation, team training, and agreed support responsibilities. Ongoing monitoring and improvements can be part of the engagement, so the system can evolve with your business.",
  },
];

export default function HomeFAQ() {
  return (
    <section id="faq" className={styles.section} aria-labelledby="faq-heading">
      <div className={styles.container}>
        <header className={styles.header}>
          <p className={styles.eyebrow}><span />Good questions</p>
          <h2 id="faq-heading" className={styles.heading}>Clarity<br /><span>starts here.</span></h2>
          <p className={styles.introduction}>A few things you might be wondering before we get started.</p>
          <a href="mailto:hello@tekstack.ai" className={styles.contactLink}>Ask us something else<ArrowUpRight size={16} aria-hidden="true" /></a>
        </header>
        <div className={styles.questions}>
          {questions.map((item, index) => (
            <details className={styles.question} key={item.question} name="home-faq" open={index === 0}>
              <summary className={styles.summary}>
                <span>{item.question}</span>
                <Plus size={18} aria-hidden="true" className={styles.toggleIcon} />
              </summary>
              <div className={styles.answer}><p>{item.answer}</p></div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
