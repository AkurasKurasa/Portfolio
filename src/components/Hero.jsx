export default function Hero() {
  return (
    <section className="hero" id="top">
      <p className="hero-watermark" aria-hidden="true">ENGINEER</p>
      <div className="hero-inner">
        <p className="eyebrow">SOFTWARE ENGINEER</p>
        <h1 className="hero-title">
          Paul Andrei
          <br />
          S. <span className="hero-title-accent">Calma</span>
        </h1>
        <p className="hero-sub">
          I design and build web &amp; mobile products end to end — interfaces
          people enjoy using, backed by systems that hold up.
        </p>
        <div className="hero-links">
          <a href="#work" className="hero-link" data-cursor="hover">
            View work ↓
          </a>
          <a
            href="https://github.com/AkurasKurasa"
            target="_blank"
            rel="noopener"
            className="hero-link"
            data-cursor="hover"
          >
            GitHub ↗
          </a>
          <a
            href="https://www.linkedin.com/in/paul-andrei-calma/"
            target="_blank"
            rel="noopener"
            className="hero-link"
            data-cursor="hover"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </section>
  )
}
