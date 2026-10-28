import { Download } from 'lucide-react'

export default function ContactSection() {
  return (
  <section id="contact" className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
    <div className="rounded-2xl border border-ink/10 bg-ink/4 p-8 shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] dark:border-paper/10 dark:bg-paper/4 sm:p-10">
    <p className="mb-6 text-sm font-bold uppercase tracking-[.2em] text-lime">05 / Contact</p>
    <h2 className="max-w-3xl font-display text-5xl leading-[.95] tracking-tight sm:text-8xl">Have a problem worth solving?</h2>
    <div className="mt-12 flex flex-col gap-6 border-t border-ink/20 pt-6 dark:border-paper/20 sm:flex-row sm:items-center sm:justify-between">
    <a href="mailto:sushovankc7@gmail.com" className="text-xl underline decoration-1 underline-offset-8 sm:text-2xl">sushovankc7@gmail.com</a>
    <div className="flex items-center gap-5"><a href="https://github.com/Sushovan-kc" target="_blank" rel="noreferrer" className="text-sm font-bold uppercase tracking-[.12em]">GitHub</a>
    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-sm font-bold uppercase tracking-[.12em]">LinkedIn</a>
    <a href="/resume.pdf" download className="inline-flex items-center gap-2 border border-lime px-4 py-2 text-sm font-bold uppercase tracking-[.14em] text-lime"><Download size={15} /> Resume</a>
    </div>
    </div>
    </div>
    </section>)
}
