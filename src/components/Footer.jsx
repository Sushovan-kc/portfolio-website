import { Mail } from 'lucide-react'

export default function Footer() {
  return <footer className="relative z-10 flex items-center justify-between border-t border-ink/10 px-6 py-6 text-sm text-ink/70 dark:border-paper/10 dark:text-paper/70 sm:px-10"><span>© 2026 Sushovan Kc</span><span className="flex items-center gap-2"><Mail size={13} /> Built with React & Tailwind</span></footer>
}
