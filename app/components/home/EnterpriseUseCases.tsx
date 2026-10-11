import Link from "next/link";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  BookOpenText,
  Boxes,
  FileSearch,
  ScanLine,
  type LucideIcon,
} from "lucide-react";
import styles from "./EnterpriseUseCases.module.css";

type UseCase = {
  name: string;
  industry: string;
  problem: string;
  solution: string;
  impact: string;
  icon: LucideIcon;
};

const assetReliability: UseCase = {
  name: "Asset Reliability Intelligence",
  industry: "Oil & gas",
  problem:
    "Pump and compressor readings sit apart from maintenance histories across sites, slowing investigation when an asset needs attention.",
  solution:
    "Connect operating data with service history to flag emerging issues and prioritize recommendations for reliability engineer review.",
  impact:
    "Earlier visibility into emerging issues, less manual investigation, and better context for maintenance planning.",
  icon: Activity,
};

const useCases: UseCase[] = [
  {
    name: "Operations Knowledge Copilot",
    industry: "Oil & gas",
    problem:
      "Engineers search equipment manuals, approved operating procedures, and shift logs to find the context they need.",
    solution:
      "Retrieve approved information with access controls, source citations, and document version context. Engineers verify guidance before acting.",
    impact:
      "Faster retrieval of operational knowledge, less repeated searching, and clearer shift handovers between teams.",
    icon: BookOpenText,
  },
  {
    name: "Inventory Planning Intelligence",
    industry: "Supply chain",
    problem:
      "Changing demand and fragmented inventory data make it difficult for planning teams to coordinate replenishment.",
    solution:
      "Combine demand signals, stock levels, and lead times to suggest replenishment scenarios for planner approval.",
    impact:
      "Less manual reconciliation and a clearer view of trade-offs when making inventory decisions.",
    icon: Boxes,
  },
  {
    name: "Document Review Assistant",
    industry: "Financial services",
    problem:
      "Review teams repeatedly extract and cross-check information across large document packs before they can assess exceptions.",
    solution:
      "Extract key fields, highlight missing information, and link exceptions to source pages for analyst review.",
    impact:
      "Shorter preparation cycles, easier verification, and more time for analysts to focus on complex exceptions.",
    icon: FileSearch,
  },
  {
    name: "Quality Investigation Assistant",
    industry: "Manufacturing",
    problem:
      "Quality teams piece together inspection notes and production records to investigate recurring defects and understand what happened.",
    solution:
      "Group similar issues, connect them to production context, and prepare evidence for quality engineers to assess.",
    impact:
      "Faster issue triage, more consistent investigation records, and clearer context for corrective-action decisions.",
    icon: ScanLine,
  },
];

function UseCaseDetails({ useCase }: { useCase: UseCase }) {
  return (
    <dl className={styles.details}>
      <div>
        <dt>Enterprise problem</dt>
        <dd>{useCase.problem}</dd>
      </div>
      <div>
        <dt>Proposed solution</dt>
        <dd>{useCase.solution}</dd>
      </div>
      <div className={styles.impact}>
        <dt>Expected impact</dt>
        <dd>{useCase.impact}</dd>
      </div>
    </dl>
  );
}

function UseCaseLink({ name }: { name: string }) {
  return (
    <Link
      href="/contact"
      className={styles.contactLink}
      aria-label={`Discuss the ${name} use case`}
    >
      Discuss this use case
      <ArrowUpRight size={15} aria-hidden="true" />
    </Link>
  );
}

export default function EnterpriseUseCases() {
  return (
    <div className={styles.useCases}>
      <header className={styles.header}>
        <div>
          <p className={styles.eyebrow}>
            <span aria-hidden="true" />Illustrative use cases <i>/</i> 05
          </p>
          <h3>Built around real enterprise challenges.</h3>
        </div>
        <p className={styles.introduction}>
          Five proposed applications of AI, from operational knowledge to the
          decisions your teams make every day.
        </p>
      </header>

      <article className={`${styles.card} ${styles.featuredCard}`}>
        <div className={styles.featuredMain}>
          <header className={styles.featuredHeader}>
            <div className={styles.featuredMeta}>
              <p className={styles.industry}>{assetReliability.industry}</p>
              <span className={styles.status}>Illustrative use case</span>
            </div>
            <span className={styles.featuredIcon} aria-hidden="true">
              <Activity size={34} strokeWidth={1.35} />
            </span>
            <h4>{assetReliability.name}</h4>
            <div className={styles.workflow} aria-hidden="true">
              <span>Operating data</span>
              <ArrowRight size={12} />
              <span>Engineer review</span>
              <ArrowRight size={12} />
              <span>Maintenance plan</span>
            </div>
          </header>
          <UseCaseDetails useCase={assetReliability} />
        </div>
        <footer className={styles.cardFooter}>
          <span className={styles.footerLabel}>Asset intelligence, with human oversight</span>
          <UseCaseLink name={assetReliability.name} />
        </footer>
      </article>

      <div className={styles.grid}>
        {useCases.map((useCase) => {
          const Icon = useCase.icon;
          return (
            <article className={styles.card} key={useCase.name}>
              <header className={styles.cardHeader}>
                <div>
                  <p className={styles.industry}>{useCase.industry}</p>
                  <h4>{useCase.name}</h4>
                </div>
                <span className={styles.cardIcon} aria-hidden="true">
                  <Icon size={22} strokeWidth={1.4} />
                </span>
              </header>
              <UseCaseDetails useCase={useCase} />
              <footer className={styles.cardFooter}>
                <span className={styles.footerLabel}>Illustrative use case</span>
                <UseCaseLink name={useCase.name} />
              </footer>
            </article>
          );
        })}
      </div>

      <p className={styles.note}>
        Expected impacts are intended outcomes to validate during discovery and a
        pilot.
      </p>
    </div>
  );
}
