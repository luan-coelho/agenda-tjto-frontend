"use client"

import { useAgenda } from "@/contexts/agenda-context"

import { MenuLetrasIniciais } from "@/components/ui/menu-letras-iniciais"
import MenuSetores from "@/components/ui/menu-setores"
import { columns } from "@/app/agenda/(components)/columns"
import { DataTable } from "@/app/agenda/(components)/data-table"
import { setores } from "@/app/data"

export default function AgendaPage() {
  const { setor } = useAgenda()

  return (
    <div className="flex items-start">
      <MenuSetores className="w-2/5" setores={setores} />
      <div className="flex flex-col gap-5">
        <MenuLetrasIniciais className="w-3/5" palavras={setores.map(setor => setor.nome)} />
        <div>
          <h3 className="text-2xl font-semibold">{setor.nome}</h3>
          <div>
            <div className="mt-2 flex gap-2">
              <span className="font-semibold">Responsável:</span>
              <span>{setor.responsavel}</span>
            </div>
            <div className="mt-2 flex gap-2">
              <span className="font-semibold">Endereço:</span>
              <span>{setor.endereco}</span>
            </div>
            <div className="mt-2 flex gap-2">
              <span className="font-semibold">Horário de Funcionamento:</span>
              <span>{setor.horarioFuncionamento}</span>
            </div>
          </div>
          <div className="container mx-auto py-10">
            {setor.id != null && <DataTable columns={columns} data={setor.contatos} />}
          </div>
        </div>
      </div>
    </div>
  )
}
