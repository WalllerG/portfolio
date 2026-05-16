"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { ShaderAnimation } from "@/components/ui/shader-animation"

// ─── text constants ───────────────────────────────────────────────────────────
const WELCOME_WHITE  = "Hey, Welcome to my "        // 19 chars
const WELCOME_ORANGE = "Website"                   // last word — typed in orange
const WELCOME        = WELCOME_WHITE + WELCOME_ORANGE

const CTA_WHITE      = "GET "                   // 4 chars
const CTA_ORANGE     = "STARTED"               // last word — clickable button

// ─── timing (ms) ─────────────────────────────────────────────────────────────
const WELCOME_SPEED  = 60
const WAIT_PAUSE     = 2500
const DELETE_SPEED   = 30
const CTA_SPEED      = 70
const SHADER_DELAY   = 600

type Phase = "idle" | "welcome" | "deleting" | "cta"

function useBlink() {
  const [on, setOn] = useState(true)
  useEffect(() => {
    const id = setInterval(() => setOn((v) => !v), 530)
    return () => clearInterval(id)
  }, [])
  return on
}

export function LoadingPage() {
  const router = useRouter()
  const blink   = useBlink()

  const [phase,          setPhase]          = useState<Phase>("idle")
  const [welcomeLen,     setWelcomeLen]     = useState(0)
  const [deletingText,   setDeletingText]   = useState(WELCOME)
  const [ctaLen,         setCtaLen]         = useState(0)

  // ── start after shader delay ──────────────────────────────────────────────
  useEffect(() => {
    const t = setTimeout(() => setPhase("welcome"), SHADER_DELAY)
    return () => clearTimeout(t)
  }, [])

  // ── type welcome char by char ─────────────────────────────────────────────
  useEffect(() => {
    if (phase !== "welcome") return
    if (welcomeLen >= WELCOME.length) return
    const t = setTimeout(() => setWelcomeLen((n) => n + 1), WELCOME_SPEED)
    return () => clearTimeout(t)
  }, [phase, welcomeLen])

  // ── after fully typed + pause → delete ───────────────────────────────────
  useEffect(() => {
    if (phase !== "welcome") return
    if (welcomeLen < WELCOME.length) return
    const t = setTimeout(() => {
      setPhase("deleting")
      setDeletingText(WELCOME)
    }, WAIT_PAUSE)
    return () => clearTimeout(t)
  }, [phase, welcomeLen])

  // ── delete char by char ───────────────────────────────────────────────────
  useEffect(() => {
    if (phase !== "deleting") return
    if (deletingText.length === 0) {
      setPhase("cta")
      return
    }
    const t = setTimeout(
      () => setDeletingText((s) => s.slice(0, -1)),
      DELETE_SPEED
    )
    return () => clearTimeout(t)
  }, [phase, deletingText])

  // ── type CTA char by char ─────────────────────────────────────────────────
  const ctaFull = CTA_WHITE + CTA_ORANGE
  useEffect(() => {
    if (phase !== "cta") return
    if (ctaLen >= ctaFull.length) return
    const t = setTimeout(() => setCtaLen((n) => n + 1), CTA_SPEED)
    return () => clearTimeout(t)
  }, [phase, ctaLen])

  // ── shared text style ─────────────────────────────────────────────────────
  const base = "text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight"

  // ── cursor (hide once CTA is fully typed) ─────────────────────────────────
  const cursor = (
    <span
      className="text-yellow-400"
      style={{ opacity: blink ? 1 : 0, transition: "opacity 0.05s" }}
    >
      |
    </span>
  )

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <ShaderAnimation />

      <div className="absolute inset-0 flex items-center justify-center">

        {/* ── welcome phase ── */}
        {phase === "welcome" && (
          <p className={base}>
            <span className="text-white">
              {WELCOME.slice(0, Math.min(welcomeLen, WELCOME_WHITE.length))}
            </span>
            <span className="text-yellow-400">
              {WELCOME.slice(
                WELCOME_WHITE.length,
                Math.max(welcomeLen, WELCOME_WHITE.length)
              )}
            </span>
            {cursor}
          </p>
        )}

        {/* ── delete phase ── */}
        {phase === "deleting" && (
          <p className={base}>
            <span className="text-white">
              {deletingText.slice(0, Math.min(deletingText.length, WELCOME_WHITE.length))}
            </span>
            {deletingText.length > WELCOME_WHITE.length && (
              <span className="text-yellow-400">
                {deletingText.slice(WELCOME_WHITE.length)}
              </span>
            )}
            {cursor}
          </p>
        )}

        {/* ── CTA phase ── */}
        {phase === "cta" && (
          <p className={base}>
            {/* white "GET " portion */}
            <span className="text-white">
              {ctaFull.slice(0, Math.min(ctaLen, CTA_WHITE.length))}
            </span>

            {/* orange "STARTED" portion — the word itself IS the button */}
            {ctaLen > CTA_WHITE.length && (
              <button
                onClick={() => router.push("/main")}
                className={[
                  "text-yellow-400 cursor-pointer",
                  "px-6 py-2 rounded-full -my-2",
                  "hover:bg-yellow-400 hover:text-white",
                  "transition-all duration-300",
                  base,
                ].join(" ")}
              >
                {ctaFull.slice(CTA_WHITE.length, ctaLen)}
              </button>
            )}

            {/* blinking cursor while still typing; hidden once done */}
            {ctaLen < ctaFull.length && cursor}
          </p>
        )}

      </div>
    </div>
  )
}
