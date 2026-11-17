import { FaArrowRight, FaDownload } from 'react-icons/fa'
import { profile } from '../data'

export default function Hero({ photo }) {
  return (
    <section id="home" className="mx-auto grid min-h-[92vh] max-w-5xl items-center gap-12 px-6 pb-20 pt-32 md:grid-cols-[1.3fr_1fr]">
      <div>
        {profile.status && (
          <p className="hero-in inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-sm text-muted">
            <span className="h-2 w-2 rounded-full bg-mark" aria-hidden="true" />
            {profile.status}
          </p>
        )}
        <h1 className="hero-in mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
          {profile.headline}
        </h1>
        <p className="hero-in mt-6 max-w-lg text-lg leading-relaxed text-muted">
          Hi, I'm {profile.name}. {profile.intro}
        </p>
        <div className="hero-in mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 font-medium text-accent-ink transition hover:opacity-90">
            See my projects <FaArrowRight size={14} />
          </a>
          <a href={profile.resume} download className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-5 py-3 font-medium transition hover:border-accent">
            <FaDownload size={14} /> Download CV
          </a>
        </div>
      </div>

      <div className="hero-in mx-auto w-full max-w-xs">
        <div className="relative">
          <div className="absolute -bottom-3 -right-3 h-full w-full rounded-2xl border-2 border-accent" aria-hidden="true" />
          <img src={photo} alt={profile.name} className="relative aspect-[4/5] w-full rounded-2xl bg-surface object-cover" />
        </div>
      </div>
    </section>
  )
}
