import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { navigation } from '../data/portfolio'

export default function Navbar({ dark, onThemeToggle }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-8">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-ink/10 bg-paper/55 px-4 py-3 shadow-sm backdrop-blur-sm dark:border-paper/10 dark:bg-night/55 sm:px-6">
        <Link to="/#home" onClick={closeMenu} className="font-display text-lg tracking-tight">sushovan<span className="text-lime">.kc</span></Link>
        <div className="hidden items-center gap-7 md:flex">
          {navigation.map((item) => <Link key={item.id} to={`/#${item.id}`} className="text-sm uppercase tracking-[.18em] text-ink/75 transition hover:text-ink dark:text-paper/75 dark:hover:text-paper">{item.label}</Link>)}
          <a href="/resume.pdf" download className="text-sm uppercase tracking-[.18em] text-ink/75 transition hover:text-ink dark:text-paper/75 dark:hover:text-paper">Resume</a>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={onThemeToggle} className="grid size-9 place-items-center rounded-full border border-ink/10 text-ink/70 transition hover:border-lime hover:text-ink dark:border-paper/10 dark:text-paper/70 dark:hover:text-paper" aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'} title={dark ? 'Switch to light theme' : 'Switch to dark theme'}>{dark ? <Sun size={16} /> : <Moon size={16} />}</button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="grid size-9 place-items-center rounded-full border border-ink/10 md:hidden dark:border-paper/10" aria-label="Toggle navigation">{menuOpen ? <X size={18} /> : <Menu size={18} />}</button>
        </div>
      </nav>
      {menuOpen && <div className="mx-auto mt-2 flex max-w-6xl flex-col gap-4 rounded-3xl border border-ink/10 bg-paper/60 p-5 shadow-sm backdrop-blur-sm dark:border-paper/10 dark:bg-night/60 md:hidden">{navigation.map((item) => <Link key={item.id} onClick={closeMenu} to={`/#${item.id}`} className="text-sm uppercase tracking-[.18em]">{item.label}</Link>)}<a href="/resume.pdf" download onClick={closeMenu} className="text-sm uppercase tracking-[.18em] text-ink/75 transition hover:text-ink dark:text-paper/75 dark:hover:text-paper">Resume</a></div>}
    </header>
  )
}
