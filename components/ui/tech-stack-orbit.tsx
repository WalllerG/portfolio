'use client'

import React from 'react'
import { cn } from '@/lib/utils'

// ─── Keyframe for the marquee ─────────────────────────────────────────────────
const MARQUEE_KEYFRAMES = `
@keyframes marquee-scroll {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
`

// ─── ASCII art terminal heading ───────────────────────────────────────────────
const STACK_ASCII = [
  '███████╗████████╗ █████╗  ██████╗██╗  ██╗',
  '██╔════╝╚══██╔══╝██╔══██╗██╔════╝██║ ██╔╝',
  '███████╗   ██║   ███████║██║     █████╔╝ ',
  '╚════██║   ██║   ██╔══██║██║     ██╔═██╗ ',
  '███████║   ██║   ██║  ██║╚██████╗██║  ██╗',
  '╚══════╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝',
].join('\n')

function TerminalHeading() {
  return (
    <div className="w-full max-w-2xl mx-auto rounded-xl overflow-hidden border border-zinc-700 shadow-2xl shadow-black/60">
      <div className="bg-zinc-800 px-4 py-2.5 flex items-center gap-1.5">
        <span className="w-3 h-3 rounded-full bg-red-500" />
        <span className="w-3 h-3 rounded-full bg-yellow-400" />
        <span className="w-3 h-3 rounded-full bg-green-500" />
        <span className="ml-4 text-zinc-400 text-xs font-mono">~/portfolio — zsh</span>
      </div>
      <div className="bg-zinc-950 px-6 py-5 overflow-x-auto">
        <p className="text-zinc-500 font-mono text-xs mb-3">$ stack --display</p>
        <pre className="text-green-400 font-mono text-[10px] sm:text-xs leading-tight whitespace-pre select-none">
          {STACK_ASCII}
        </pre>
      </div>
    </div>
  )
}

// ─── Tech logo SVG icons (40 × 40) ───────────────────────────────────────────
function PythonIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 100 100" fill="none">
      <path d="M50 5C31 5 32 14 32 14V23h18v3H22S8 24 8 43.5c0 19 12 18 12 18h7v-9s-1-10 9-10h25s9 .5 9-8.5V14S72 5 50 5z" fill="#3776AB"/>
      <path d="M50 95c19 0 18-9 18-9V77H50v-3h27S91 76 91 57c0-19-12-18-12-18h-7v9s1 10-9 10H39s-9-.5-9 8.5V86s-1 9 20 9z" fill="#FFD43B"/>
      <circle cx="39" cy="18" r="4.5" fill="white"/>
      <circle cx="61" cy="82" r="4.5" fill="white"/>
    </svg>
  )
}

function JavaIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 50 60" fill="none">
      <path d="M17 46s-3 1.7 2 2.3c6 .8 9 .7 15.5-.5 0 0 1.7 1 4 2C30 53 6 52 17 46z" fill="#EA2D2E"/>
      <path d="M15 39s-3 2 3.5 2.5c5 .4 10 .4 18-.5 0 0 1.2 1 3 1.5C26 45 4 43 15 39z" fill="#EA2D2E"/>
      <path d="M30 24c3.5 4-1 7-1 7s8.5-4.5 4.3-10c-4-5.4-7-8 9-17 0 0-25 6-12.3 20z" fill="#EA2D2E"/>
      <path d="M51 51s2 1.5-2.5 2.5c-8.5 2.5-35.5 3.3-43 .2-2.7-1.2 2.5-2.8 4-3.2 1-.3 1.5-.3 1.5-.3-1.8-1.3-12 3-5 4.2C23 57 48 55 51 51z" fill="#EA2D2E"/>
      <path d="M22 31s-9 2-3 3c2.7.4 8 .3 12.5 0 3.8-.3 7.7-.8 7.7-.8s-1.5.6-2.3 1.1C28 36.5 9 35.3 14 32.7c4-2 8-1.7 8-1.7z" fill="#EA2D2E"/>
      <path d="M43 45c9.5-5 5-9.5 2-9-.8.1-1.2.3-1.2.3s.3-.6.9-.8c6-2 11 6.5-2 9.8 0 0 .1-.2.3-.3z" fill="#EA2D2E"/>
      <path d="M28 2s5 5-5 13c-8 6.5-2 9.5 0 13.5C18.5 24 16 20.5 17.5 16 20 10.5 31 9 28 2z" fill="#EA2D2E"/>
    </svg>
  )
}

function JavaScriptIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40">
      <rect width="40" height="40" rx="5" fill="#F7DF1E"/>
      <text
        x="50%" y="54%"
        textAnchor="middle" dominantBaseline="middle"
        fontFamily="'Arial Black', Arial, sans-serif"
        fontWeight="900" fontSize="19" fill="#1a1a1a"
      >JS</text>
    </svg>
  )
}

function CSSIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40">
      <rect width="40" height="40" rx="5" fill="#264DE4"/>
      <text
        x="50%" y="54%"
        textAnchor="middle" dominantBaseline="middle"
        fontFamily="'Arial Black', Arial, sans-serif"
        fontWeight="900" fontSize="16" fill="white"
      >CSS</text>
    </svg>
  )
}

function HTMLIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40">
      <rect width="40" height="40" rx="5" fill="#E34F26"/>
      <text
        x="50%" y="38%"
        textAnchor="middle" dominantBaseline="middle"
        fontFamily="'Arial Black', Arial, sans-serif"
        fontWeight="900" fontSize="12" fill="white"
      >HTML</text>
      <text
        x="50%" y="72%"
        textAnchor="middle" dominantBaseline="middle"
        fontFamily="'Arial Black', Arial, sans-serif"
        fontWeight="900" fontSize="16" fill="white"
      >5</text>
    </svg>
  )
}

function ReactAtom() {
  return (
    <svg width="40" height="40" viewBox="-20 -20 40 40" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle r="3.5" fill="currentColor" stroke="none" />
      <ellipse rx="18" ry="6.5" />
      <ellipse rx="18" ry="6.5" transform="rotate(60)" />
      <ellipse rx="18" ry="6.5" transform="rotate(120)" />
    </svg>
  )
}

function NodeJSIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 46">
      <polygon points="20,0 40,11.5 40,34.5 20,46 0,34.5 0,11.5" fill="#539E43"/>
      <path d="M19.5 32c-8.5 0-10.5-3.8-10.5-6.9 0-.3.2-.5.5-.5h2.5c.3 0 .5.2.5.4.4 2.6 1.6 3.8 7.2 3.8 4.4 0 6.2-1 6.2-3.2 0-1.3-.5-2.3-7.2-3-5.6-.6-9.1-1.7-9.1-6.2 0-4.1 3.5-6.5 9.3-6.5 6.6 0 9.8 2.3 10.2 7.2 0 .2-.1.3-.2.5-.1.1-.3.2-.4.2H26c-.3 0-.5-.2-.5-.4C25 15.9 23.6 15 20 15c-4.7 0-5.3 1.6-5.3 2.8 0 1.4.7 1.8 7 2.6 6.2.8 9.4 1.9 9.4 6.6 0 4.5-3.7 6.9-10.6 6.9z" fill="white"/>
    </svg>
  )
}

// ─── Skill data ───────────────────────────────────────────────────────────────
interface Skill {
  name: string
  icon: React.ReactNode
  card: string
  shimmer: string
  glow: string
  iconBox: string
  iconColor: string
  text: string
}

