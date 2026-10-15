export default function Contact() {
  return (
    <section className="contact" id="contact">
      <p className="eyebrow eyebrow--invert">GET IN TOUCH</p>
      <a
        href="https://www.linkedin.com/in/paul-andrei-calma/"
        target="_blank"
        rel="noopener"
        className="contact-cta"
        data-cursor="hover"
      >
        Let&apos;s build
        <br />
        something <span className="contact-arrow">→</span>
      </a>
      <div className="contact-links">
        <a href="https://github.com/AkurasKurasa" target="_blank" rel="noopener" data-cursor="hover">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/paul-andrei-calma/" target="_blank" rel="noopener" data-cursor="hover">
          LinkedIn
        </a>
      </div>
    </section>
  )
}
