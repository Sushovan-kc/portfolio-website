import { useEffect, useRef } from 'react'

const COLORS = ['#1b5e20', '#256b2a', '#2e7d32', '#367c3b', '#438c48']

export default function AetherFlow() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    let animationFrame
    let particles = []
    let viewport = { width: window.innerWidth, height: window.innerHeight }
    let lastTime = 0
    const pointer = { x: null, y: null, active: false }

    const createParticles = () => {
      const count = viewport.width < 768 ? 70 : 150
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * viewport.width,
        y: Math.random() * viewport.height,
        vx: (Math.random() - 0.5) * 0.16,
        vy: (Math.random() - 0.5) * 0.16,
        size: Math.random() * 3 + 3,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        phase: Math.random() * Math.PI * 2,
      }))
    }

    const resize = () => {
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2)
      viewport = { width: window.innerWidth, height: window.innerHeight }
      canvas.width = viewport.width * pixelRatio
      canvas.height = viewport.height * pixelRatio
      canvas.style.width = `${viewport.width}px`
      canvas.style.height = `${viewport.height}px`
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
      createParticles()
      lastTime = 0
    }

    const move = (event) => {
      pointer.x = event.clientX
      pointer.y = event.clientY
      pointer.active = true
    }

    const leave = () => { pointer.active = false }
    const draw = (time) => {
      const delta = lastTime ? Math.min((time - lastTime) / 16.67, 1.5) : 1
      lastTime = time
      context.clearRect(0, 0, viewport.width, viewport.height)
      const timeSeconds = time * 0.000004
      const influenceRadius = 150

      particles.forEach((particle) => {
        particle.phase += 0.004 * delta
        const flowAngle = Math.sin(particle.y * 0.006 + timeSeconds + particle.phase) * 0.35
        particle.vx += Math.cos(flowAngle) * 0.0008 * delta
        particle.vy += Math.sin(flowAngle) * 0.0008 * delta

        if (pointer.active) {
          const dx = pointer.x - particle.x
          const dy = pointer.y - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          if (distance < influenceRadius) {
            const force = (1 - distance / influenceRadius) * 0.01 * delta
            particle.vx += (dx / Math.max(distance, 1)) * force
            particle.vy += (dy / Math.max(distance, 1)) * force
          }
        }

        particle.vx *= 0.995 ** delta
        particle.vy *= 0.995 ** delta
        const speed = Math.sqrt(particle.vx ** 2 + particle.vy ** 2)
        const maxSpeed = 0.55
        if (speed > maxSpeed) {
          particle.vx = (particle.vx / speed) * maxSpeed
          particle.vy = (particle.vy / speed) * maxSpeed
        }
        particle.x += particle.vx * delta
        particle.y += particle.vy * delta
        if (particle.x < -20) particle.x = viewport.width + 20
        if (particle.x > viewport.width + 20) particle.x = -20
        if (particle.y < -20) particle.y = viewport.height + 20
        if (particle.y > viewport.height + 20) particle.y = -20
      })

      const connectionDistance = viewport.width < 768 ? 82 : 112
      context.lineWidth = 0.7
      for (let first = 0; first < particles.length; first += 1) {
        for (let second = first + 1; second < particles.length; second += 1) {
          const dx = particles[first].x - particles[second].x
          const dy = particles[first].y - particles[second].y
          const distance = Math.sqrt(dx * dx + dy * dy)
          if (distance < connectionDistance) {
            const opacity = ((1 - distance / connectionDistance) * 0.38).toFixed(3)
            context.strokeStyle = `rgba(27, 94, 32, ${opacity})`
            context.beginPath()
            context.moveTo(particles[first].x, particles[first].y)
            context.lineTo(particles[second].x, particles[second].y)
            context.stroke()
          }
        }
      }

      particles.forEach((particle) => {
        context.fillStyle = particle.color
        context.globalAlpha = 0.86
        context.shadowColor = particle.color
        context.shadowBlur = 5
        context.beginPath()
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        context.fill()
      })
      context.globalAlpha = 1
      context.shadowBlur = 0
      animationFrame = requestAnimationFrame(draw)
    }

    const handleVisibility = () => {
      if (document.hidden) cancelAnimationFrame(animationFrame)
      else {
        lastTime = 0
        animationFrame = requestAnimationFrame(draw)
      }
    }

    resize()
    animationFrame = requestAnimationFrame(draw)
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', move)
    window.addEventListener('mouseleave', leave)
    document.addEventListener('visibilitychange', handleVisibility)
    return () => {
      cancelAnimationFrame(animationFrame)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseleave', leave)
      document.removeEventListener('visibilitychange', handleVisibility)
    }
  }, [])

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-0 opacity-90" aria-hidden="true" />
}
