import { useState } from 'react'
import { FaBars, FaTimes, FaMoon, FaSun, FaGithub, FaLinkedin } from 'react-icons/fa'
import { nav, profile } from '../data'
import { useActiveSection } from '../hooks/useActiveSection'

const ids = nav.map((n) => n.id)

export default function Navbar({ dark, toggleTheme }) {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(ids)

  const linkClass = (id) =>
    `py-1 text-sm font-medium transition-colors hover:text-accent ${
      active === id ? 'text-accent' : 'text-muted'
    }`

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/85 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6" aria-label="Main">
        <a href="#home" className="font-display text-xl font-bold">
          {profile.shortName}<span className="text-accent">.dev</span>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {nav.slice(1).map((n) => (
            <a key={n.id} href={`#${n.id}`} className={linkClass(n.id)} aria-current={active === n.id ? 'true' : undefined}>
              {n.label}
            </a>
          ))}
          <span className="h-5 w-px bg-line" />
          <a href={profile.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted hover:text-accent"><FaGithub size={18} /></a>
          <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted hover:text-accent"><FaLinkedin size={18} /></a>
          <button onClick={toggleTheme} aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'} className="text-muted hover:text-accent">
            {dark ? <FaSun size={18} /> : <FaMoon size={18} />}
          </button>
        </div>

        <div className="flex items-center gap-4 lg:hidden">
          <button onClick={toggleTheme} aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'} className="text-muted">
            {dark ? <FaSun size={18} /> : <FaMoon size={18} />}
          </button>
          <button onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-line bg-bg px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {nav.map((n) => (
              <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)} className={linkClass(n.id)}>
                {n.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
