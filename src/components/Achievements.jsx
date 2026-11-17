import Section from './Section'
import { achievements } from '../data'

export default function Achievements({ images }) {
  return (
    <Section id="achievements" title="Achievements and certificates" intro="Competitions I took part in. Click a certificate to see it in full size.">
      <div className="grid gap-6 md:grid-cols-2">
        {achievements.map((a) => (
          <article key={a.title} className="overflow-hidden rounded-xl border border-line bg-surface">
            <a href={images[a.imageKey]} target="_blank" rel="noopener noreferrer" aria-label={`Open certificate: ${a.title}`}>
              <img src={images[a.imageKey]} alt={`Certificate: ${a.title}`} loading="lazy" className="h-56 w-full object-cover" />
            </a>
            <div className="p-6">
              <p className="text-sm font-medium text-accent">{a.badge}</p>
              <h3 className="mt-1 font-display text-xl font-bold">{a.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{a.text}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
