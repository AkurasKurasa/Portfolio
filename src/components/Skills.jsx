const SKILL_GROUPS = [
  {
    label: 'Frontend',
    skills: ['React', 'React Native', 'Angular', 'HTML', 'CSS', 'Sass/SCSS', 'JavaScript', 'TypeScript'],
  },
  {
    label: 'Backend & Data',
    skills: ['Node.js', 'Express.js', 'Python', 'Java', 'SQL', 'MongoDB', 'Firebase', 'Supabase'],
  },
  {
    label: 'Design',
    skills: ['Figma'],
  },
]

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="section-label">
        <p className="eyebrow">TOOLBOX</p>
        <h2>Skills</h2>
      </div>

      <div className="skills-list">
        {SKILL_GROUPS.map((group) => (
          <div className="skills-row" key={group.label}>
            <p className="skills-row-label">{group.label}</p>
            <p className="skills-row-words">
              {group.skills.map((skill, i) => (
                <span key={skill}>
                  <span className="skill-word" data-cursor="hover">
                    {skill}
                  </span>
                  {i < group.skills.length - 1 ? ', ' : ''}
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
