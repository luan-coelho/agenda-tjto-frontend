"use client"

import { useAgenda } from "@/contexts/agenda-context"

import { Badge } from "@/components/ui/badge"
import Linha from "@/components/ui/linha"
import { MenuLetrasIniciais } from "@/components/ui/menu-letras-iniciais"
import MenuSetores from "@/components/ui/menu-setores"
import { setores } from "@/app/data"

export default function AgendaPage() {
  const { setor } = useAgenda()

  return (
    <div className="flex items-start">
      <MenuSetores className="w-2/5" setores={setores} />
      <div className="flex w-3/5 flex-col gap-5">
        <MenuLetrasIniciais palavras={setores.map(setor => setor.nome)} />
        {setor.id != null && (
          <div className="mx-[40px]">
            <h3 className="text-2xl font-bold">{setor.nome}</h3>
            <div className="mt-5">
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
            <Linha />
            <div className="flex flex-col">
              <h4 className="text-xl font-semibold">Contatos</h4>
              <div className="mt-2">
                {setor.contatos.map(contato => (
                  <div key={contato.id} className="mt-2 flex gap-2">
                    <span>{contato.descricao}</span> - <span>{contato.valor}</span>
                    <Badge className="bg-aquaTeal-600">{contato.tipo}</Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
