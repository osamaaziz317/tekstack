import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HowWeWork from "./components/HowWeWork";
import HomeHero from "./components/home/HomeHero";
import HomeServices from "./components/home/HomeServices";
import HomeWork from "./components/home/HomeWork";
import HomeApproach from "./components/home/HomeApproach";
import HomeFAQ from "./components/home/HomeFAQ";
import HomeContact from "./components/home/HomeContact";
import styles from "./page.module.css";

export const metadata = {
  title: "Tekstack — Enterprise AI, Put to Work",
  description: "Your enterprise AI engineering partner. We design intelligent agents, connected workflows, and custom AI systems—from strategy to production.",
  openGraph: {
    title: "Tekstack — Enterprise AI, Put to Work",
    description: "Intelligent agents. Connected workflows. AI engineering built around your enterprise.",
  },
};

export default function Home() {
  return (
    <div className={styles.page}>
      <a className={styles.skipLink} href="#main-content">Skip to content</a>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <HomeHero />
        <HomeServices />
        <HomeWork />
        <HomeApproach />
        <HowWeWork />
        <HomeFAQ />
        <HomeContact />
      </main>
      <Footer />
    </div>
  );
}
