import huntrShot from '../assets/huntr.webp'
import pirataShot from '../assets/pirata.webp'
import chessdayShot from '../assets/chessday.webp'
import walangPasokShot from '../assets/walang-pasok.webp'

const PROJECTS = [
  {
    name: 'Huntr',
    category: 'Web App',
    blurb:
      'Reads each job post you paste, works out whether it wants an email or a form, drafts what it asks for, and sends it from your Gmail.',
    stack: 'React · Express · Node · Supabase',
    url: 'https://akuraskurasa.github.io/huntr/',
    shot: huntrShot,
    alt: 'The Huntr apply page: a job-link field above the batch apply steps.',
  },
  {
    name: 'Pirata',
    category: 'Web App',
    blurb:
      'A free all-in-one student toolkit. PDF, image and media tools that run fully in the browser, so files never leave the device.',
    stack: 'React · Vite · pdf-lib',
    url: 'https://akuraskurasa.github.io/piratatools/',
    shot: pirataShot,
    alt: 'The Pirata home page: a search field over a grid of student tools.',
  },
  {
    name: 'ChessDay',
    category: 'MERN App',
    blurb:
      'Pulls your Lichess and Chess.com games, scans them with Stockfish to find where you lose points, and builds a bot that plays like you.',
    stack: 'MongoDB · Express · React · Node',
    url: 'https://akuraskurasa.github.io/chessday/',
    shot: chessdayShot,
    alt: 'The ChessDay home page: a username search above a sample player report.',
  },
  {
    name: 'Walang Pasok API',
    category: 'API',
    blurb:
      'Tracks class suspensions across the Philippines, each one checked against its source, as data any app or bot can query.',
    stack: 'Python · FastAPI · PostgreSQL',
    url: 'https://akuraskurasa.github.io/walang-pasok-api/',
    shot: walangPasokShot,
    alt: 'The Walang Pasok home page: an admit slip that reports whether classes are suspended in a chosen city.',
  },
]

export default function Projects() {
  return (
    <section className="projects" id="work">
      <div className="section-label">
        <p className="eyebrow">SELECTED WORK</p>
        <h2>Projects</h2>
      </div>

      <div className="project-grid">
        {PROJECTS.map((p, i) => (
          <a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
            data-cursor="hover"
          >
            <img
              className="project-shot"
              src={p.shot}
              alt={p.alt}
              width="1440"
              height="810"
              loading={i === 0 ? 'eager' : 'lazy'}
              decoding="async"
            />
            <div className="project-body">
              <p className="project-category">{p.category}</p>
              <h3 className="project-name">{p.name}</h3>
              <p className="project-blurb">{p.blurb}</p>
              <p className="project-stack">{p.stack}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
