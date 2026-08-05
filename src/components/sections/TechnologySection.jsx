import { technologies } from '../../data/siteData.js';
export function TechnologySection() {
  return (
    <section id="technology" className="section section-line">
      <header className="section-heading">
        <p className="eyebrow">Technology Watch</p>
        <h2>A field moving from clip generation toward controllable production.</h2>
        <p className="section-intro">CineAI Lab follows commercial, aggregated and open-source solutions without confusing access to many tools with the existence of a true universal film engine.</p>
      </header>
      <div className="tech-table" role="table">
        <div className="tech-row tech-head" role="row"><span>Family</span><span>Examples</span><span>Strength</span><span>Current limit</span></div>
        {technologies.map(item => <div className="tech-row" role="row" key={item.family}><strong>{item.family}</strong><span>{item.tools}</span><span>{item.value}</span><span>{item.limit}</span></div>)}
      </div>
    </section>
  );
}
