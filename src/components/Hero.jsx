function Hero() {
  return (
    <section className="section hero" id="top">
      <div className="hero-status">Open to internship opportunities</div>

      <h1>Christin Jordan</h1>
      <div className="hero-title">Full-Stack Software Engineer</div>

      <p>
        Building full-stack applications with React, Flask, and a habit of tracking down the
        bug nobody else wants to touch. Currently in Flatiron School's AI Engineering Immersive
        Program, looking for my next internship.
      </p>

      <div className="hero-actions">
        <a className="btn btn-primary" href="#projects">
          View Projects
        </a>
        <a className="btn btn-ghost" href="#contact">
          Get in Touch
        </a>
      </div>
    </section>
  );
}

export default Hero;
