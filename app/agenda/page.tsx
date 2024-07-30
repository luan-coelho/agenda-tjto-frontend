"use client"

import { useAgenda } from "@/contexts/agenda-context"

import AcessoRapidoCard from "@/app/agenda/_components/acesso-rapido-card"
import { MenuLetrasIniciais } from "@/app/agenda/_components/menu-letras-iniciais"
import MenuSetores from "@/app/agenda/_components/menu-setores"
import SetorCard from "@/app/agenda/_components/setor-card"
import { equipesSetorAcessoRapido, setores } from "@/app/data"

export default function AgendaPage() {
  const { setor } = useAgenda()

  return (
    <div className="lg:flex lg:items-start">
      <title>Agenda Telefônica</title>
      <MenuSetores className="lg:w-2/5" setores={setores} />
      <div className="sticky top-3 mx-10 flex-col gap-5 lg:flex lg:w-3/5">
        <MenuLetrasIniciais palavras={setores.map(setor => setor.nome)} />
        {setor.id != undefined ? <SetorCard setor={setor} /> : <AcessoRapidoCard equipes={equipesSetorAcessoRapido} />}
      </div>
    </div>
  )
}
