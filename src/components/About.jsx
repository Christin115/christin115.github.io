function About() {
  return (
    <section className="section" id="about">
      <div className="eyebrow">01 — about</div>
      <h2 style={{ marginBottom: "2rem" }}>A little about me</h2>

      <div className="about-grid">
        <div>
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
        </div>

        <div className="now-card">
          <h3>Currently</h3>
          <ul className="now-list">
            <li>Completing Flatiron School's AI Engineering Immersive Program</li>
            <li>Looking for a software engineering internship</li>
            <li>Building DM Command Center, a full-stack campaign manager</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
