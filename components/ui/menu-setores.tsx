"use client"

import { ComponentProps, useState } from "react"
import { useAgenda } from "@/contexts/agenda-context"
import { Setor } from "@/types"
import { Search } from "lucide-react"

import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"

type MenuSetoresProps = ComponentProps<"div"> & {
  setores: Setor[]
}

export default function MenuSetores({ setores, className }: MenuSetoresProps) {
  const { alterarSetor } = useAgenda()
  const [setoresFiltrados, setSetoresFiltrados] = useState(setores)

  function filtrarSetores(pesquisa: string) {
    setSetoresFiltrados(setores.filter(setor => setor.nome.toLowerCase().includes(pesquisa.toLowerCase())))
  }

  const groupedSetores = setoresFiltrados.reduce(
    (acc, setor) => {
      const firstLetter = setor.nome[0].toUpperCase()
      if (!acc[firstLetter]) {
        acc[firstLetter] = []
      }
      acc[firstLetter].push(setor)
      return acc
    },
    {} as { [key: string]: Setor[] },
  )

  // Ordena as chaves (letras iniciais) em ordem alfabética
  const sortedKeys = Object.keys(groupedSetores).sort()

  // Ordena os setores dentro de cada grupo em ordem alfabética
  sortedKeys.forEach(key => {
    groupedSetores[key].sort()
  })

  return (
    <div className={cn("flex h-screen flex-col gap-4 px-4", className)}>
      <div className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <form>
          <div className="relative">
            <Search className="absolute left-2 top-2.5 size-4 text-muted-foreground" />
            <Input placeholder="Pesquisar" className="pl-8" onChange={e => filtrarSetores(e.target.value)} />
          </div>
        </form>
      </div>
      <div className="box1 flex grow flex-col overflow-y-auto bg-white">
        {sortedKeys.map(letra => (
          <div key={letra} className="group">
            <div className="flex items-center">
              <div className="mr-2 h-8 w-1 bg-blue-400"></div>
              <h2 className="text-2xl font-bold text-blue-500">{letra}</h2>
            </div>
            <div className="flex flex-col gap-2 px-4 py-3">
              {groupedSetores[letra].map(setor => (
                <span
                  onClick={() => alterarSetor(setor)}
                  id={letra}
                  className="block w-full rounded-md p-2 transition delay-100 hover:cursor-pointer hover:bg-blue-500 hover:text-white"
                  key={setor.id}>
                  {setor.nome}
                </span>
              ))}
            </div>
          </div>
        ))}
        {setoresFiltrados.length === 0 && (
          <span className="text-center text-muted-foreground">Nenhum setor encontrado</span>
        )}
      </div>
    </div>
  )
}
