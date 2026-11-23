import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import Section from './Section'
import { projects } from '../data'

export default function Projects() {
  return (
    <Section id="projects" title="Projects" intro="Things I have built. Each one has the stack I used.">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <article key={p.title} className="flex flex-col rounded-xl border border-line bg-surface p-6">
            <h3 className="font-display text-xl font-bold">{p.title}</h3>
            <p className="mt-2 flex-1 leading-relaxed text-muted">{p.description}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <li key={s} className="rounded bg-bg px-2 py-0.5 text-xs font-medium text-muted">{s}</li>
              ))}
            </ul>
            {(p.github || p.live) && (
              <div className="mt-5 flex gap-5 text-sm font-medium">
                {p.github && (
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-accent">
                    <FaGithub /> {p.githubLabel ?? 'Source code'}
                  </a>
                )}
                {p.live && (
                  <a href={p.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-accent">
                    <FaExternalLinkAlt size={12} /> {p.liveLabel ?? 'Live site'}
                  </a>
                )}
              </div>
            )}
          </article>
        ))}
      </div>
    </Section>
  )
}
