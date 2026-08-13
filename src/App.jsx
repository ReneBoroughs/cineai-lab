import { Fragment, useEffect, useState } from 'react';
import t from './content.js';
const pageFromPath = () => {
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  if (path === '/projects') return 'projects';
  if (path === '/research') return 'research';
  if (path === '/watch') return 'watch';
  if (path === '/about') return 'about';
  return 'home';
};
const pathForHref = (href) => new URL(href, window.location.origin).pathname;
const resetVideoToPoster = (event) => {
  const video = event.currentTarget;
  video.pause();
  try {
    video.currentTime = 0;
  } catch (error) {
    // Some browsers may refuse seeking while the media is resetting.
  }
  video.load();
};
const pageMetadata = {
  home: {
    path: '/',
    title: 'CineAI Lab — AI-Native Cinema Research & Film Experiments',
    description: 'CineAI Lab is an independent French research and creation initiative developing AI-native cinema workflows and long-form film experiments.',
  },
  projects: {
    path: '/projects/',
    title: 'Original Film Projects — CineAI Lab',
    description: 'Explore The Father, Memories and The Missing Piece: three narrative projects testing performance, continuity and long-form AI-native cinema.',
  },
  research: {
    path: '/research/',
    title: 'AI-Native Cinema Research — CineAI Lab',
    description: 'Research on persistent characters, directable performance, scene memory, selective regeneration and coherent feature-length AI filmmaking.',
  },
  watch: {
    path: '/watch/',
    title: 'Cinema & AI Watch — CineAI Lab',
    description: 'A selective, source-linked watch on AI video, cinema, rights, regulation, tools and production developments in Europe and worldwide.',
  },
  about: {
    path: '/about/',
    title: 'About CineAI Lab — Dr Renato Barrios',
    description: 'Meet Dr Renato Barrios and discover CineAI Lab, an independent cinema and artificial intelligence research initiative based in France.',
  },
};

const updateDocumentMetadata = (page) => {
  const metadata = pageMetadata[page] || pageMetadata.home;
  const canonicalUrl = new URL(metadata.path, 'https://cineai-lab.org').href;
  document.title = metadata.title;

  const setMeta = (selector, value) => {
    const element = document.querySelector(selector);
    if (element) element.setAttribute('content', value);
  };

  setMeta('meta[name="description"]', metadata.description);
  setMeta('meta[property="og:title"]', metadata.title);
  setMeta('meta[property="og:description"]', metadata.description);
  setMeta('meta[property="og:url"]', canonicalUrl);
  setMeta('meta[name="twitter:title"]', metadata.title);
  setMeta('meta[name="twitter:description"]', metadata.description);

  const canonical = document.querySelector('#canonical-url');
  if (canonical) canonical.setAttribute('href', canonicalUrl);
};

