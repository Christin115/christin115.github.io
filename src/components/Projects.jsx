const PROJECTS = [
  {
    name: "DM Command Center",
    github: "https://github.com/Christin115/dm-command-center",
    description:
      "A full-stack campaign-management app for tabletop Dungeon Masters. Prep tasks, world " +
      "notes, a live combat encounter tracker, a searchable D&D 5e rules compendium, and " +
      "real-world session scheduling all live in one ownership-scoped workspace per campaign, " +
      "backed by session auth and 52 automated tests.",
    tags: [
      "React",
      "Vite",
      "React Router",
      "Context API",
      "Flask",
      "SQLAlchemy",
      "Alembic",
      "SQLite",
      "Flask-Bcrypt",
      "pytest",
      "D&D 5e API",
    ],
    features: [
      "Combat tracker with automatic initiative sorting, turn-by-turn navigation, and live monster stats pulled from an external API",
      "Searchable compendium rendering full stat blocks across 7 D&D resource types",
      "Session scheduler with one-click Google Calendar export",
      "Session-based auth with bcrypt hashing and ownership-scoped routes, verified by dedicated access-control tests",
    ],
  },
  {
    name: "Inventory Management System",
    github: "https://github.com/Christin115/inventory-management-system",
    description:
      "A Flask REST API for tracking inventory, with duplicate-barcode protection and a live " +
      "product lookup: scan a barcode and the API pulls the product's name, brand, category, " +
      "and image straight from the OpenFoodFacts API instead of requiring manual entry.",
    tags: ["Flask", "SQLAlchemy", "SQLite", "Requests", "OpenFoodFacts API", "pytest"],
    features: [
      "Barcode import that fetches and creates an inventory item from a live external API in one request",
      "Full CRUD plus name search and low-stock detection",
      "Layered architecture — models, routes, and services kept in separate modules",
      "Both a REST API and a CLI interface on top of the same service layer",
    ],
  },
];

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="eyebrow">02 — projects</div>
      <h2 style={{ marginBottom: "2rem" }}>Featured projects</h2>

      <div className="project-list">
        {PROJECTS.map((project) => (
          <div className="project-card" key={project.name}>
            <div className="project-head">
              <h3>{project.name}</h3>

              <div className="project-links">
                <a
                  className="btn btn-ghost"
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub ↗
                </a>
              </div>
            </div>

            <p className="project-desc">{project.description}</p>

            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            <ul className="project-features">
              {project.features.map((feature) => (
                <li key={feature}>
                  <span>→</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
