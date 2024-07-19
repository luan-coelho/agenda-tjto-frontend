"use client"

import { Button } from "@/components/ui/button"

type MenuLetrasIniciaisProps = {
  palavras: string[]
}

export function MenuLetrasIniciais({ palavras }: MenuLetrasIniciaisProps) {
  const letrasIniciais = Array.from(new Set(palavras.map(word => word[0].toUpperCase())))
  const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")

  return (
    <aside className="rounded-md bg-white px-3 py-2">
      <div className="flex flex-wrap items-center justify-start gap-3">
        {alfabeto.map(letra => (
          <Button
            key={letra}
            disabled={!letrasIniciais.includes(letra)}
            className={`size-[40px] border-2 border-blue-600 font-medium uppercase text-blue-600 ${
              letrasIniciais.includes(letra)
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "cursor-not-allowed border border-gray-300 bg-gray-200 text-gray-500"
            }`}>
            {letra}
          </Button>
        ))}
      </div>
    </aside>
  )
}
