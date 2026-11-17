import { FaGithub, FaLinkedin, FaFacebook, FaMapMarkerAlt } from 'react-icons/fa'
import { profile } from '../data'

const social = [
  { href: profile.links.github, label: 'GitHub', Icon: FaGithub },
  { href: profile.links.linkedin, label: 'LinkedIn', Icon: FaLinkedin },
  { href: profile.links.facebook, label: 'Facebook', Icon: FaFacebook },
]

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-lg font-bold">{profile.name}</p>
          <p className="mt-1 flex items-center gap-2 text-sm text-muted">
            <FaMapMarkerAlt className="text-accent" /> {profile.location}
          </p>
        </div>
        <div className="flex gap-3">
          {social.map(({ href, label, Icon }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="rounded-lg border border-line bg-surface p-3 transition hover:border-accent hover:text-accent">
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-5xl px-6 text-sm text-muted">© {new Date().getFullYear()} {profile.name}</p>
    </footer>
  )
}
