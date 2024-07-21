"use client"

import { createContext, ReactNode, useContext, useState } from "react"
import { Setor } from "@/types"

interface AgendaContextData {
  setor: Setor
  alterarSetor: (setor: Setor) => void
}

const AgendaContext = createContext<AgendaContextData | undefined>(undefined)

const AgendaProvider = ({ children }: { children: ReactNode }) => {
  const [setor, setSetor] = useState<Setor>({} as Setor)

  function alterarSetor(setor: Setor) {
    setSetor(setor)
  }

  return <AgendaContext.Provider value={{ setor, alterarSetor }}>{children}</AgendaContext.Provider>
}

const useAgenda = (): AgendaContextData => {
  const context = useContext(AgendaContext)
  if (context === undefined) {
    throw new Error("useAgenda must be used within a AgendaProvider")
  }
  return context
}

export { AgendaProvider, useAgenda }
