import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '../../data/portfolio'

export default function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
      <div className="mb-14">
        <p className="mb-4 text-sm font-bold uppercase tracking-[.2em] text-lime">04 / Selected work</p>
        <h2 className="font-display text-4xl tracking-tight sm:text-6xl">Built to be useful.</h2>
      </div>
      <div className="space-y-8">
        {projects.map((project, index) => (
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: index * .06 }}
            key={project.title}
            className="grid gap-8 rounded-2xl border border-ink/10 bg-ink/[0.04] p-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] dark:border-paper/10 dark:bg-paper/[0.04] sm:p-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-16"
          >
            <div>
              <p className="mb-5 text-sm uppercase tracking-[.18em] text-lime">0{index + 1} — {project.label}</p>
              <h3 className="mb-5 max-w-lg font-display text-4xl leading-[.95] tracking-tight sm:text-5xl">{project.title}</h3>
              <p className="mb-7 max-w-md text-base leading-6 text-ink/80 dark:text-paper/80">{project.description}</p>
              <div className="mb-7 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span key={item} className="border border-ink/20 px-3 py-1.5 text-xs uppercase tracking-[.12em] dark:border-paper/20">
                    {item}
                  </span>
                ))}
              </div>
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[.16em] hover:text-lime"
              >
                View on GitHub <ArrowUpRight size={15} />
              </a>
            </div>
            <div className="aspect-video overflow-hidden rounded-xl bg-mint dark:bg-forest">
              <img
                loading="lazy"
                src={project.image}
                alt={`${project.title} project preview`}
                className="h-full w-full object-cover grayscale transition duration-700 hover:scale-105 hover:grayscale-0"
              />
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
