const steps = ['Image', 'Motion', 'Scene', 'Actor', 'Story', 'Cinema'];
export function VisionSection() {
  return (
    <section id="vision" className="section two-column section-line">
      <div>
        <p className="eyebrow">Vision</p>
        <h2>From generated fragments to a film that remembers.</h2>
      </div>
      <div className="copy-large">
        <p>Current models can create remarkable images and clips. Cinema requires persistent identity, performance direction, scene memory, multilingual dialogue, selective revision and narrative continuity.</p>
        <div className="process-line">
          {steps.map((step, index) => <div key={step}><span>{String(index + 1).padStart(2, '0')}</span>{step}</div>)}
        </div>
      </div>
    </section>
  );
}
