import type { Metadata } from "next";
import { SignupForm } from "./signup-form";

export const metadata: Metadata = {
  title: "Opportunity Radar | Career Compass",
  description: "Labor-market signals translated into practical next moves.",
};

const signals = [
  { label: "STRONG SIGNAL", title: "Healthcare operations", text: "Steady demand meets clear entry routes in care coordination, medical records, and health-services operations.", tone: "green" },
  { label: "PROMISING · EARLY", title: "Infrastructure & energy", text: "Public investment is creating durable paths across project support, field operations, and technical services.", tone: "amber" },
  { label: "STABLE PATH", title: "Risk & compliance", text: "Less flashy, more resilient: regulated industries keep rewarding people who can interpret rules and improve processes.", tone: "blue" },
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell">
        <a className="brand" href="#"><span className="brand-mark">CC</span><span>Career Compass</span></a>
        <div className="nav-links"><a href="#latest">Latest issue</a><a href="#method">How it works</a><a href="/editor">Editor workspace</a></div>
      </nav>

      <section className="hero shell">
        <div className="eyebrow">A WEEKLY JOB-MARKET BRIEF</div>
        <h1>Less career noise.<br/><em>More signal.</em></h1>
        <p className="hero-copy">Opportunity Radar turns trusted labor-market data into clear, practical next moves for early-career professionals and career switchers.</p>
        <SignupForm compact />
        <p className="fine">Free every Friday. No hype, no spam—just useful signals.</p>
        <div className="ticker" aria-label="Newsletter features">
          <span>01 / WHERE DEMAND IS GROWING</span><span>02 / WHAT PAYS</span><span>03 / SKILLS TO BUILD</span><span>04 / WHAT TO DO NEXT</span>
        </div>
      </section>

      <section id="latest" className="issue shell">
        <div className="section-kicker">ISSUE 001 · PILOT EDITION</div>
        <div className="issue-head">
          <h2>Three quieter career lanes worth watching</h2>
          <p>Not every good opportunity trends on social media. This week: durable roles hiding behind unglamorous job titles.</p>
        </div>
        <div className="signal-grid">
          {signals.map((signal, i) => (
            <article className="signal-card" key={signal.title}>
              <div className="card-number">0{i + 1}</div>
              <span className={`signal-label ${signal.tone}`}>{signal.label}</span>
              <h3>{signal.title}</h3>
              <p>{signal.text}</p>
              <a href="/issues/pilot">Read the signal <span>→</span></a>
            </article>
          ))}
        </div>
      </section>

      <section id="method" className="method">
        <div className="shell method-grid">
          <div><div className="section-kicker light">THE CAREER COMPASS LENS</div><h2>Data with a point of view—<em>and receipts.</em></h2></div>
          <div className="method-list">
            <div><b>01</b><span><strong>Trusted sources first</strong>We start with BLS, Census, FRED, and O*NET—not anecdotes dressed as trends.</span></div>
            <div><b>02</b><span><strong>Humans make the call</strong>Editors test every claim, add context, and label confidence before publishing.</span></div>
            <div><b>03</b><span><strong>Actions, not forecasts</strong>Each issue ends with realistic searches, skills, and conversations you can try this week.</span></div>
          </div>
        </div>
      </section>

      <section id="signup" className="signup shell">
        <div><div className="section-kicker">YOUR NEXT MOVE STARTS HERE</div><h2>Make the market make sense.</h2><p>Tell us what you’re working toward. We’ll use it to make future issues more useful—not to fill your inbox.</p></div>
        <SignupForm />
      </section>
      <footer className="footer shell"><div className="brand"><span className="brand-mark">CC</span><span>Opportunity Radar</span></div><p>Career guidance, not a guarantee. Always check source dates and local conditions.</p><div><a href="/privacy">Privacy</a><a href="/unsubscribe">Unsubscribe</a></div></footer>
    </main>
  );
}
