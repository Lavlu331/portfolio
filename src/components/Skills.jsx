import Section from './Section'
import { skills } from '../data'

export default function Skills() {
  return (
    <Section id="skills" title="Skills" intro="Tools and technologies I work with, grouped by what they do.">
      <div className="divide-y divide-line border-y border-line">
        {skills.map((g) => (
          <div key={g.group} className="grid gap-3 py-5 sm:grid-cols-[10rem_1fr]">
            <h3 className="font-display text-lg font-bold">{g.group}</h3>
            <ul className="flex flex-wrap gap-2">
              {g.items.map((s) => (
                <li key={s} className="rounded-md border border-line bg-surface px-3 py-1 text-sm">{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
