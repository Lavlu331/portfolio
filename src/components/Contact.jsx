import { useState } from 'react'
import Section from './Section'
import { profile } from '../data'

const FORM_ID = import.meta.env.VITE_FORMSPREE_ID

const field = 'w-full rounded-lg border border-line bg-surface px-4 py-3 outline-none focus:border-accent'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  async function onSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    setStatus('sending')
    try {
      const res = await fetch(`https://formspree.io/f/${FORM_ID}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      })
      if (!res.ok) throw new Error('Request failed')
      form.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <Section id="contact" title="Get in touch" intro="Have a project or a question? Send a message and I will reply by email.">
      {FORM_ID ? (
        <form onSubmit={onSubmit} className="max-w-xl space-y-4">
          <div>
            <label htmlFor="name" className="mb-1 block text-sm font-medium">Your name</label>
            <input id="name" name="name" required className={field} autoComplete="name" />
          </div>
          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium">Your email</label>
            <input id="email" name="email" type="email" required className={field} autoComplete="email" />
          </div>
          <div>
            <label htmlFor="message" className="mb-1 block text-sm font-medium">Message</label>
            <textarea id="message" name="message" rows={5} required className={field} />
          </div>
          <button type="submit" disabled={status === 'sending'} className="rounded-lg bg-accent px-6 py-3 font-medium text-accent-ink transition hover:opacity-90 disabled:opacity-60">
            {status === 'sending' ? 'Sending...' : 'Send message'}
          </button>
          <p role="status" className="text-sm">
            {status === 'sent' && 'Message sent. I will reply soon.'}
            {status === 'error' && `Could not send the message. Please email ${profile.email} instead.`}
          </p>
        </form>
      ) : (
        <div className="max-w-xl rounded-xl border border-line bg-surface p-8">
          <p className="text-muted">Click the button to write me an email from your device.</p>
          <a
            href={`mailto:${profile.email}?subject=${encodeURIComponent('Hello Lavlu, I found your portfolio')}`}
            className="mt-5 inline-block rounded-lg bg-accent px-6 py-3 font-medium text-accent-ink transition hover:opacity-90"
          >
            Send email
          </a>
        </div>
      )}
    </Section>
  )
}
