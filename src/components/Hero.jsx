function Hero() {
  return (
    <section className="section hero" id="top">
      <div className="hero-grid">
        <div className="hero-intro">
          <div className="hero-status">Open to internship opportunities</div>

          <h1>Christin Jordan</h1>
          <div className="hero-title">Full-Stack Software Engineer</div>

          <p>Full-stack engineer building real applications with React, Flask, and SQLAlchemy.</p>

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
            software people actually want to use. My flagship project, DM Command Center, is a
            campaign-management app for tabletop Dungeon Masters that pairs a Flask/SQLAlchemy
            backend with a React frontend and a live connection to an external game-data API —
            everything from a real-time combat tracker to session scheduling with calendar
            integration.
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
              <li>Looking for a software engineering internship</li>
              <li>Building DM Command Center, a full-stack campaign manager</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