// ---- Header.jsx ----
function Header({ currentPage, navigate }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const links = [
    ['home', '/', 'Home'],
    ['projects', '/projects/', 'Original IP'],
    ['research', '/research/', 'Research'],
    ['watch', '/watch/', 'Watch'],
    ['about', '/about/', 'About'],
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const logoSrc = currentPage === 'home' || currentPage === 'research'
    ? t.media.logoSoft
    : t.media.logoSoft;

  return (
    <header className={`site-header page-${currentPage} ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="site-header-inner">
        <a href="/" className="brand" onClick={(event) => { setOpen(false); navigate(event, '/'); }}>
          <span className="brand-mark"><img src={logoSrc} alt="" /></span>
          <span className="brand-wordmark">
            <strong>{t.common.siteName}</strong>
            <small>Cinema · AI · Research</small>
          </span>
        </a>

        <nav className={open ? 'nav open' : 'nav'} aria-label="Primary navigation">
          {links.map(([page, href, label]) => (
            <a
              key={page}
              href={href}
              className={currentPage === page ? 'active' : undefined}
              aria-current={currentPage === page ? 'page' : undefined}
              onClick={(event) => { setOpen(false); navigate(event, href); }}
            >
              <span>{label}</span>
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button
            className="menu-toggle"
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Open navigation"
          >
            <span /><span />
          </button>
        </div>
      </div>
    </header>
  );
}

// ---- Footer.jsx ----
function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner page-width">
        <div className="footer-topline">
          <div className="footer-brand">
            <img src={t.media.logoSoft} alt="" />
            <span>{t.common.siteName}</span>
          </div>
          <a href="mailto:barrios.films@pm.me">barrios.films@pm.me</a>
        </div>
        <div className="footer-bottomline">
          <p>{t.footer}</p>
          <p>© {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}

// ---- HomePage.jsx ----
function HomePage({ navigate }) {
  const manuscript = t.research.manuscript;
  const home = t.homeGateway;

  return (
    <>
      <section className="paper-section puzzle-home">
      <div className="page-width puzzle-home-inner">
  <div className="puzzle-home-copy">
    {home.eyebrow ? <p className="eyebrow dark-eyebrow">{home.eyebrow}</p> : null}
    <h1>{home.title}</h1>
    {home.lead ? <p className="editorial-lead">{home.lead}</p> : null}
    <div className="actions">
      <a className="button ink-button" href="/projects/" onClick={(event) => navigate(event, '/projects/')}>{home.primary}<span aria-hidden="true">↘</span></a>
      <a className="button outline-ink" href="/research/" onClick={(event) => navigate(event, '/research/')}>{home.secondary}<span aria-hidden="true">↗</span></a>
    </div>
  </div>

  <figure className="puzzle-home-art">
    <img
      src="/media/home-hero-moving-field.png"
      alt="Floating puzzle piece over a cinematic landscape"
    />
  </figure>
</div>
      </section>

      <section className="publication-home">
        <div className="page-width publication-home-inner">
          <div>
            <p className="eyebrow light-eyebrow">{manuscript.eyebrow}</p>
            <h2>{manuscript.title}</h2>
          </div>
          <div className="publication-home-copy">
            <p>{home.manuscriptIntro}</p>
            <p className="publication-meta">{manuscript.status}</p>
            <a className="button primary" href={`/documents/${manuscript.file}`} download>
              {manuscript.button}<span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

// ---- ProjectsPage.jsx ----
function ProjectsPage({ navigate }) {
  const prototype = t.projects.prototype;

  return (
    <>
      <section className="projects-cover project-visual-cover page-width">
        <div className="projects-cover-copy">
          <p className="eyebrow light-eyebrow">{t.projects.eyebrow}</p>
          <h1>{t.projects.title}</h1>
        </div>
        <div className="projects-cover-side">
          <figure className="projects-hero-art">
            <img src={t.media.originalIpHero} alt="Illuminated puzzle piece carrying the Chinese character for beauty" />
          </figure>
          <p className="lead">{t.projects.intro}</p>
        </div>
      </section>

      <div className="project-reel">
        {t.projects.cards.map((project, index) => (
          <Fragment key={project.title}>
            <section className={`project-feature project-feature-${index + 1}`}>
              <div className="project-feature-media">
                <img src={project.image} alt={project.alt} />
                <span className="project-feature-number">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <div className="project-feature-copy">
                <small>{project.meta}</small>
                <h2>{project.title}</h2>
                <p>{project.text}</p>
                <ul>
                  {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
              </div>
            </section>

            {index === 0 && prototype ? (
              <section className="project-prototype" aria-labelledby="talking-ceo-title">
                <div className="page-width project-prototype-inner">
                  <div className="project-prototype-copy">
                    <p className="eyebrow light-eyebrow">{prototype.eyebrow}</p>
                    <h3 id="talking-ceo-title">{prototype.title}</h3>
                    <p>{prototype.text}</p>
                    <small>{prototype.note}</small>
                  </div>
                  <figure className="project-prototype-media">
                    <video
                      controls
                      playsInline
                      preload="metadata"
                      poster={prototype.poster}
                      aria-label={prototype.label}
                      onEnded={resetVideoToPoster}
                    >
                      <source src={prototype.video} type="video/mp4" />
                    </video>
                  </figure>
                </div>
              </section>
            ) : null}
          </Fragment>
        ))}
      </div>

    </>
  );
}

// ---- ResearchPage.jsx ----
function ResearchPage() {
  const manuscript = t.research.manuscript;

  return (
    <>
      <section className="research-cover paper-section puzzle-research-cover">
        <div className="research-puzzle-art" aria-hidden="true">
          <img src="/media/missing-part.png" alt="" />
        </div>
        <div className="research-puzzle-piece" aria-hidden="true">
          <img src="/media/puzzle-missing-piece.png" alt="" />
        </div>
        <div className="page-width research-cover-inner">
          <div className="research-cover-copy">
            <p className="eyebrow dark-eyebrow">{t.research.eyebrow}</p>
            <h1>{t.research.title}</h1>
            <p className="editorial-lead">{t.research.intro}</p>
          </div>
        </div>
      </section>

      <section className="project-closing paper-section research-symbol-section">
        <div className="page-width project-symbol-layout">
          <div className="project-symbol-media">
            <img src="/media/puzzle-missing-piece.png" alt={t.symbol.alt} />
          </div>
          <div className="project-symbol-copy">
            <p className="eyebrow dark-eyebrow">{t.symbol.title}</p>
            <h2>{t.symbol.text}</h2>
          </div>
        </div>
      </section>

      <section className="research-evidence paper-section">
        <div className="page-width research-evidence-inner">
          <div className="research-evidence-heading">
            <p className="eyebrow dark-eyebrow">{t.experiments.eyebrow}</p>
            <h2>{t.experiments.evidenceTitle}</h2>
            <p>{t.experiments.evidenceIntro}</p>
          </div>
          <div className="research-evidence-table" role="table" aria-label={t.experiments.evidenceTitle}>
            <div className="research-evidence-row research-evidence-head" role="row">
              {t.experiments.colHeaders.map((label) => <strong role="columnheader" key={label}>{label}</strong>)}
            </div>
            {t.experiments.evidenceRows.map((row) => (
              <div className="research-evidence-row" role="row" key={row[0]}>
                {row.map((cell, index) => index === 0
                  ? <strong role="cell" key={`${row[0]}-${index}`}>{cell}</strong>
                  : <span role="cell" key={`${row[0]}-${index}`}>{cell}</span>
                )}
              </div>
            ))}
          </div>
          <p className="research-evidence-note">{t.experiments.note}</p>
        </div>
      </section>

      <section className="research-challenges">
        <div className="page-width">
          <div className="research-challenges-heading">
            <p className="eyebrow light-eyebrow">{t.research.eyebrow}</p>
            <h2>{t.hero.missionValue}</h2>
          </div>
          <div className="research-list">
            {t.research.items.map(([title, text], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="paper-section benchmark-editorial">
        <div className="page-width benchmark-editorial-inner">
          <div>
            <p className="eyebrow dark-eyebrow">{t.benchmark.eyebrow}</p>
            <h2>{t.benchmark.title}</h2>
          </div>
          <div className="benchmark-editorial-list">
            {t.benchmark.items.map(([number, title, text]) => (
              <article key={number}>
                <strong>{number}</strong>
                <div><h3>{title}</h3><p>{text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="manuscript-stage">
        <div className="page-width manuscript-stage-inner">
          <div className="manuscript-stage-mark" aria-hidden="true"><span>EN</span><small>PDF</small></div>
          <div className="manuscript-stage-copy">
            <p className="eyebrow light-eyebrow">{manuscript.eyebrow}</p>
            <h2>{manuscript.title}</h2>
            <p>{manuscript.description}</p>
            <p className="language-note-dark">{manuscript.languageNote}</p>
            <div className="manuscript-stage-bottom">
              <span>{manuscript.status}</span>
              <a className="button primary" href={`/documents/${manuscript.file}`} download>{manuscript.button}<span aria-hidden="true">↓</span></a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// ---- WatchPage.jsx ----
function WatchPage() {
  const watch = t.watch;

  return (
    <>
      <section className="watch-cover watch-visual-cover">
        <div className="page-width watch-cover-inner">
          <div className="watch-cover-copy">
            <p className="eyebrow light-eyebrow">{watch.eyebrow}</p>
            <h1>{watch.title}</h1>
            <p className="lead">{watch.intro}</p>
            <div className="watch-updated">{watch.updated}</div>
          </div>
          <figure className="watch-cover-art" aria-hidden="true">
            <img src={t.media.watchHero} alt="" />
          </figure>
        </div>
      </section>

      <section className="paper-section watch-feed">
        <div className="page-width watch-feed-inner">
          <div className="watch-feed-heading">
            <p className="eyebrow dark-eyebrow">{watch.feedEyebrow}</p>
            <h2>{watch.feedTitle}</h2>
            <p>{watch.note}</p>
          </div>
          <div className="watch-items">
            {watch.items.map((item) => (
              <article className="watch-item" key={`${item.date}-${item.title}`}>
                <div className="watch-item-meta"><time>{item.date}</time><span>{item.region}</span></div>
                <div className="watch-item-copy">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <a href={item.url} target="_blank" rel="noreferrer" className="watch-source">{item.source}<span aria-hidden="true">↗</span></a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="watch-closing">
        <div className="page-width watch-closing-inner">
          <p className="eyebrow light-eyebrow">{watch.perspectiveEyebrow}</p>
          <h2>{watch.perspectiveTitle}</h2>
          <p>{watch.perspectiveText}</p>
        </div>
      </section>
    </>
  );
}

// ---- AboutPage.jsx ----
function AboutPage() {
  return (
    <>
      <section className="about-cover">
        <div className="page-width about-cover-inner">
          <p className="eyebrow light-eyebrow">{t.creator.eyebrow}</p>
          <h1>{t.creator.name}</h1>
          <p className="about-cover-line">{t.footer}</p>
        </div>
      </section>

      <section className="paper-section about-story">
        <div className="page-width about-story-inner">
          <div className="about-logo-object" aria-hidden="true"><img src={t.media.logoSoft} alt="" /></div>
          <div className="about-story-copy">
            <p className="editorial-lead"><strong>{t.creator.name}</strong> {t.creator.p1}</p>
            <p>{t.creator.p2}</p>
          </div>
        </div>
      </section>

      <section className="collaboration-stage">
        <div className="page-width collaboration-stage-inner">
          <div className="collaboration-stage-heading">
            <p className="eyebrow light-eyebrow">{t.collaborate.eyebrow}</p>
            <h2>{t.collaborate.title}</h2>
            <p>{t.collaborate.intro}</p>
          </div>
          <div className="collaboration-list">
            {t.collaborate.cards.map(([title, text], index) => (
              <article key={title}><span>{String(index + 1).padStart(2, '0')}</span><div><h3>{title}</h3><p>{text}</p></div></article>
            ))}
          </div>
          <div className="collaboration-contact">
            <a className="button primary" href="mailto:barrios.films@pm.me?subject=CineAI%20Lab%20collaboration">{t.collaborate.contact}</a>
            <p>{t.collaborate.fine}</p>
          </div>
        </div>
      </section>
    </>
  );
}

const pages = {
  home: HomePage,
  projects: ProjectsPage,
  research: ResearchPage,
  watch: WatchPage,
  about: AboutPage,
};

export default function App() {
  const [currentPage, setCurrentPage] = useState(pageFromPath());
  const [transitioning, setTransitioning] = useState(false);
  const Page = pages[currentPage] || HomePage;

  useEffect(() => {
    updateDocumentMetadata(currentPage);
  }, [currentPage]);

  useEffect(() => {
    const onPopState = () => {
      setTransitioning(true);
      window.setTimeout(() => {
        setCurrentPage(pageFromPath());
        setTransitioning(false);
      }, 120);
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const navigate = (event, href) => {
    if (!event || event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
    const nextPath = pathForHref(href);
    const currentPath = window.location.pathname;
    if (nextPath.replace(/\/+$/, '') === currentPath.replace(/\/+$/, '')) return;
    event.preventDefault();
    setTransitioning(true);
    window.setTimeout(() => {
      window.history.pushState({}, '', href);
      setCurrentPage(pageFromPath());
      window.scrollTo({ top: 0, behavior: 'auto' });
      window.setTimeout(() => setTransitioning(false), 40);
    }, 160);
  };

  return (
    <div className={`site-shell current-${currentPage}`}>
      <Header currentPage={currentPage} navigate={navigate} />
      <main className={`page-transition ${transitioning ? 'is-leaving' : 'is-entering'}`}><Page navigate={navigate} /></main>
      <Footer />
    </div>
  );
}
