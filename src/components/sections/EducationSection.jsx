import { BrainCircuit, BookOpen, GraduationCap, Trophy } from 'lucide-react'
import { education } from '../../data/portfolio'

const icons = [GraduationCap, BrainCircuit, Trophy]

export default function EducationSection() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
      <div className="mb-12 flex items-end justify-between">
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[.2em] text-lime">02 / Background</p>
          <h2 className="font-display text-4xl tracking-tight sm:text-6xl">Education & expertise</h2>
        </div>
        <GraduationCap className="hidden text-lime sm:block" size={42} strokeWidth={1} />
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {education.map(([label, title, detail], index) => {
          const Icon = icons[index] || BookOpen; 
          return (
            <div 
              key={label} 
              className="relative overflow-hidden rounded-2xl border border-ink/10 bg-ink/4 p-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] transition-all duration-300 hover:border-lime/30 dark:border-paper/10 dark:bg-paper/4"
            >
              <Icon className="mb-12 text-lime" size={26} strokeWidth={1.5} />
              <p className="mb-3 text-sm uppercase tracking-[.16em] text-ink/75 dark:text-paper/75">{label}</p>
              <h3 className="mb-4 font-display text-2xl leading-tight">{title}</h3>
              <p className="text-base leading-6 text-ink/80 dark:text-paper/80">{detail}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
