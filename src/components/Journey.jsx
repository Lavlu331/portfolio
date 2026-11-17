import Section from './Section'
import { education, experience } from '../data'

function Timeline({ title, items }) {
  return (
    <div>
      <h3 className="font-display text-xl font-bold">{title}</h3>
      <ol className="mt-6 space-y-8 border-l-2 border-line pl-6">
        {items.map((i) => (
          <li key={i.title} className="relative">
            <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-accent" aria-hidden="true" />
            <p className="text-sm text-muted">{i.period}</p>
            <p className="font-semibold">{i.title}</p>
            <p className="text-sm text-muted">{i.place}</p>
            {i.note && <p className="mt-1 text-sm leading-relaxed">{i.note}</p>}
          </li>
        ))}
      </ol>
    </div>
  )
}

export default function Journey() {
  return (
    <Section id="journey" title="Education and experience">
      <div className="grid gap-12 md:grid-cols-2">
        <Timeline title="Education" items={education} />
        <Timeline title="Experience" items={experience} />
      </div>
    </Section>
  )
}
