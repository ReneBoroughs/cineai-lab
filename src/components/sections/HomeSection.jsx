export function HomeSection() {
  return (
    <section id="top" className="hero section">
      <div className="hero-visual" aria-hidden="true">
        <img src="/puzzle-missing-piece.png" alt="" />
        <div className="hero-scrim" />
      </div>
      <div className="hero-content">
        <p className="eyebrow">Independent creative & research studio</p>
        <h1>The missing piece is cinematic intention.</h1>
        <p className="lead">CineAI Lab develops original stories and investigates what future AI systems must preserve in order to create coherent, directable and editable films.</p>
        <div className="actions">
          <a className="button primary" href="#projects">Explore Original IP</a>
          <a className="button ghost" href="#research">Open Film Benchmark</a>
        </div>
      </div>
      <div className="hero-note">
        <span>Beyond beautiful clips</span>
        <strong>Toward coherent AI cinema</strong>
      </div>
    </section>
  );
}
