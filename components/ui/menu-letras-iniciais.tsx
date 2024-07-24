"use client"

import { ComponentProps } from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

type MenuLetrasIniciaisProps = ComponentProps<"div"> & {
  palavras: string[]
}

export function MenuLetrasIniciais({ palavras, className }: MenuLetrasIniciaisProps) {
  const letrasIniciais = Array.from(new Set(palavras.map(word => word[0].toUpperCase())))
  const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")

  return (
    <aside className={cn("sticky top-3 hidden rounded-md bg-white px-3 py-2 lg:flex", className)}>
      <div className="flex flex-wrap items-center justify-center gap-3">
        {alfabeto.map(letra => (
          <Button
            key={letra}
            disabled={!letrasIniciais.includes(letra)}
            className={`size-[30px] text-xl font-medium uppercase text-blue-600 ${
              letrasIniciais.includes(letra)
                ? "border border-oceanBlue-500 bg-oceanBlue-500 text-white hover:bg-blue-600"
                : "cursor-not-allowed border border-gray-300 bg-gray-200 text-gray-600"
            }`}>
            {letra}
          </Button>
        ))}
      </div>
    </aside>
  )
}
