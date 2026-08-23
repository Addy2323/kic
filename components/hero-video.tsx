'use client'

import { useState, useRef, useEffect } from 'react'
import { Play, Pause } from 'lucide-react'

export function HeroVideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay may be restricted in some browser settings
        setIsPlaying(false)
      })
    }
  }, [])

  const togglePlay = () => {
    if (!videoRef.current) return
    if (isPlaying) {
      videoRef.current.pause()
      setIsPlaying(false)
    } else {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Fallback & Poster Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
        style={{ 
          backgroundImage: 'url(/images/hero-bg.jpg)',
          opacity: isLoaded ? 0.3 : 1
        }} 
      />

      {/* Looping HTML5 Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        onLoadedData={() => setIsLoaded(true)}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
          isLoaded ? 'opacity-85' : 'opacity-0'
        }`}
        poster="/images/hero-bg.jpg"
      >
        <source src="/videos/hero.webm" type="video/webm" />
      </video>

      {/* Atmospheric Multi-layer Color Grading & Overlays */}
      {/* 1. Deep Brand Forest Green Tint */}
      <div className="absolute inset-0 bg-[#072115]/70 mix-blend-multiply" />

      {/* 2. Top-to-Bottom Readability Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#061e13] via-[#061e13]/60 to-[#061e13]/40" />

      {/* 3. Radial Vignette for Cinematic Focus */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,transparent_20%,#061e13_90%)] opacity-80" />

      {/* 4. Fine Grid / Ambient Light Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" />

      {/* Play/Pause Control Button (Pointer-events enabled) */}
      <div className="absolute bottom-8 left-6 z-20 pointer-events-auto hidden sm:block lg:left-10">
        <button
          onClick={togglePlay}
          className="flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-3 py-1.5 text-[11px] font-medium uppercase tracking-widest text-white/80 backdrop-blur-md transition-all hover:border-white/40 hover:bg-black/50 hover:text-white"
          aria-label={isPlaying ? 'Pause background video' : 'Play background video'}
        >
          {isPlaying ? (
            <>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <Pause size={12} />
              <span>Live Video</span>
            </>
          ) : (
            <>
              <Play size={12} />
              <span>Play Video</span>
            </>
          )}
        </button>
      </div>
    </div>
  )
}
