import { researchChallenges } from '../../data/siteData.js';
export function ResearchSection() {
  return (
    <section id="research" className="section research-section">
      <header className="section-heading">
        <p className="eyebrow">Research & Open Film Benchmark</p>
        <h2>What must a film model learn beyond visual quality?</h2>
      </header>
      <div className="challenge-grid">
        {researchChallenges.map(([title, text], i) => (
          <article key={title}><span>{String(i + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{text}</p></article>
        ))}
      </div>
    </section>
  );
}
