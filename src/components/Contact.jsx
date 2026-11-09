function Contact() {
  return (
    <section className="section" id="contact">
      <div className="eyebrow">04 — contact</div>
      <h2 style={{ marginBottom: "0.75rem" }}>Let's talk</h2>
      <p>
        I'm currently looking for junior software engineering roles and internships — reach out if you'd like to
        talk about an opportunity, or just want to talk shop about a project.
      </p>

      <div className="hero-actions" style={{ marginTop: "1.75rem" }}>
        <a className="btn btn-primary" href="mailto:cmjordan115@gmail.com">
          Email Me
        </a>
      </div>

      <p className="footer-note">Built with React &amp; Vite — © {new Date().getFullYear()} Christin Jordan</p>
    </section>
  );
}

export default Contact;
