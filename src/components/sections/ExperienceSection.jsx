import { historyItems } from '../../data/siteData.js';
export function ExperienceSection() {
  return (
    <section id="experience" className="section experience-section">
      <header className="section-heading">
        <p className="eyebrow">Experience</p>
        <h2>What an independent laboratory learned by trying to make a film.</h2>
      </header>
      <div className="timeline">
        {historyItems.map(([title, text], index) => <article key={title}><span>{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}
      </div>
      <blockquote>“The problem is no longer generating a clip. The problem is preserving cinematic intention.”</blockquote>
    </section>
  );
}
