"use client"

import * as React from "react"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import type { CSSProperties } from "react"

const COLORS = ["#48d55d", "#016d32", "#0d4429"]

interface CellData {
  color: string
  delay: string
  flash: boolean
}

export const CommitsGrid = ({ text }: { text: string }) => {
  const cleanString = (str: string): string => {
    const upper = str.toUpperCase().normalize("NFD").replace(/[̀-ͯ]/g, "")
    const allowed = Object.keys(letterPatterns)
    return upper.split("").filter((c) => allowed.includes(c)).join("")
  }

  const generateHighlightedCells = (text: string) => {
    const cleaned = cleanString(text)
    const width = Math.max(cleaned.length * 6, 6) + 1
    let pos = 1
    const highlighted: number[] = []

    cleaned
      .toUpperCase()
      .split("")
      .forEach((char) => {
        if (letterPatterns[char]) {
          highlighted.push(
            ...letterPatterns[char].map((p) => {
              const row = Math.floor(p / 50)
              const col = p % 50
              return (row + 1) * width + col + pos
            })
          )
        }
        pos += 6
      })

    return { cells: highlighted, width, height: 9 }
  }

  const { cells: highlightedCells, width: gridWidth, height: gridHeight } =
    generateHighlightedCells(text)

  const total = gridWidth * gridHeight

  // null = not yet mounted; keeps server/client HTML identical until useEffect fires
  const [cellData, setCellData] = useState<CellData[] | null>(null)

  useEffect(() => {
    setCellData(
      Array.from({ length: total }, () => ({
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        delay: `${(Math.random() * 0.6).toFixed(1)}s`,
        flash: Math.random() < 0.3,
      }))
    )
  }, [total])

  return (
    <section
      className="w-full bg-zinc-950 border border-zinc-800 grid p-1.5 sm:p-3 gap-0.5 sm:gap-1 rounded-[10px] sm:rounded-[15px]"
      style={{
        gridTemplateColumns: `repeat(${gridWidth}, minmax(0, 1fr))`,
        gridTemplateRows:    `repeat(${gridHeight}, minmax(0, 1fr))`,
      }}
    >
      {Array.from({ length: total }).map((_, index) => {
        const isHighlighted = highlightedCells.includes(index)
        const data          = cellData?.[index]
        const shouldFlash   = !!data?.flash && !isHighlighted

        return (
          <div
            key={index}
            className={cn(
              "border border-zinc-800 h-full w-full aspect-square rounded-[4px] sm:rounded-[3px]",
              isHighlighted ? "animate-highlight" : "",
              shouldFlash   ? "animate-flash"     : "",
              !isHighlighted && !shouldFlash ? "bg-zinc-950" : ""
            )}
            style={
              data
                ? ({ animationDelay: data.delay, "--highlight": data.color } as CSSProperties)
                : undefined
            }
          />
        )
      })}
    </section>
  )
}

const letterPatterns: { [key: string]: number[] } = {
  A: [1,2,3,50,100,150,200,250,300,54,104,154,204,254,304,151,152,153],
  B: [0,1,2,3,4,50,100,150,151,200,250,300,301,302,303,304,54,104,152,153,204,254,303],
  C: [0,1,2,3,4,50,100,150,200,250,300,301,302,303,304],
  D: [0,1,2,3,50,100,150,200,250,300,301,302,54,104,154,204,254,303],
  E: [0,1,2,3,4,50,100,150,200,250,300,301,302,303,304,151,152],
  F: [0,1,2,3,4,50,100,150,200,250,300,151,152,153],
  G: [0,1,2,3,4,50,100,150,200,250,300,301,302,303,153,204,154,304,254],
  H: [0,50,100,150,200,250,300,151,152,153,4,54,104,154,204,254,304],
  I: [0,1,2,3,4,52,102,152,202,252,300,301,302,303,304],
  J: [0,1,2,3,4,52,102,152,202,250,252,302,300,301],
  K: [0,4,50,100,150,200,250,300,151,152,103,54,203,254,304],
  L: [0,50,100,150,200,250,300,301,302,303,304],
  M: [0,50,100,150,200,250,300,51,102,53,4,54,104,154,204,254,304],
  N: [0,50,100,150,200,250,300,51,102,153,204,4,54,104,154,204,254,304],
  O: [1,2,3,50,100,150,200,250,301,302,303,54,104,154,204,254],
  P: [0,50,100,150,200,250,300,1,2,3,54,104,151,152,153],
  Q: [1,2,3,50,100,150,200,250,301,302,54,104,154,204,202,253,304],
  R: [0,50,100,150,200,250,300,1,2,3,54,104,151,152,153,204,254,304],
  S: [1,2,3,4,50,100,151,152,153,204,254,300,301,302,303],
  T: [0,1,2,3,4,52,102,152,202,252,302],
  U: [0,50,100,150,200,250,301,302,303,4,54,104,154,204,254],
  V: [0,50,100,150,200,251,302,4,54,104,154,204,253],
  W: [0,50,100,150,200,250,301,152,202,252,4,54,104,154,204,254,303],
  X: [0,50,203,254,304,4,54,152,101,103,201,250,300],
  Y: [0,50,101,152,202,252,302,4,54,103],
  Z: [0,1,2,3,4,54,103,152,201,250,300,301,302,303,304],
  "0": [1,2,3,50,100,150,200,250,301,302,303,54,104,154,204,254],
  "1": [1,52,102,152,202,252,302,0,2,300,301,302,303,304],
  "2": [0,1,2,3,54,104,152,153,201,250,300,301,302,303,304],
  "3": [0,1,2,3,54,104,152,153,204,254,300,301,302,303],
  "4": [0,50,100,150,4,54,104,151,152,153,154,204,254,304],
  "5": [0,1,2,3,4,50,100,151,152,153,204,254,300,301,302,303],
  "6": [1,2,3,50,100,150,151,152,153,200,250,301,302,204,254,303],
  "7": [0,1,2,3,4,54,103,152,201,250,300],
  "8": [1,2,3,50,100,151,152,153,200,250,301,302,303,54,104,204,254],
  "9": [1,2,3,50,100,151,152,153,154,204,254,304,54,104],
  " ": [],
}
