const LINKS = [
  {
    label: "Email",
    value: "cmjordan115@gmail.com",
    href: "mailto:cmjordan115@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/Christin115",
    href: "https://github.com/Christin115",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/christin-jordan",
    href: "https://www.linkedin.com/in/christin-jordan-6b92b0181",
  },
];

function Contact() {
  return (
    <section className="section" id="contact">
      <div className="eyebrow">04 — contact</div>
      <h2 style={{ marginBottom: "0.75rem" }}>Let's talk</h2>
      <p>
        I'm currently looking for a software engineering internship — reach out if you'd like to
        talk about an opportunity, or just want to talk shop about a project.
      </p>

      <div className="contact-links">
        {LINKS.map((link) => (
          <a
            className="contact-link"
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
          >
            {link.value}
            <span>{link.label}</span>
          </a>
        ))}
      </div>

      <p className="footer-note">Built with React &amp; Vite — © {new Date().getFullYear()} Christin Jordan</p>
    </section>
  );
}

export default Contact;
