"use client"

import { Button } from "@/components/ui/button"

type InitialLetterMenuProps = {
  words: string[]
}

export function Index({ words }: InitialLetterMenuProps) {
  const uniqueInitials = Array.from(new Set(words.map(word => word[0].toUpperCase())))

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")

  return (
    <aside className="rounded-md bg-white px-3 py-2">
      <div className="flex flex-wrap items-center justify-center gap-3">
        {letters.map(letter => (
          <Button
            key={letter}
            disabled={!uniqueInitials.includes(letter)}
            className={`h-[30px] w-[30px] border-2 border-blue-600 font-medium uppercase text-blue-600 ${
              uniqueInitials.includes(letter)
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "cursor-not-allowed border border-gray-300 bg-gray-200 text-gray-500"
            }`}>
            {letter}
          </Button>
        ))}
      </div>
    </aside>
  )
}
