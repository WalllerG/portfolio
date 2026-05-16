'use client'

import React from 'react'
import { Bird, Blocks, CalendarClock, ExternalLink } from 'lucide-react'
import { FlippingCard } from '@/components/ui/flipping-card'

// ─── ASCII art terminal heading ───────────────────────────────────────────────
const PROJECT_ASCII = [
  '██████╗ ██████╗  ██████╗      ██╗███████╗ ██████╗████████╗',
  '██╔══██╗██╔══██╗██╔═══██╗     ██║██╔════╝██╔════╝╚══██╔══╝',
  '██████╔╝██████╔╝██║   ██║     ██║█████╗  ██║        ██║   ',
  '██╔═══╝ ██╔══██╗██║   ██║██   ██║██╔══╝  ██║        ██║   ',
  '██║     ██║  ██║╚██████╔╝╚█████╔╝███████╗╚██████╗   ██║   ',
  '╚═╝     ╚═╝  ╚═╝ ╚═════╝  ╚════╝ ╚══════╝ ╚═════╝   ╚═╝   ',
].join('\n')

function TerminalHeading() {
  return (
    <div className="w-full max-w-3xl mx-auto rounded-xl overflow-hidden border border-zinc-700 shadow-2xl shadow-black/60">
      <div className="bg-zinc-800 px-4 py-2.5 flex items-center gap-1.5">
        <span className="w-3 h-3 rounded-full bg-red-500" />
        <span className="w-3 h-3 rounded-full bg-yellow-400" />
        <span className="w-3 h-3 rounded-full bg-green-500" />
        <span className="ml-4 text-zinc-400 text-xs font-mono">~/portfolio — zsh</span>
      </div>
      <div className="bg-zinc-950 px-6 py-5 overflow-x-auto">
        <p className="text-zinc-500 font-mono text-xs mb-3">$ projects --list</p>
        <pre className="text-green-400 font-mono text-[9px] sm:text-xs leading-tight whitespace-pre select-none">
          {PROJECT_ASCII}
        </pre>
      </div>
    </div>
  )
}

// ─── Projects ─────────────────────────────────────────────────────────────────
interface Project {
  id: string
  title: string
  icon: React.ReactNode
  gradient: string
  shortDescription: string
  fullDescription: string
  tags: string[]
  href: string
}

const PROJECTS: Project[] = [
  {
    id: 'flappy-bird',
    title: 'Flappy Bird',
    icon: <Bird size={72} strokeWidth={1.5} />,
    gradient: 'from-yellow-500/30 via-amber-700/20 to-zinc-900',
    shortDescription: 'A recreation of the classic side-scroller, built with Pygame.',
    fullDescription:
      'A faithful clone of the iconic Flappy Bird game built with Python and Pygame. Implements gravity-based bird physics, randomized pipe obstacles, collision detection, and a persistent high-score system.',
    tags: ['Python', 'Pygame'],
    href: 'https://github.com/WalllerG/Flappy_Bird',
  },
  {
    id: 'tetris',
    title: 'Tetris',
    icon: <Blocks size={72} strokeWidth={1.5} />,
    gradient: 'from-cyan-500/30 via-sky-700/20 to-zinc-900',
    shortDescription: "Classic block-stacking puzzle built with Python's Arcade library.",
    fullDescription:
      'A complete Tetris implementation using the Arcade game library in Python. Features all seven tetromino pieces with proper rotation, line-clearing logic, increasing difficulty levels, and score tracking.',
    tags: ['Python', 'Arcade'],
    href: 'https://github.com/WalllerG/Tetris',
  },
  {
    id: 'voice-calendar',
    title: 'Voice Calendar',
    icon: <CalendarClock size={72} strokeWidth={1.5} />,
    gradient: 'from-violet-500/30 via-purple-700/20 to-zinc-900',
    shortDescription: 'A hackathon project that turns spoken commands into calendar events.',
    fullDescription:
      'Built during the CodeJam hackathon, this tool uses speech recognition to parse natural-language event descriptions and automatically generates structured calendar entries — say it, schedule it.',
    tags: ['Hackathon', 'Speech-to-Text', 'Python'],
    href: 'https://github.com/WalllerG/CodeJam-VC',
  },
]

function ProjectCardFront({ project }: { project: Project }) {
  return (
    <div className="flex flex-col h-full w-full p-4">
      {/* Visual area */}
      <div
        className={`flex-grow rounded-md flex items-center justify-center bg-gradient-to-br border border-zinc-800 text-white ${project.gradient}`}
      >
        {project.icon}
      </div>

      {/* Text + tags */}
      <div className="pt-3 px-1">
        <h3 className="text-base font-semibold text-white">{project.title}</h3>
        <p className="text-[12px] mt-1 text-zinc-400 leading-snug">
          {project.shortDescription}
        </p>
        <div className="flex flex-wrap gap-1.5 mt-2.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-mono text-yellow-400 border border-yellow-400/40 px-1.5 py-0.5 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function ProjectCardBack({ project }: { project: Project }) {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full p-6 text-center">
      <h3 className="text-lg font-semibold text-yellow-400 mb-3">{project.title}</h3>
      <p className="text-[13px] text-zinc-300 leading-relaxed">
        {project.fullDescription}
      </p>
      <a
        href={project.href}
        target={project.href !== '#' ? '_blank' : undefined}
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-1.5 bg-yellow-400 text-black px-4 py-2 rounded-md text-xs font-semibold hover:bg-yellow-300 transition-colors"
      >
        View Code <ExternalLink size={12} />
      </a>
    </div>
  )
}

export function ProjectsSection() {
  return (
    <section className="min-h-screen bg-black flex flex-col items-center py-24">
      <div className="w-full px-8 lg:px-20">
        <TerminalHeading />
      </div>

      {/* Projects grid */}
      <div className="w-full flex flex-wrap justify-center gap-8 mt-16 px-8 lg:px-20">
        {PROJECTS.map((project) => (
          <FlippingCard
            key={project.id}
            width={300}
            height={360}
            frontContent={<ProjectCardFront project={project} />}
            backContent={<ProjectCardBack project={project} />}
          />
        ))}
      </div>
    </section>
  )
}
