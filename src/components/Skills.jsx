const SKILL_GROUPS = [
  {
    label: "Languages",
    skills: ["JavaScript", "Python"],
  },
  {
    label: "Frontend",
    skills: ["React", "Vite", "React Router", "Context API", "CSS"],
  },
  {
    label: "Backend",
    skills: ["Flask", "SQLAlchemy", "Alembic", "Flask-Bcrypt", "Flask-CORS"],
  },
  {
    label: "Data & Tools",
    skills: ["SQLite", "Git", "GitHub", "pytest", "REST APIs"],
  },
];

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="eyebrow">03 — skills</div>
      <h2 style={{ marginBottom: "2rem" }}>Tools I work with</h2>

      <div className="skills-grid">
        {SKILL_GROUPS.map((group) => (
          <div className="skill-group" key={group.label}>
            <h3>{group.label}</h3>
            <div className="skill-tags">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
