import { FaDownload, FaEnvelope, FaMapMarkerAlt, FaCode, FaMicrochip, FaGlobe, FaAward } from 'react-icons/fa'
import Section from './Section'
import { profile } from '../data'

// এখানকার লেখা নিজের মতো বদলে নিতে পারেন
const lead = 'I am a student learning to build web applications and connected devices.'

const paragraphs = [
  'I study programming and web development, and I enjoy turning what I learn into real projects. I work with PHP-based frameworks and CMS platforms, and I am now learning the MERN stack.',
  'I have completed data structures and algorithms in C, Java and C++, and I am now learning the C++ STL. This helps me write efficient code and solve problems step by step.',
  'I also like hardware. I understand digital electronics from basic to mid-advanced level, and I am building an IoT project where I connect sensors, electronics and software into one working system.',
  'I have joined several competitions and earned certificates, which keeps pushing me to improve.',
]

const focus = [
  {
    Icon: FaGlobe,
    title: 'Web development',
    text: 'PHP frameworks (Laravel, Yii2), CMS (Joomla) and the MERN stack, which I am learning now.',
  },
  {
    Icon: FaMicrochip,
    title: 'IoT and electronics',
    text: 'Digital electronics (basic to mid-advanced) and building an IoT project end to end.',
  },
  {
    Icon: FaCode,
    title: 'Programming and DSA',
    text: 'Python, Java and C/C++. Data structures and algorithms completed in C, Java and C++, with C++ STL in progress.',
  },
]

export default function About() {
  return (
    <Section id="about" title="About me">
      <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
        <div>
          <p className="font-display text-2xl font-bold leading-snug md:text-3xl">{lead}</p>
          <div className="mt-6 max-w-prose space-y-4 leading-relaxed text-muted">
            {paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <ul className="mt-10 grid gap-4 sm:grid-cols-3">
            {focus.map(({ Icon, title, text }) => (
              <li key={title} className="rounded-xl border border-line bg-surface p-5">
                <Icon className="text-accent" size={20} aria-hidden="true" />
                <h3 className="mt-3 font-semibold">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{text}</p>
              </li>
            ))}
          </ul>

          <p className="mt-6 flex items-start gap-3 rounded-xl border border-line bg-surface p-5 text-sm leading-relaxed">
            <FaAward className="mt-0.5 shrink-0 text-mark" size={18} aria-hidden="true" />
            <span>
              <strong>Competitions:</strong> two certificates from the Asset Skills competitions in 2025.{' '}
              <a href="#achievements" className="font-medium text-accent hover:underline">See certificates</a>
            </span>
          </p>
        </div>

        <aside className="h-fit rounded-xl border border-line bg-surface p-6">
          <h3 className="font-display text-lg font-bold">Quick facts</h3>
          <dl className="mt-4 divide-y divide-line text-sm">
            <div className="py-3">
              <dt className="text-muted">Name</dt>
              <dd className="font-medium">{profile.name}</dd>
            </div>
            <div className="py-3">
              <dt className="text-muted">Currently</dt>
              <dd className="font-medium">Student</dd>
            </div>
            <div className="py-3">
              <dt className="text-muted">Location</dt>
              <dd className="flex items-center gap-2 font-medium">
                <FaMapMarkerAlt className="text-accent" aria-hidden="true" /> {profile.location}
              </dd>
            </div>
            <div className="py-3">
              <dt className="text-muted">Learning</dt>
              <dd className="font-medium">MERN stack, C++ STL, PHP frameworks</dd>
            </div>
            <div className="py-3">
              <dt className="text-muted">Building</dt>
              <dd className="font-medium">An IoT project</dd>
            </div>
            <div className="py-3">
              <dt className="text-muted">Languages</dt>
              <dd className="font-medium">Python, Java, C/C++, PHP, JavaScript</dd>
            </div>
          </dl>

          <div className="mt-5 flex flex-col gap-3">
            <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-4 py-3 text-sm font-medium text-accent-ink transition hover:opacity-90">
              <FaEnvelope size={14} /> Contact me
            </a>
            <a href={profile.resume} download className="inline-flex items-center justify-center gap-2 rounded-lg border border-line px-4 py-3 text-sm font-medium transition hover:border-accent">
              <FaDownload size={14} /> Download CV
            </a>
          </div>
        </aside>
      </div>
    </Section>
  )
}