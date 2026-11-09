function Hero() {
  return (
    <section className="section hero" id="top">
      <div className="hero-grid">
        <div className="hero-intro">
          <div className="hero-status">Open to software engineering roles</div>

          <h1>Christin Jordan</h1>
          <div className="hero-title">Full-Stack Software Engineer</div>

          <p>Full-stack engineer building real applications with React and Flask, from web apps to AI agents.</p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              View Projects
            </a>
            <a className="btn btn-ghost" href="/resume.html" target="_blank" rel="noopener noreferrer">
              Resume ↗
            </a>
            <a className="btn btn-ghost" href="#contact">
              Get in Touch
            </a>
          </div>
        </div>

        <div className="hero-about" id="about">
          <div className="eyebrow">01 — about</div>

          <p>
            I'm a full-stack software engineer who likes turning messy, real-world problems into
            software people actually want to use. Most recently I helped build Research Aide, an
            AI agent that answers questions from a team's documents and the web, cites its
            sources, and asks before it acts. Before that, I built DM Command Center, a
            campaign-management app for tabletop Dungeon Masters with a Flask/SQLAlchemy backend,
            a React frontend, and a live connection to an external game-data API.
          </p>
          <p>
            I care about the unglamorous parts of engineering just as much as the features:
            clean data modeling, test coverage, and tracking down the bug nobody else wants to
            touch.
          </p>

          <div className="now-card">
            <h3>Currently</h3>
            <ul className="now-list">
              <li>Completing Flatiron School's AI Engineering Immersive Program</li>
              <li>Looking for junior software engineering roles and internships</li>
              <li>Shipping Research Aide, a local AI research agent, with a 4-person team</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
