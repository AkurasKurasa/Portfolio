import datacampBadge from '../assets/badges/datacamp.webp'
import microsoftBadge from '../assets/badges/microsoft.webp'
import securityBlueTeamBadge from '../assets/badges/securityblueteam.webp'
import helsinkiBadge from '../assets/badges/helsinki.webp'
import harvardBadge from '../assets/badges/harvard.webp'

// Newest first. `url` is only set where the credential resolves to a public page.
const CERTIFICATIONS = [
  {
    name: 'Data Engineer Associate',
    issuer: 'DataCamp',
    issued: 'Jun 2026',
    expires: 'Jun 2028',
    id: 'DEA0010562061291',
    url: 'https://www.datacamp.com/certificate/DEA0010562061291',
    badge: datacampBadge,
  },
  {
    name: 'Data Analyst Associate',
    issuer: 'DataCamp',
    issued: 'Jun 2026',
    expires: 'Jun 2028',
    id: 'DAA0019126825620',
    url: 'https://www.datacamp.com/certificate/DAA0019126825620',
    badge: datacampBadge,
  },
  {
    name: 'Azure Fundamentals',
    issuer: 'Microsoft',
    issued: 'May 2026',
    id: '7DD390B2674F13F1',
    badge: microsoftBadge,
  },
  {
    name: 'Data Scientist Associate',
    issuer: 'DataCamp',
    issued: 'Feb 2026',
    expires: 'Feb 2028',
    id: 'DSA0019494002899',
    url: 'https://www.datacamp.com/certificate/DSA0019494002899',
    badge: datacampBadge,
  },
  {
    name: 'Blue Team Junior Analyst',
    issuer: 'Security Blue Team',
    issued: 'Feb 2026',
    id: '466049946',
    badge: securityBlueTeamBadge,
  },
  {
    name: 'CS50: Introduction to Computer Science',
    issuer: 'Harvard University',
    issued: 'Jan 2026',
    id: '2cee146c-a6b7-4575-9b44-d4fd198fd7f3',
    url: 'https://certificates.cs50.io/2cee146c-a6b7-4575-9b44-d4fd198fd7f3',
    badge: harvardBadge,
  },
  {
    name: 'Full Stack Open',
    issuer: 'University of Helsinki',
    issued: 'Jan 2024',
    id: '736b942d8f15a7f02ec57ed92d984d3e',
    url: 'https://studies.cs.helsinki.fi/stats/api/certificate/fullstackopen/en/736b942d8f15a7f02ec57ed92d984d3e',
    badge: helsinkiBadge,
  },
]

function CertBody({ cert }) {
  return (
    <>
      <img className="cert-badge" src={cert.badge} alt="" width="128" height="128" loading="lazy" decoding="async" />
      <div className="cert-text">
        <h3 className="cert-name">{cert.name}</h3>
        <p className="cert-meta">
          {cert.issuer} · {cert.issued}
          {cert.expires ? ` – ${cert.expires}` : ''}
        </p>
        <p className="cert-id">{cert.id}</p>
      </div>
    </>
  )
}

export default function Certifications() {
  return (
    <section className="certs" id="certifications">
      <div className="section-label">
        <p className="eyebrow">CREDENTIALS</p>
        <h2>Certifications</h2>
      </div>

      <div className="certs-grid">
        {CERTIFICATIONS.map((cert) =>
          cert.url ? (
            <a
              key={cert.id}
              className="cert cert-link"
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
            >
              <CertBody cert={cert} />
            </a>
          ) : (
            <div key={cert.id} className="cert">
              <CertBody cert={cert} />
            </div>
          )
        )}
      </div>
    </section>
  )
}
