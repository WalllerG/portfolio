'use client'

import React from 'react'

interface ContactLine {
  label: string
  value: string
  href: string
  external: boolean
}

const CONTACT_LINES: ContactLine[] = [
  {
    label: 'email',
    value: 'guowalter61@gmail.com',
    href: 'mailto:guowalter61@gmail.com',
    external: false,
  },
  {
    label: 'github',
    value: 'github.com/WalllerG',
    href: 'https://github.com/WalllerG',
    external: true,
  },
  {
    label: 'linkedin',
    value: 'linkedin.com/in/walter-guo',
    href: 'https://www.linkedin.com/in/walter-guo-4a7779387/',
    external: true,
  },
]

export function Footer() {
  return (
    <footer className="bg-black">
      {/* Separator between section 3 and footer */}
      <div className="h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />

      <div className="py-20 px-8 lg:px-20">
      <div className="w-full max-w-3xl mx-auto rounded-xl overflow-hidden border border-zinc-700 shadow-2xl shadow-black/60">
        {/* Terminal header */}
        <div className="bg-zinc-800 px-4 py-2.5 flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-500" />
          <span className="w-3 h-3 rounded-full bg-yellow-400" />
          <span className="w-3 h-3 rounded-full bg-green-500" />
          <span className="ml-4 text-zinc-400 text-xs font-mono">~/portfolio — zsh</span>
        </div>

        {/* Terminal body */}
        <div className="bg-zinc-950 px-6 py-6 font-mono">
          <p className="text-zinc-500 text-xs mb-4">$ contact --info</p>

          <div className="space-y-2 text-xs sm:text-sm">
            {CONTACT_LINES.map((line) => (
              <div key={line.label} className="flex items-baseline gap-2 flex-wrap">
                <span className="text-green-400 select-none">{'>'}</span>
                <span className="text-zinc-500 w-20 shrink-0">{line.label}:</span>
                <a
                  href={line.href}
                  target={line.external ? '_blank' : undefined}
                  rel={line.external ? 'noopener noreferrer' : undefined}
                  className="text-yellow-400 hover:text-yellow-300 transition-colors duration-200 break-all"
                >
                  {line.value}
                </a>
              </div>
            ))}
          </div>

          {/* Blinking cursor */}
          <p className="text-zinc-500 text-xs mt-5 flex items-center gap-2">
            <span>$</span>
            <span className="inline-block w-2 h-3.5 bg-green-400 animate-terminal-blink" />
          </p>

          {/* Copyright */}
          <div className="mt-6 pt-4 border-t border-zinc-800">
            <p className="text-zinc-500 text-xs font-mono">
              © 2026 Walter Guo · Built with Next.js + Tailwind
            </p>
          </div>
        </div>
      </div>
      </div>
    </footer>
  )
}
