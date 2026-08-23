'use client'

import { useEffect, useState } from 'react'

export function StartupLoader() {
  const [loading, setLoading] = useState(true)
  const [fading, setFading] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // 5-second progress animation (5000ms)
    const startTime = performance.now()
    const duration = 5000 // 5 seconds full duration

    let animId: number
    const updateProgress = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const currentPct = Math.min(100, Math.round((elapsed / duration) * 100))
      setProgress(currentPct)

      if (elapsed < duration) {
        animId = requestAnimationFrame(updateProgress)
      } else {
        // Trigger smooth fade out after full 5 seconds
        setFading(true)
        setTimeout(() => {
          setLoading(false)
        }, 700)
      }
    }

    animId = requestAnimationFrame(updateProgress)

    return () => {
      if (animId) cancelAnimationFrame(animId)
    }
  }, [])

  if (!loading) return null

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#05180f] text-white transition-opacity duration-700 ease-out ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background ambient gold gradient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_50%,rgba(197,160,89,0.15),transparent_75%)] pointer-events-none" />

      <div className="relative flex flex-col items-center px-6 text-center">
        {/* KIC Monogram Badge */}
        <div className="relative flex h-20 w-20 items-center justify-center rounded-md bg-gradient-to-br from-[#0c3120] to-[#04140c] shadow-2xl ring-1 ring-white/20 animate-in fade-in zoom-in-95 duration-700">
          <span className="font-serif text-3xl font-bold tracking-wider text-[#c5a059]">
            KIC
          </span>
          <div className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-[#c5a059] shadow-sm animate-ping duration-1000" />
          <div className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-[#c5a059]" />
        </div>

        {/* Corporate Title Reveal */}
        <div className="mt-8 overflow-hidden">
          <h1 className="text-sm font-bold uppercase tracking-[0.35em] text-white sm:text-base animate-in slide-in-from-bottom-3 fade-in duration-700 delay-200">
            Kigola International
          </h1>
          <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#c5a059] animate-in slide-in-from-bottom-2 fade-in duration-700 delay-300">
            Company Limited · Est. 2009
          </p>
        </div>

        {/* 5-Second Animated Gold Progress Line */}
        <div className="mt-9 flex flex-col items-center gap-2.5">
          <div className="h-[2.5px] w-56 overflow-hidden rounded-full bg-white/10 sm:w-72">
            <div
              className="h-full bg-gradient-to-r from-[#c5a059]/40 via-[#c5a059] to-[#f3dfa2] transition-all duration-75 ease-linear shadow-[0_0_12px_rgba(197,160,89,0.8)]"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="font-mono text-[10px] tracking-widest text-[#c5a059]/75 uppercase">
            {progress}%
          </span>
        </div>
      </div>
    </div>
  )
}
