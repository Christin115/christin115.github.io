import dmHome from "../assets/screenshots/dm-command-center/home.jpg";
import dmDashboard from "../assets/screenshots/dm-command-center/dashboard.jpg";
import dmNotes from "../assets/screenshots/dm-command-center/notes.jpg";
import dmTasks from "../assets/screenshots/dm-command-center/tasks.jpg";

const PROJECTS = [
  {
    name: "Research Aide",
    github: "https://github.com/sttrackstar/RAG-ProjectB",
    description:
      "A 4-person team project: an AI agent that answers questions from a team's internal " +
      "documents and the open web, cites its sources, shows every step it took, and asks for " +
      "approval before doing anything consequential. It runs fully locally on Llama 3.1 8B, " +
      "with a custom tool-calling loop in Flask, AnythingLLM for retrieval, and a React chat UI.",
    tags: [
      "Python",
      "Flask",
      "React",
      "Vite",
      "Ollama",
      "Llama 3.1",
      "AnythingLLM",
      "RAG",
      "SQLite",
      "pytest",
      "GitHub Actions",
    ],
    features: [
      "Built the agent loop and its tools: document search over AnythingLLM, Wikipedia web search, and a note-saving tool behind a single-use Confirm/Cancel guardrail",
      "Added an observability log that records every model and tool call with inputs, outputs, and timing, linked from each answer",
      "Wrote a 10-task evaluation set and raised the success rate from 27/30 to 30/30 by fixing how the agent phrased its searches",
      "Added login and per-user history (SQLite, hashed passwords), plus a CI pipeline that runs 70+ tests on every pull request with the model faked out",
    ],
    challenge:
      "Agent calls kept timing out even though each piece worked on its own. The cause was " +
      "hidden: the agent asked Ollama for a 4,096-token context window while AnythingLLM asked " +
      "for 16,384, so Ollama silently unloaded and reloaded the 8B model every time the two " +
      "took turns. Matching the context windows stopped the reloads, and a warm-up request at " +
      "startup cut the first answer from 28.5 seconds to 6.2.",
  },
  {
    name: "DM Command Center",
    github: "https://github.com/Christin115/dm-command-center",
    demo: "https://dm-command-center-five.vercel.app",
    screenshots: [
      { src: dmHome, alt: "DM Command Center home page" },
      { src: dmDashboard, alt: "DM Dashboard showing a list of campaigns" },
      { src: dmNotes, alt: "Campaign notes section with NPC and session notes" },
      { src: dmTasks, alt: "Preparation tasks section with priority and status" },
    ],
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
    challenge:
      "Running the test suite was silently wiping my real development database. Flask-Migrate " +
      "binds the SQLAlchemy engine to the database URL at import time — before the test fixture " +
      "ever got a chance to switch to an in-memory database — so every test run was dropping " +
      "tables against my actual dev data. The fix was reading the database URL from an " +
      "environment variable set in a conftest.py, so tests bind to an isolated database from " +
      "their very first connection.",
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
    challenge:
      "The barcode import needed to handle a real external API that can fail, return a partial " +
      "product record, or get scanned twice. Keeping that logic in its own services module — " +
      "separate from the route handlers — meant the API layer only has to decide what HTTP " +
      "status to return, not how to parse OpenFoodFacts' response shape or decide whether a " +
      "barcode already exists.",
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
                {project.demo && (
                  <a
                    className="btn btn-primary"
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo ↗
                  </a>
                )}
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

            {project.screenshots && (
              <div className="project-screenshots">
                {project.screenshots.map((shot) => (
                  <a
                    key={shot.src}
                    href={shot.src}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={shot.src} alt={shot.alt} loading="lazy" />
                  </a>
                ))}
              </div>
            )}

            {project.demo && (
              <p className="project-demo-note">
                Hosted on a free tier — the backend sleeps after inactivity, so the first load
                can take ~30–50 seconds to wake up.
              </p>
            )}

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

            {project.challenge && (
              <div className="project-challenge">
                <h4>The challenge</h4>
                <p>{project.challenge}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
