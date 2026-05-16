'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { ChevronDown, GitBranch, Link2, ExternalLink } from 'lucide-react'
import { SplineScene } from '@/components/ui/splite'
import { Spotlight } from '@/components/ui/spotlight'
import { CommitsGrid } from '@/components/ui/commits-grid'
import { TechStackOrbit } from '@/components/ui/tech-stack-orbit'

// ─── Hero ─────────────────────────────────────────────────────────────────────

function HeroSection({ onScrollDown }: { onScrollDown: () => void }) {
  return (
    <section className="relative min-h-screen bg-black flex items-center overflow-hidden">
      <Spotlight size={160} />

      <div className="w-full flex flex-col lg:flex-row items-center px-8 lg:px-20 gap-8 lg:gap-0 pt-12 lg:pt-0">
        {/* Left: bio */}
        <div className="flex-1 z-10 space-y-6">
          <p className="text-yellow-400 font-mono text-sm tracking-widest uppercase">
            Hi, I'm
          </p>
          <h1 className="text-6xl lg:text-7xl font-bold text-white leading-tight">
            Walter<br />
            <span className="text-yellow-400">Guo</span>
          </h1>
          <p className="text-xl text-white font-medium">
            CS Student · Algorithm Enthusiast
          </p>
          <p className="text-zinc-200 max-w-md leading-relaxed text-base">
            Second-year computer science student with a passion for competitive
            programming, algorithms, and building things that matter. Actively
            looking for a Summer 2026 software engineering internship.
          </p>
          <div className="flex items-center gap-6 pt-2">
            <a
              href="https://github.com/WalllerG"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-zinc-300 hover:text-yellow-400 transition-colors duration-200"
            >
              <GitBranch size={18} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/walter-guo-4a7779387/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-zinc-300 hover:text-yellow-400 transition-colors duration-200"
            >
              <Link2 size={18} /> LinkedIn
            </a>
          </div>
        </div>

        {/* Right: Spline 3D robot */}
        <div className="flex-1 w-full h-[420px] lg:h-[620px]">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>

      <button
        onClick={onScrollDown}
        aria-label="Scroll to achievements"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-yellow-400 hover:text-yellow-300 transition-colors duration-200 animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  )
}

// ─── Achievements ─────────────────────────────────────────────────────────────

// All padded to exactly 6 chars → CommitsGrid always renders at the same width
const CYCLE_TEXTS = [
  'WALTER',  // 6
  ' CODE ',  // 6
  '  AOC ',  // 6
  ' HACK ',  // 6
  '  CS  ',  // 6
  ' 2025 ',  // 6
]

function CyclingCommitsGrid() {
  const [textIndex, setTextIndex] = useState(0)
  const [opacity,   setOpacity]   = useState(1)

  useEffect(() => {
    const id = setInterval(() => {
      setOpacity(0)
      setTimeout(() => {
        setTextIndex((i) => (i + 1) % CYCLE_TEXTS.length)
        setOpacity(1)
      }, 300)
    }, 5500)
    return () => clearInterval(id)
  }, [])

  return (
    <div style={{ opacity, transition: 'opacity 0.3s ease' }} className="w-full">
      <CommitsGrid key={CYCLE_TEXTS[textIndex]} text={CYCLE_TEXTS[textIndex]} />
    </div>
  )
}

const ACHIEVEMENTS = [
  {
    name:  'Advent of Code',
    image: '/images/aoc.png',
    href:  'https://github.com/WalllerG/AdventOfCode',
  },
  {
    name:  'Everybody Codes',
    image: '/images/everybody-codes.png',
    href:  'https://github.com/WalllerG/Everybody-codes',
  },
  {
    name:  'Codeforces',
    image: '/images/codeforces.png',
    href:  '#',
  },
  {
    name:  'Codyssi',
    image: '/images/codyssi_logo.png',
    href:  '#',
  },
]

function AchievementsSection({ sectionRef, onScrollDown }: { sectionRef: React.RefObject<HTMLElement | null>, onScrollDown: () => void }) {
  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-black flex items-center py-24"
    >
      <div className="w-full flex flex-col lg:flex-row items-stretch gap-16 px-8 lg:px-20">

        {/* Left: only the animation block, stretched to match right side */}
        <div className="flex-1 flex items-center justify-center bg-zinc-950 border border-zinc-800 rounded-xl p-6">
          <CyclingCommitsGrid />
        </div>

        {/* Right: achievement cards */}
        <div className="flex-1 flex flex-col justify-center gap-6">
          <p className="text-yellow-400 font-mono text-sm tracking-widest uppercase">
            Competitive Programming
          </p>
          <h2 className="text-4xl font-bold text-white">
            Algorithm <span className="text-yellow-400">Achievements</span>
          </h2>

          <div className="grid grid-cols-2 gap-4">
            {ACHIEVEMENTS.map((a) => (
              <a
                key={a.name}
                href={a.href}
                target={a.href !== '#' ? '_blank' : undefined}
                rel="noopener noreferrer"
                className={[
                  'group block rounded-xl border border-zinc-800 overflow-hidden',
                  'hover:border-yellow-400/50',
                  'hover:shadow-[0_0_28px_rgba(250,204,21,0.12)]',
                  'hover:-translate-y-1 hover:scale-[1.02]',
                  'transition-all duration-300',
                ].join(' ')}
              >
                {/* Image */}
                <div className="relative w-full bg-zinc-900" style={{ paddingBottom: '68%' }}>
                  <Image
                    src={a.image}
                    alt={a.name}
                    fill
                    className="object-contain p-3 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>

                {/* Name bar — 20 % */}
                <div className="bg-zinc-950 px-4 py-3 flex items-center justify-between">
                  <span className="text-white font-semibold text-sm group-hover:text-yellow-400 transition-colors duration-200">
                    {a.name}
                  </span>
                  <ExternalLink
                    size={13}
                    className="text-zinc-600 group-hover:text-yellow-400 transition-colors duration-200 shrink-0"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>

      <button
        onClick={onScrollDown}
        aria-label="Scroll to tech stack"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-yellow-400 hover:text-yellow-300 transition-colors duration-200 animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function MainPage() {
  const achievementsRef = useRef<HTMLElement>(null)
  const techStackRef    = useRef<HTMLDivElement>(null)

  const scrollToAchievements = () =>
    achievementsRef.current?.scrollIntoView({ behavior: 'smooth' })
  const scrollToStack = () =>
    techStackRef.current?.scrollIntoView({ behavior: 'smooth' })

  return (
    <main className="bg-black">
      <HeroSection onScrollDown={scrollToAchievements} />
      <AchievementsSection sectionRef={achievementsRef} onScrollDown={scrollToStack} />
      <div ref={techStackRef}>
        <TechStackOrbit />
      </div>
    </main>
  )
}
