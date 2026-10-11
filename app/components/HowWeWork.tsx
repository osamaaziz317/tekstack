"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, Check, Clock3, Compass, Layers3, Rocket } from "lucide-react";
import { useScrollAnimation } from "../../lib/useScrollAnimation";
import ProcessVisual from "./ProcessVisual";
import styles from "./HowWeWork.module.css";

const steps = [
  {
    id: "discovery",
    number: "01",
    title: "Discovery & strategy",
    description: "We get to know your business, find the right opportunities, and map a practical way forward.",
    timing: "1–2 weeks",
    icon: Compass,
    eyebrow: "First, the right foundation",
    headline: "Clarity before a single line of code.",
    detail: "Together, we turn your biggest workflow challenges into a focused plan with clear priorities and a shared definition of success.",
    deliverables: ["Workflow audit", "Success metrics", "Prioritized roadmap"],
    outcome: "A clear roadmap, built around your business.",
  },
  {
    id: "architecture",
    number: "02",
    title: "Architecture & pilot",
    description: "We connect your tools and build a working pilot around your highest-impact workflow.",
    timing: "4–6 weeks",
    icon: Layers3,
    eyebrow: "Then, make it tangible",
    headline: "Your vision. A working system.",
    detail: "Our engineers design, integrate, and test alongside your team. Regular demos keep you close to the work as the pilot takes shape.",
    deliverables: ["System architecture", "Working integrations", "Validated pilot"],
    outcome: "A working pilot you can test with your team.",
  },
  {
    id: "scale",
    number: "03",
    title: "Deploy & scale",
    description: "We launch with confidence, support your team, and keep improving as your business grows.",
    timing: "Ongoing partnership",
    icon: Rocket,
    eyebrow: "Built for what comes next",
    headline: "Launch is just the beginning.",
    detail: "We bring your system into production with monitoring and a supported handover, then use real-world feedback to refine and expand it.",
    deliverables: ["Production rollout", "Team handover", "Continuous improvement"],
    outcome: "A supported system, ready for your next chapter.",
  },
] as const;

export default function HowWeWork() {
  const [activeStep, setActiveStep] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.12 });

  function handleTabKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let nextIndex: number;

    switch (event.key) {
      case "ArrowDown":
      case "ArrowRight":
        nextIndex = (index + 1) % steps.length;
        break;
      case "ArrowUp":
      case "ArrowLeft":
        nextIndex = (index - 1 + steps.length) % steps.length;
        break;
      case "Home":
        nextIndex = 0;
        break;
      case "End":
        nextIndex = steps.length - 1;
        break;
      default:
        return;
    }

    event.preventDefault();
    setActiveStep(nextIndex);
    tabRefs.current[nextIndex]?.focus();
  }

  return (
    <section
      id="our-process"
      ref={elementRef}
      className={styles.section}
      aria-labelledby="process-heading"
      data-visible={isVisible}
    >
      <div className={styles.container}>
        <header className={styles.header}>
          <div>
            <p className={styles.eyebrow}><span />Our Process</p>
            <h2 id="process-heading" className={styles.heading}>
              From idea to impact.<br />
              <span>A clear path forward.</span>
            </h2>
          </div>
          <div className={styles.introduction}>
            <p>Great work starts with a shared vision. Here’s how we turn yours into AI that makes a difference.</p>
            <span className={styles.partnership}><span className={styles.partnerDots} aria-hidden="true"><i /><i /></span>Your team. Our expertise. One shared goal.</span>
          </div>
        </header>

        <div className={styles.journey}>
          <div className={styles.stages}>
            <div className={styles.stageLabel}>
              <span>Three steps. Built together.</span>
              <ArrowDown size={15} aria-hidden="true" />
            </div>

            <div role="tablist" aria-label="Explore our process" aria-orientation="vertical" className={styles.tabList}>
              {steps.map((step, index) => (
                <button
                  key={step.id}
                  ref={(node) => { tabRefs.current[index] = node; }}
                  id={`process-tab-${step.id}`}
                  type="button"
                  role="tab"
                  aria-selected={activeStep === index}
                  aria-controls={`process-panel-${step.id}`}
                  tabIndex={activeStep === index ? 0 : -1}
                  className={styles.step}
                  onClick={() => setActiveStep(index)}
                  onKeyDown={(event) => handleTabKeyDown(event, index)}
                >
                  <span className={styles.stepNumber}>{step.number}</span>
                  <span className={styles.stepContent}>
                    <span className={styles.stepHeading}>{step.title}</span>
                    <span className={styles.stepDescription}>{step.description}</span>
                    <span className={styles.timing}><Clock3 size={13} aria-hidden="true" />{step.timing}</span>
                  </span>
                  <ArrowUpRight className={styles.stepArrow} size={19} aria-hidden="true" />
                </button>
              ))}
            </div>
            <p className={styles.timelineNote}>Every project is different. We’ll shape the timeline together.</p>
          </div>

          <div className={styles.preview}>
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.id}
                  role="tabpanel"
                  id={`process-panel-${step.id}`}
                  aria-labelledby={`process-tab-${step.id}`}
                  tabIndex={activeStep === index ? 0 : -1}
                  aria-hidden={activeStep !== index}
                  inert={activeStep !== index}
                  className={styles.panel}
                >
                  <div className={styles.panelTopline}>
                    <span className={styles.panelPhase}><Icon size={16} aria-hidden="true" />{step.eyebrow}</span>
                    <span className={styles.panelIndex}>{step.number}<span> / 03</span></span>
                  </div>
                  <h3 className={styles.panelHeading}>{step.headline}</h3>
                  <p className={styles.panelDescription}>{step.detail}</p>
                  <div className={styles.visual}><ProcessVisual stage={step.id} /></div>
                  <div className={styles.deliverables}>
                    <p className={styles.deliverablesLabel}>What you walk away with</p>
                    <ul>
                      {step.deliverables.map((deliverable) => (
                        <li key={deliverable}><Check size={13} aria-hidden="true" />{deliverable}</li>
                      ))}
                    </ul>
                  </div>
                  <div className={styles.outcome}><ArrowUpRight size={17} aria-hidden="true" /><p>{step.outcome}</p></div>
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles.footer}>
          <div className={styles.footerCopy}>
            <span className={styles.footerIcon} aria-hidden="true"><Compass size={23} strokeWidth={1.5} /></span>
            <div><h3>Your next chapter starts with a conversation.</h3><p>Bring the challenge. We’ll help you find the way forward.</p></div>
          </div>
          <Link href="/contact" className={styles.cta}>Let’s talk about your project<ArrowRight size={18} aria-hidden="true" /></Link>
        </div>
      </div>
    </section>
  );
}
