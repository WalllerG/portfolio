'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '@/components/ui/theme-provider'

export default function CinematicSwitch() {
  const { theme, toggleTheme } = useTheme()
  const isOn = theme === 'light'

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label="Toggle theme"
      aria-pressed={isOn}
      onClick={toggleTheme}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          toggleTheme()
        }
      }}
      className="inline-flex items-center gap-4 px-4 py-3 rounded-2xl bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm shadow-xl cursor-pointer select-none"
    >
      <span
        className={`text-xs font-bold tracking-wider transition-colors duration-300 ${
          !isOn ? 'text-zinc-400' : 'text-zinc-700'
        }`}
      >
        DARK
      </span>

      <motion.div
        className="relative w-16 h-8 rounded-full shadow-inner"
        initial={false}
        animate={{ backgroundColor: isOn ? '#064e3b' : '#27272a' }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="absolute top-1 left-1 w-6 h-6 rounded-full border border-white/10 shadow-md"
          initial={false}
          animate={{
            x: isOn ? 32 : 0,
            backgroundColor: isOn ? '#34d399' : '#52525b',
          }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          whileTap={{ scale: 0.9 }}
        >
          <div className="absolute top-1 left-1.5 w-2 h-1 bg-white/30 rounded-full blur-[1px]" />
        </motion.div>
      </motion.div>

      <span
        className={`text-xs font-bold tracking-wider transition-colors duration-300 ${
          isOn
            ? 'text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]'
            : 'text-zinc-700'
        }`}
      >
        LIGHT
      </span>
    </div>
  )
}
