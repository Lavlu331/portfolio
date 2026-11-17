export default function Section({ id, title, intro, children }) {
  return (
    <section id={id} className="scroll-mt-16 border-t border-line py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
        {intro && <p className="mt-2 max-w-xl text-muted">{intro}</p>}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  )
}
