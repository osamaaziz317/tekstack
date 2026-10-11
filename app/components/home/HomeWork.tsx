import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  CircleDot,
  Database,
  FileText,
  GitBranch,
  Layers3,
  Play,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import styles from "./HomeWork.module.css";
import EnterpriseUseCases from "./EnterpriseUseCases";

function ArchitecturePreview() {
  return (
    <div className={`${styles.preview} ${styles.architecturePreview}`} aria-hidden="true">
      <div className={styles.appWindow}>
        <div className={styles.appBar}>
          <span className={styles.appIdentity}><Layers3 size={15} />AI Architect</span>
          <span className={styles.appView}>Workflow preview</span>
          <span className={styles.windowDots}><i /><i /><i /></span>
        </div>
        <div className={styles.architectureCanvas}>
          <div className={styles.flowHeading}><span /><span>Connected by design</span></div>
          <div className={styles.workflow}>
            <div className={styles.workflowNode}>
              <span className={styles.nodeIcon}><Database size={18} /></span>
              <span>Your systems</span>
              <small>Data &amp; context</small>
            </div>
            <span className={styles.connector}><ArrowRight size={16} /></span>
            <div className={`${styles.workflowNode} ${styles.centralNode}`}>
              <span className={styles.nodeIcon}><Sparkles size={18} /></span>
              <span>AI orchestrator</span>
              <small>Plan &amp; coordinate</small>
            </div>
            <span className={styles.connector}><ArrowRight size={16} /></span>
            <div className={styles.workflowNode}>
              <span className={styles.nodeIcon}><GitBranch size={18} /></span>
              <span>Specialist agents</span>
              <small>Act &amp; collaborate</small>
            </div>
          </div>
          <div className={styles.guardrailLine}><span /><ArrowDown size={13} /><span /></div>
          <div className={styles.guardrail}><ShieldCheck size={14} /><span>Human oversight, built in</span><Check size={13} /></div>
        </div>
      </div>
      <span className={styles.previewCaption}>Conceptual workflow</span>
    </div>
  );
}

function RecruitingPreview() {
  return (
    <div className={`${styles.preview} ${styles.recruitingPreview}`} aria-hidden="true">
      <div className={`${styles.appWindow} ${styles.recruitingWindow}`}>
        <div className={styles.appBar}>
          <span className={styles.appIdentity}><Users size={15} />HR AI</span>
          <span className={styles.appView}>Recruiting workflow</span>
          <span className={styles.windowDots}><i /><i /><i /></span>
        </div>
        <div className={styles.recruitingCanvas}>
          <div className={styles.recruitingSidebar}>
            <div className={styles.selectedTool}><Layers3 size={16} /></div>
            <div><FileText size={16} /></div>
            <div><Users size={16} /></div>
            <span />
            <div><ShieldCheck size={16} /></div>
          </div>
          <div className={styles.recruitingMain}>
            <div className={styles.pipelineHeading}>
              <span>From application to conversation</span>
              <CircleDot size={15} />
            </div>
            <div className={styles.pipeline}>
              <div className={styles.pipelineStep}><FileText size={14} /><span>Applications</span></div>
              <ArrowRight size={13} />
              <div className={`${styles.pipelineStep} ${styles.activePipelineStep}`}><ScanLine size={14} /><span>AI screening</span></div>
              <ArrowRight size={13} />
              <div className={styles.pipelineStep}><Users size={14} /><span>Team review</span></div>
            </div>
            <div className={styles.reviewCard}>
              <span className={styles.reviewIcon}><Sparkles size={19} /></span>
              <div><strong>Context for every decision.</strong><span>Requirements, experience, and next steps.</span></div>
              <span className={styles.reviewCheck}><Check size={15} /></span>
            </div>
            <div className={styles.reviewFooter}><ShieldCheck size={12} /><span>Your team makes the final call.</span></div>
          </div>
        </div>
      </div>
      <span className={styles.previewCaption}>Conceptual workflow</span>
    </div>
  );
}

const projects = [
  {
    name: "AI Architect",
    category: "AI orchestration",
    problem: "Disconnected AI tools and manual handoffs make cross-system workflows difficult to coordinate.",
    solution: "Connect specialist agents through a shared orchestration layer, with clear task routing and human approval points.",
    impact: "Less fragmented work, clearer ownership, and better visibility into workflow progress.",
    href: "/video/AI_Architect",
    preview: ArchitecturePreview,
  },
  {
    name: "HR AI",
    category: "People operations",
    problem: "Recruiters repeatedly sort applications, compare role requirements, and coordinate interviews across separate tools.",
    solution: "Organize candidate information, assist with screening, and coordinate scheduling while recruiters retain hiring decisions.",
    impact: "Less administrative effort and more time for candidate conversations and contextual review.",
    href: "/video/HR_AI",
    preview: RecruitingPreview,
  },
];

export default function HomeWork() {
  return (
    <section id="our-work" className={styles.section} aria-labelledby="work-heading">
      <div className={styles.container}>
        <header className={styles.header}>
          <div>
            <p className={styles.eyebrow}><span />Our work <i>/</i> Demos & use cases</p>
            <h2 id="work-heading" className={styles.heading}>See what AI<br /><span>can make possible.</span></h2>
          </div>
          <p className={styles.introduction}>Two project demos and five enterprise use cases, including oil and gas. Explore each problem, proposed solution, and expected impact.</p>
        </header>
        <div className={styles.projects}>
          {projects.map((project) => {
            const Preview = project.preview;
            return (
              <article className={styles.project} key={project.name}>
                <Link className={styles.projectLink} href={project.href} aria-label={`Watch the ${project.name} project demo`}>
                  <Preview />
                  <div className={styles.projectContent}>
                    <div className={styles.projectMeta}><p className={styles.category}>{project.category}</p><span className={styles.demoBadge}>Project demo</span></div>
                    <div className={styles.projectHeading}><h3>{project.name}</h3><ArrowUpRight size={23} aria-hidden="true" /></div>
                    <dl className={styles.projectDetails}>
                      <div><dt>Enterprise problem</dt><dd>{project.problem}</dd></div>
                      <div><dt>Proposed solution</dt><dd>{project.solution}</dd></div>
                      <div className={styles.projectImpact}><dt>Expected impact</dt><dd>{project.impact}</dd></div>
                    </dl>
                    <span className={styles.watchLink}><span className={styles.playIcon}><Play size={11} fill="currentColor" aria-hidden="true" /></span>Watch project demo</span>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
        <EnterpriseUseCases />
      </div>
    </section>
  );
}
