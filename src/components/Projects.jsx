function Projects() {
  return (
    <section className="section" id="projects">
      <div className="eyebrow">02 — projects</div>
      <h2 style={{ marginBottom: "2rem" }}>Featured project</h2>

      <div className="project-card">
        <div className="project-head">
          <h3>DM Command Center</h3>

          <div className="project-links">
            <a
              className="btn btn-ghost"
              href="https://github.com/Christin115/dm-command-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
          </div>
        </div>

        <p className="project-desc">
          A full-stack campaign-management app for tabletop Dungeon Masters. Prep tasks, world
          notes, a live combat encounter tracker, a searchable D&amp;D 5e rules compendium, and
          real-world session scheduling all live in one ownership-scoped workspace per campaign,
          backed by session auth and 52 automated tests.
        </p>

        <div className="project-tags">
          <span>React</span>
          <span>Vite</span>
          <span>React Router</span>
          <span>Context API</span>
          <span>Flask</span>
          <span>SQLAlchemy</span>
          <span>Alembic</span>
          <span>SQLite</span>
          <span>Flask-Bcrypt</span>
          <span>pytest</span>
          <span>D&amp;D 5e API</span>
        </div>

        <ul className="project-features">
          <li>
            <span>→</span>
            Combat tracker with automatic initiative sorting, turn-by-turn navigation, and live
            monster stats pulled from an external API
          </li>
          <li>
            <span>→</span>
            Searchable compendium rendering full stat blocks across 7 D&amp;D resource types
          </li>
          <li>
            <span>→</span>
            Session scheduler with one-click Google Calendar export
          </li>
          <li>
            <span>→</span>
            Session-based auth with bcrypt hashing and ownership-scoped routes, verified by
            dedicated access-control tests
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Projects;