const SKILLS: Skill[] = [
  {
    name: 'Python',
    icon: <PythonIcon />,
    card:      'from-blue-900/40 to-blue-950/80 border-blue-500/30 hover:border-blue-400/70 hover:shadow-blue-500/20',
    shimmer:   'via-blue-400/20',
    glow:      'from-blue-500/10 via-blue-400/15 to-blue-500/10',
    iconBox:   'from-blue-500/25 to-blue-700/10 group-hover:from-blue-400/35',
    iconColor: 'text-blue-400 group-hover:text-blue-300',
    text:      'text-blue-300 group-hover:text-blue-200',
  },
  {
    name: 'Java',
    icon: <JavaIcon />,
    card:      'from-red-900/40 to-red-950/80 border-red-500/30 hover:border-red-400/70 hover:shadow-red-500/20',
    shimmer:   'via-red-400/20',
    glow:      'from-red-500/10 via-red-400/15 to-red-500/10',
    iconBox:   'from-red-500/25 to-red-700/10 group-hover:from-red-400/35',
    iconColor: 'text-red-400 group-hover:text-red-300',
    text:      'text-red-300 group-hover:text-red-200',
  },
  {
    name: 'JavaScript',
    icon: <JavaScriptIcon />,
    card:      'from-yellow-900/40 to-yellow-950/80 border-yellow-500/30 hover:border-yellow-400/70 hover:shadow-yellow-500/20',
    shimmer:   'via-yellow-400/20',
    glow:      'from-yellow-500/10 via-yellow-400/15 to-yellow-500/10',
    iconBox:   'from-yellow-500/25 to-yellow-700/10 group-hover:from-yellow-400/35',
    iconColor: 'text-yellow-400 group-hover:text-yellow-300',
    text:      'text-yellow-300 group-hover:text-yellow-200',
  },
  {
    name: 'React',
    icon: <ReactAtom />,
    card:      'from-cyan-900/40 to-cyan-950/80 border-cyan-500/30 hover:border-cyan-400/70 hover:shadow-cyan-500/20',
    shimmer:   'via-cyan-400/20',
    glow:      'from-cyan-500/10 via-cyan-400/15 to-cyan-500/10',
    iconBox:   'from-cyan-500/25 to-cyan-700/10 group-hover:from-cyan-400/35',
    iconColor: 'text-cyan-400 group-hover:text-cyan-300',
    text:      'text-cyan-300 group-hover:text-cyan-200',
  },
  {
    name: 'Node.js',
    icon: <NodeJSIcon />,
    card:      'from-green-900/40 to-green-950/80 border-green-500/30 hover:border-green-400/70 hover:shadow-green-500/20',
    shimmer:   'via-green-400/20',
    glow:      'from-green-500/10 via-green-400/15 to-green-500/10',
    iconBox:   'from-green-500/25 to-green-700/10 group-hover:from-green-400/35',
    iconColor: 'text-green-400 group-hover:text-green-300',
    text:      'text-green-300 group-hover:text-green-200',
  },
  {
    name: 'HTML',
    icon: <HTMLIcon />,
    card:      'from-orange-900/40 to-orange-950/80 border-orange-500/30 hover:border-orange-400/70 hover:shadow-orange-500/20',
    shimmer:   'via-orange-400/20',
    glow:      'from-orange-500/10 via-orange-400/15 to-orange-500/10',
    iconBox:   'from-orange-500/25 to-orange-700/10 group-hover:from-orange-400/35',
    iconColor: 'text-orange-400 group-hover:text-orange-300',
    text:      'text-orange-300 group-hover:text-orange-200',
  },
  {
    name: 'CSS',
    icon: <CSSIcon />,
    card:      'from-sky-900/40 to-sky-950/80 border-sky-500/30 hover:border-sky-400/70 hover:shadow-sky-500/20',
    shimmer:   'via-sky-400/20',
    glow:      'from-sky-500/10 via-sky-400/15 to-sky-500/10',
    iconBox:   'from-sky-500/25 to-sky-700/10 group-hover:from-sky-400/35',
    iconColor: 'text-sky-400 group-hover:text-sky-300',
    text:      'text-sky-300 group-hover:text-sky-200',
  },
]

// ─── Skill card ───────────────────────────────────────────────────────────────
function SkillCard({ skill }: { skill: Skill }) {
  return (
    <div
      className={cn(
        'group relative w-40 h-40 rounded-2xl shrink-0',
        'backdrop-blur-xl border-2 bg-gradient-to-br shadow-xl',
        'hover:scale-105 hover:-translate-y-2 hover:shadow-2xl',
        'transition-all duration-500 ease-out overflow-hidden cursor-default',
        skill.card
      )}
    >
      <div
        className={cn(
          'absolute inset-0 bg-gradient-to-r from-transparent to-transparent',
          '-translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out',
          skill.shimmer
        )}
      />
      <div
        className={cn(
          'absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500',
          skill.glow
        )}
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full gap-3 p-4">
        <div
          className={cn(
            'p-3 rounded-xl bg-gradient-to-br backdrop-blur-sm transition-all duration-300',
            skill.iconBox,
            skill.iconColor
          )}
        >
          {skill.icon}
        </div>
        <span className={cn('text-sm font-bold tracking-wide transition-colors duration-300', skill.text)}>
          {skill.name}
        </span>
      </div>
    </div>
  )
}

// ─── Main export ──────────────────────────────────────────────────────────────
export function TechStackOrbit() {
  const doubled = [...SKILLS, ...SKILLS]

  return (
    <>
      <style>{MARQUEE_KEYFRAMES}</style>
      <section className="min-h-screen bg-black flex flex-col items-center justify-center py-16 overflow-hidden">

        {/* Content block shifted up so the heading sits above true center */}
        <div className="w-full flex flex-col items-center -translate-y-10">

          {/* Terminal heading */}
          <div className="w-full px-8 lg:px-20 mb-14">
            <TerminalHeading />
          </div>

          {/* Marquee strip */}
          <div className="relative w-full overflow-hidden py-6">

            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-black to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-black to-transparent pointer-events-none" />

            <div
              className="flex"
              style={{
                gap: '5rem',
                width: 'max-content',
                animation: 'marquee-scroll 36s linear infinite',
              }}
            >
              {doubled.map((skill, i) => (
                <SkillCard key={`${skill.name}-${i}`} skill={skill} />
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
