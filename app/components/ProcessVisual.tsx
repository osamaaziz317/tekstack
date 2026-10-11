import {
  ArrowRight,
  Check,
  CheckCheck,
  CircleDot,
  Database,
  FileCheck2,
  Flag,
  Layers3,
  Network,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";
import styles from "./ProcessVisual.module.css";

type ProcessStage = "discovery" | "architecture" | "scale";

function DiscoveryVisual() {
  const briefItems = [
    { icon: Network, text: "Map the workflow" },
    { icon: Target, text: "Define success" },
    { icon: Flag, text: "Prioritize the pilot" },
  ];

  return (
    <div className={styles.discovery}>
      <div className={styles.brief}>
        <div className={styles.briefHeading}>
          <span className={styles.eyebrow}>THE STARTING POINT</span>
          <FileCheck2 size={20} strokeWidth={1.5} />
        </div>
        <p className={styles.briefTitle}>Opportunity map</p>
        <div className={styles.briefRows}>
          {briefItems.map(({ icon: Icon, text }) => (
            <div className={styles.briefRow} key={text}>
              <Icon size={15} strokeWidth={1.5} />
              <span>{text}</span>
              <Check size={13} strokeWidth={1.8} />
            </div>
          ))}
        </div>
        <div className={styles.briefFooter}>
          <span className={styles.smallDot} />
          Your ambition. A shared direction.
        </div>
      </div>
      <div className={styles.approved}>
        <span><CheckCheck size={14} strokeWidth={1.8} /></span>
        A plan we agree on
      </div>
      <span className={styles.discoveryCross}>+</span>
    </div>
  );
}

function ArchitectureVisual() {
  return (
    <div className={styles.architecture}>
      <div className={styles.flowNode}>
        <span className={styles.nodeIcon}><Database size={22} strokeWidth={1.5} /></span>
        <p>Your tools</p>
        <span className={styles.nodeCaption}>CRM · APIs · Data</span>
      </div>
      <div className={styles.flowConnector}><ArrowRight size={15} strokeWidth={1.5} /></div>
      <div className={`${styles.flowNode} ${styles.agentNode}`}>
        <div className={styles.oversight}>Human oversight</div>
        <span className={styles.agentIcon}><Sparkles size={24} strokeWidth={1.5} /></span>
        <p>AI agent</p>
        <span className={styles.nodeCaption}>Built around you</span>
        <div className={styles.guardrails}>
          <ShieldCheck size={13} strokeWidth={1.5} />
          Guardrails
        </div>
      </div>
      <div className={styles.flowConnector}><ArrowRight size={15} strokeWidth={1.5} /></div>
      <div className={styles.flowNode}>
        <span className={styles.nodeIcon}><Layers3 size={22} strokeWidth={1.5} /></span>
        <p>Validated pilot</p>
        <span className={styles.nodeCaption}>Ready to test</span>
      </div>
    </div>
  );
}

function ScaleVisual() {
  return (
    <div className={styles.scale}>
      <div className={styles.launch}>
        <div className={styles.launchOrbit}>
          <div className={styles.launchIcon}><Rocket size={28} strokeWidth={1.4} /></div>
          <span className={styles.orbitDot} />
        </div>
        <p>Ready to launch</p>
        <span>Built for what&apos;s next</span>
      </div>
      <svg className={styles.scaleConnector} viewBox="0 0 48 168" fill="none" preserveAspectRatio="none">
        <path d="M0 84H20M20 24V144M20 24H48M20 84H48M20 144H48" />
        <circle cx="20" cy="84" r="3" />
      </svg>
      <div className={styles.workflows}>
        {["01", "02", "03"].map((number) => (
          <div className={styles.workflow} key={number}>
            <CircleDot size={16} strokeWidth={1.4} />
            <span>Workflow {number}</span>
            <span className={styles.workflowCheck}><Check size={12} strokeWidth={2} /></span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProcessVisual({ stage }: { stage: ProcessStage }) {
  return (
    <div className={styles.visual} aria-hidden="true">
      <div className={styles.blueprint}>
        <span />
        <span />
        <span />
      </div>
      <span className={styles.cornerMark} />
      {stage === "discovery" && <DiscoveryVisual />}
      {stage === "architecture" && <ArchitectureVisual />}
      {stage === "scale" && <ScaleVisual />}
    </div>
  );
}
