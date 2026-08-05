import { projects } from '../../data/siteData.js';
export function ProjectsSection() {
  return (
    <section id="projects" className="section">
      <header className="section-heading">
        <p className="eyebrow">Original IP</p>
        <h2>Narrative worlds that also become demanding research cases.</h2>
      </header>
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-image"><img src={project.image} alt={project.title} /></div>
            <div className="project-body">
              <p className="card-label">{project.label}</p>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <ul className="tags">{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
