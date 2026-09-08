const SECTIONS = [
  { id: "about", label: "about" },
  { id: "projects", label: "projects" },
  { id: "skills", label: "skills" },
  { id: "contact", label: "contact" },
];

function Gutter() {
  return (
    <nav className="gutter">
      <div>
        <div className="gutter-mark">
          christin<span>.</span>jordan
        </div>

        <ul className="gutter-nav">
          {SECTIONS.map((section) => (
            <li key={section.id}>
              <a href={`#${section.id}`}>{section.label}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="gutter-status">Open to internships</div>
    </nav>
  );
}

export default Gutter;
