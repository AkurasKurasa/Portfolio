export default function Header() {
  return (
    <header className="header">
      <a href="#top" className="header-brand" data-cursor="hover">
        Paul Calma
      </a>
      <nav className="header-nav">
        <a href="#work" data-cursor="hover">
          <span className="nav-index">01</span> Work
        </a>
        <a href="#skills" data-cursor="hover">
          <span className="nav-index">02</span> Skills
        </a>
        <a href="#certifications" data-cursor="hover">
          <span className="nav-index">03</span> Certifications
        </a>
        <a href="#contact" data-cursor="hover">
          <span className="nav-index">04</span> Contact
        </a>
      </nav>
      <a
        href="https://www.linkedin.com/in/paul-andrei-calma/"
        target="_blank"
        rel="noopener"
        className="header-cta"
        data-cursor="hover"
      >
        Say hello
      </a>
    </header>
  )
}
