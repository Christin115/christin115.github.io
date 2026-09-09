const SECTIONS = [
  { id: "about", label: "about" },
  { id: "projects", label: "projects" },
  { id: "skills", label: "skills" },
  { id: "contact", label: "contact" },
];

const CONTACT_LINKS = [
  { label: "Email", href: "mailto:cmjordan115@gmail.com" },
  { label: "GitHub", href: "https://github.com/Christin115" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/christin-jordan-6b92b0181" },
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

      <div>
        <div className="gutter-contact-label">Contact</div>

        <ul className="gutter-contact">
          {CONTACT_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="gutter-status">Open to internships</div>
      </div>
    </nav>
  );
}

export default Gutter;
