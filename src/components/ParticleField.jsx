import { useEffect, useRef } from 'react'

export default function ParticleField({ dark }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    let animationFrame
    let particles = []
    let mouse = { x: null, y: null }
    let viewport = { width: window.innerWidth, height: window.innerHeight }

    const resize = () => {
      const pixelRatio = window.devicePixelRatio || 1
      viewport = { width: window.innerWidth, height: window.innerHeight }
      canvas.width = viewport.width * pixelRatio
      canvas.height = viewport.height * pixelRatio
      canvas.style.width = `${viewport.width}px`
      canvas.style.height = `${viewport.height}px`
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
      particles = Array.from({ length: viewport.width < 768 ? 90 : 180 }, () => ({
        x: Math.random() * viewport.width,
        y: Math.random() * viewport.height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        size: Math.random() * 2.2 + 1.8,
      }))
    }

    const move = (event) => { mouse = { x: event.clientX, y: event.clientY } }
    const handleVisibility = () => {
      if (document.hidden) cancelAnimationFrame(animationFrame)
      else animationFrame = requestAnimationFrame(draw)
    }
    const draw = () => {
      context.clearRect(0, 0, viewport.width, viewport.height)
      context.lineWidth = 0.5

      const connectionDistance = viewport.width < 768 ? 85 : 105
      for (let first = 0; first < particles.length; first += 1) {
        for (let second = first + 1; second < particles.length; second += 1) {
          const dx = particles[first].x - particles[second].x
          const dy = particles[first].y - particles[second].y
          const distance = Math.sqrt(dx * dx + dy * dy)
          if (distance < connectionDistance) {
            const opacity = ((1 - distance / connectionDistance) * (dark ? 0.16 : 0.22)).toFixed(3)
            context.strokeStyle = dark ? `rgba(134, 239, 172, ${opacity})` : `rgba(27, 94, 32, ${opacity})`
            context.beginPath()
            context.moveTo(particles[first].x, particles[first].y)
            context.lineTo(particles[second].x, particles[second].y)
            context.stroke()
          }
        }
      }

      particles.forEach((particle) => {
        const dx = (mouse.x ?? -1000) - particle.x
        const dy = (mouse.y ?? -1000) - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        if (distance < 150) {
          particle.vx -= (dx / Math.max(distance, 1)) * 0.01
          particle.vy -= (dy / Math.max(distance, 1)) * 0.01
        }
        particle.vx *= 0.995
        particle.vy *= 0.995
        particle.x += particle.vx
        particle.y += particle.vy
        if (particle.x < 0 || particle.x > viewport.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > viewport.height) particle.vy *= -1
        context.fillStyle = dark ? 'rgba(134, 239, 172, .7)' : 'rgba(27, 94, 32, .68)'
        context.beginPath()
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        context.fill()
      })
      animationFrame = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', move)
    document.addEventListener('visibilitychange', handleVisibility)
    return () => {
      cancelAnimationFrame(animationFrame)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', move)
      document.removeEventListener('visibilitychange', handleVisibility)
    }
  }, [dark])

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-0 opacity-80" aria-hidden="true" />
}
