import { cn } from "@/lib/utils"

type LetterProps = {
  letter: string
  onClick: (letter: string) => void
}

export default function Letter({ letter, onClick }: LetterProps) {
  return (
    <div className={cn("flex flex-wrap gap-3 font-medium uppercase text-blue-600")}>
      <button className="initial-letter-menu__letter" onClick={() => onClick(letter)}>
        {letter}
      </button>
    </div>
  )
}
