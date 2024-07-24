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
  const { setor: setorSelecionado, alterarSetor } = useAgenda()
  const [setoresFiltrados, setSetoresFiltrados] = useState(setores)

  function scrollToEnd() {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth",
        })
      }
    }

    handleResize()

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }

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

  const sortedKeys = Object.keys(groupedSetores).sort()

  sortedKeys.forEach(key => {
    groupedSetores[key].sort()
  })

  return (
    <div className={cn("flex flex-col gap-4 px-4 lg:h-screen", className)}>
      <div className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <form>
          <div className="relative">
            <Search className="absolute left-2 top-2.5 size-4 text-muted-foreground" />
            <Input placeholder="Pesquisar" className="pl-8" onChange={e => filtrarSetores(e.target.value)} />
          </div>
        </form>
      </div>
      <div className="lg:box1 flex flex-col bg-white lg:grow lg:overflow-y-auto">
        {sortedKeys.map(letra => (
          <div key={letra} className="group">
            <div className="sticky top-8 flex items-center">
              <div className="mr-2 h-8 w-1 bg-blue-400"></div>
              <h2 className="text-2xl font-bold text-oceanBlue-500">{letra}</h2>
            </div>
            <div className="flex flex-col gap-2 px-14 py-1">
              {groupedSetores[letra].map(setor => (
                <span
                  onClick={() => {
                    alterarSetor(setor)
                    scrollToEnd()
                  }}
                  id={letra}
                  className={cn("rounded-md p-2 hover:cursor-pointer hover:bg-oceanBlue-500 hover:text-white", {
                    "bg-oceanBlue-500 text-white": setor.id === setorSelecionado.id,
                  })}
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
