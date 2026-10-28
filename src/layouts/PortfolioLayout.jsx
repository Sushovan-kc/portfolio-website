import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import ParticleField from '../components/ParticleField'
import AetherFlow from '../components/AetherFlow'
import Footer from '../components/Footer'
import ScrollManager from '../components/ScrollManager'

export default function PortfolioLayout() {
  const [dark, setDark] = useState(() => {
    const savedTheme = window.localStorage.getItem('portfolio-theme')
    return savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    window.localStorage.setItem('portfolio-theme', dark ? 'dark' : 'light')
  }, [dark])

  return <div className="min-h-screen overflow-hidden bg-paper text-ink transition-colors duration-500 dark:bg-night dark:text-paper"><ScrollManager />{dark ? <ParticleField dark /> : <AetherFlow />}<Navbar dark={dark} onThemeToggle={() => setDark((current) => !current)} /><main className="relative z-10"><Outlet /></main><Footer /></div>
}
