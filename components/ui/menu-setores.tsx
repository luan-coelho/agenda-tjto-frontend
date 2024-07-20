"use client"

import { ComponentProps, useState } from "react"
import { Search } from "lucide-react"

import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"

type MenuSetoresProps = ComponentProps<"div"> & {
  setores: string[]
}

export default function MenuSetores({ setores, className }: MenuSetoresProps) {
  const [setoresFiltrados, setSetoresFiltrados] = useState(setores)

  function filtrarSetores(pesquisa: string) {
    setSetoresFiltrados(setores.filter(setor => setor.toLowerCase().includes(pesquisa.toLowerCase())))
  }

  return (
    <div className={cn("flex flex-col gap-4 px-4", className)}>
      <div className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <form>
          <div className="relative">
            <Search className="absolute left-2 top-2.5 size-4 text-muted-foreground" />
            <Input placeholder="Pesquisar" className="pl-8" onChange={e => filtrarSetores(e.target.value)} />
          </div>
        </form>
      </div>
      <div className="flex flex-1 flex-col gap-3 overflow-y-auto bg-white">
        {setoresFiltrados.map(setor => (
          <div key={setor}>
            <span>{setor}</span>
          </div>
        ))}
        {setoresFiltrados.length === 0 && (
          <span className="text-center text-muted-foreground">Nenhum setor encontrado</span>
        )}
      </div>
    </div>
  )
}
