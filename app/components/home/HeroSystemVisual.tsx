import { ArrowRight, Database, Layers3, Network, Users } from "lucide-react";
import styles from "./HeroSystemVisual.module.css";

/** A decorative map of an enterprise's systems around a shared intelligence layer. */
export default function HeroSystemVisual() {
  return (
    <div className={styles.visual} aria-hidden="true">
      <div className={styles.figureLabel}>
        <span className={styles.labelMark} />
        Connected intelligence
      </div>
      <span className={styles.figureNumber}>FIG. 01</span>

      <svg className={styles.diagram} viewBox="0 0 560 510" fill="none">
        <defs>
          <linearGradient id="hero-core-face" x1="202" y1="164" x2="350" y2="292" gradientUnits="userSpaceOnUse">
            <stop stopColor="#494941" />
            <stop offset="0.53" stopColor="#30312C" />
            <stop offset="1" stopColor="#252622" />
          </linearGradient>
          <linearGradient id="hero-core-edge" x1="167" y1="232" x2="390" y2="293" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7D7C6F" />
            <stop offset="0.5" stopColor="#505147" />
            <stop offset="1" stopColor="#30332C" />
          </linearGradient>
          <linearGradient id="hero-plate-face" x1="220" y1="175" x2="330" y2="300" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FBF8F0" />
            <stop offset="0.5" stopColor="#EBE3D4" />
            <stop offset="1" stopColor="#C9BEAA" />
          </linearGradient>
          <linearGradient id="hero-plate-edge" x1="170" y1="250" x2="390" y2="250" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D0C5B1" />
            <stop offset="0.5" stopColor="#B3A38A" />
            <stop offset="1" stopColor="#E7DDCB" />
          </linearGradient>
          <linearGradient id="hero-circuit-line" x1="224" y1="191" x2="324" y2="248" gradientUnits="userSpaceOnUse">
            <stop stopColor="#EFDFC1" />
            <stop offset="1" stopColor="#BBA581" />
          </linearGradient>
          <radialGradient id="hero-ground-shadow">
            <stop stopColor="#5F594B" stopOpacity="0.18" />
            <stop offset="1" stopColor="#5F594B" stopOpacity="0" />
          </radialGradient>
          <pattern id="hero-blueprint-grid" width="35" height="35" patternUnits="userSpaceOnUse">
            <path d="M35 0H0V35" stroke="#B9AF9C" strokeOpacity="0.11" strokeWidth="0.7" />
          </pattern>
          <radialGradient id="hero-grid-fade">
            <stop offset="0.25" stopColor="white" />
            <stop offset="1" stopColor="black" />
          </radialGradient>
          <mask id="hero-grid-mask">
            <rect width="560" height="510" fill="url(#hero-grid-fade)" />
          </mask>
          <path id="hero-plate-outline" d="M287 167L390 226Q401 232.5 390 239L287 299Q280 303 273 299L170 239Q159 232.5 170 226L273 167Q280 163 287 167Z" />
        </defs>

        <rect width="560" height="510" fill="url(#hero-blueprint-grid)" mask="url(#hero-grid-mask)" />
        <g className={styles.orbits} stroke="#C1B59F" strokeWidth="0.7">
          <ellipse cx="280" cy="256" rx="202" ry="139" strokeDasharray="2 6" />
          <ellipse cx="280" cy="256" rx="231" ry="163" strokeOpacity="0.32" />
          <path d="M280 83V97M273 90H287M280 407V421M273 414H287M41 249V263M34 256H48M519 249V263M512 256H526" strokeOpacity="0.65" />
        </g>

        <g className={styles.connections} stroke="#B8AA91" strokeWidth="1.1">
          <path d="M119 144V170Q119 181 129 187L190 223" />
          <path d="M441 144V170Q441 181 431 187L370 223" />
          <path d="M119 356V330Q119 319 129 313L190 278" />
          <path d="M441 356V330Q441 319 431 313L370 278" />
          <circle cx="119" cy="167" r="3" fill="#F8F6F2" />
          <circle cx="441" cy="167" r="3" fill="#F8F6F2" />
          <circle cx="119" cy="333" r="3" fill="#F8F6F2" />
          <circle cx="441" cy="333" r="3" fill="#F8F6F2" />
        </g>

        <ellipse cx="280" cy="357" rx="158" ry="53" fill="url(#hero-ground-shadow)" />

        <g className={styles.core}>
          <g transform="translate(0 48)">
            <use href="#hero-plate-outline" transform="translate(0 9)" fill="url(#hero-plate-edge)" />
            <path d="M165 233V242M395 233V242" stroke="#C5B99F" strokeWidth="1" />
            <use href="#hero-plate-outline" fill="url(#hero-plate-face)" stroke="#FCF9F1" strokeWidth="1.2" />
            <path d="M181 234L274 288Q280 291 286 288L379 234" stroke="#B1A38B" strokeOpacity="0.45" />
          </g>
          <g transform="translate(0 22)">
            <use href="#hero-plate-outline" transform="translate(0 9)" fill="url(#hero-plate-edge)" />
            <use href="#hero-plate-outline" fill="url(#hero-plate-face)" stroke="#FCF9F1" strokeWidth="1.2" />
            <path d="M181 234L274 288Q280 291 286 288L379 234" stroke="#B1A38B" strokeOpacity="0.45" />
          </g>
          <g transform="translate(0 -9)">
            <use href="#hero-plate-outline" transform="translate(0 12)" fill="url(#hero-core-edge)" />
            <use href="#hero-plate-outline" fill="url(#hero-core-face)" stroke="#6F7061" strokeWidth="0.8" />
            <path d="M275 177Q280 174 285 177L376 229Q382 233 376 237L285 289Q280 292 275 289L184 237Q178 233 184 229Z" stroke="#ADAB94" strokeOpacity="0.23" strokeWidth="0.8" />
            <path d="M172 236L274 296Q280 299 286 296L390 235" stroke="#D1C29E" strokeOpacity="0.6" strokeWidth="0.7" />

            <g stroke="url(#hero-circuit-line)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <path d="M280 203L329 231L280 259L231 231Z" />
              <path d="M280 214L309 231L280 248L251 231Z" />
              <path d="M261 214L248 206M299 214L312 206M261 248L248 256M299 248L312 256M241 225L227 217M319 225L333 217M241 237L227 245M319 237L333 245" />
              <path d="M280 223L294 231L280 239L266 231Z" fill="#DAC8A8" fillOpacity="0.13" />
              <path d="M280 203V196M280 259V266" />
            </g>
            <g fill="#D8C5A3">
              <ellipse cx="248" cy="206" rx="2" ry="1.2" />
              <ellipse cx="312" cy="206" rx="2" ry="1.2" />
              <ellipse cx="248" cy="256" rx="2" ry="1.2" />
              <ellipse cx="312" cy="256" rx="2" ry="1.2" />
              <ellipse cx="280" cy="231" rx="2.5" ry="1.5" />
            </g>
          </g>
        </g>
      </svg>

      <div className={`${styles.node} ${styles.dataNode}`}>
        <span className={styles.nodeIcon}><Database size={19} strokeWidth={1.4} /></span>
        <span>Your data</span>
      </div>
      <div className={`${styles.node} ${styles.peopleNode}`}>
        <span className={styles.nodeIcon}><Users size={19} strokeWidth={1.4} /></span>
        <span>Your people</span>
      </div>
      <div className={`${styles.node} ${styles.toolsNode}`}>
        <span className={styles.nodeIcon}><Layers3 size={19} strokeWidth={1.4} /></span>
        <span>Your tools</span>
      </div>
      <div className={`${styles.node} ${styles.workflowsNode}`}>
        <span className={styles.nodeIcon}><Network size={19} strokeWidth={1.4} /></span>
        <span>Intelligent<br />workflows</span>
      </div>

      <div className={styles.method}>
        <span>Connect</span><ArrowRight size={13} strokeWidth={1.4} />
        <span>Reason</span><ArrowRight size={13} strokeWidth={1.4} />
        <span>Act</span>
      </div>
      <p className={styles.caption}>Designed around your enterprise.</p>
    </div>
  );
}
