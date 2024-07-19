"use client"

import { useState } from "react"
import { Search } from "lucide-react"

import { Input } from "@/components/ui/input"

type MenuSetoresProps = {
  setores: string[]
}

export default function MenuSetores({ setores }: MenuSetoresProps) {
  const [setoresFiltrados, setSetoresFiltrados] = useState(setores)

  function filtrarSetores(pesquisa: string) {
    setSetoresFiltrados(setores.filter(setor => setor.toLowerCase().includes(pesquisa.toLowerCase())))
  }

  return (
    <div className="flex flex-col gap-4 px-4">
      <div className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <form>
          <div className="relative">
            <Search className="absolute left-2 top-2.5 size-4 text-muted-foreground" />
            <Input placeholder="Pesquisar" className="pl-8" onChange={e => filtrarSetores(e.target.value)} />
          </div>
        </form>
      </div>
      <div>
        {setoresFiltrados.map(setor => (
          <div key={setor}>
            <span>{setor}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
