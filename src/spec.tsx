export function Spec({
  id,
  title,
  note,
  children,
}: {
  id: string
  title: string
  note: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="grid scroll-mt-14 border-t md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
      <div className="px-6 py-8 md:sticky md:top-14 md:self-start">
        <h2 className="text-xl font-medium tracking-tight">{title}</h2>
        <p className="mt-2 max-w-[32ch] text-sm leading-relaxed text-muted-foreground">{note}</p>
      </div>
      <div className="border-t px-6 py-8 md:border-t-0 md:border-l">{children}</div>
    </section>
  )
}

export function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-3 py-5 first:pt-0 last:pb-0 not-last:border-b sm:grid-cols-[8rem_1fr]">
      <span className="text-xs text-muted-foreground">{label}</span>
      <div className="flex min-w-0 flex-wrap items-center gap-2">{children}</div>
    </div>
  )
}
