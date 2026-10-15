import { useState } from 'react'

const PROJECTS = [
  {
    index: '01',
    name: 'Pirata',
    category: 'Web App',
    desc: 'A free all-in-one student toolkit. PDF, image and media tools that run fully in the browser.',
    url: 'https://akuraskurasa.github.io/piratatools/',
    hue: 18,
  },
  {
    index: '02',
    name: 'ChessDay',
    category: 'MERN App',
    desc: 'Pulls your Lichess and Chess.com games, finds your weak spots, and builds a bot that plays like you.',
    url: 'https://akuraskurasa.github.io/chessday/',
    hue: 202,
  },
]

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const hovered = PROJECTS.find((p) => p.index === hoveredIndex)

  const handleMouseMove = (e) => {
    setPos({ x: e.clientX, y: e.clientY })
  }

  return (
    <section className="projects" id="work" onMouseMove={handleMouseMove}>
      <div className="section-label">
        <p className="eyebrow">SELECTED WORK</p>
        <h2>Projects</h2>
      </div>

      <div className="project-list">
        {PROJECTS.map((p) => (
          <a
            key={p.index}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-row"
            data-cursor="hover"
            onMouseEnter={() => setHoveredIndex(p.index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <span className="project-index">{p.index}</span>
            <span className="project-name">{p.name}</span>
            <span className="project-category">{p.category}</span>
            <span className="project-arrow">↗</span>
          </a>
        ))}
      </div>

      {hovered && (
        <div
          className="project-preview"
          style={{
            transform: `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)`,
            background: `hsl(${hovered.hue}, 60%, 52%)`,
          }}
        >
          <span>{hovered.desc}</span>
        </div>
      )}
    </section>
  )
}
