"use client"

import { useAgenda } from "@/contexts/agenda-context"

import Linha from "@/components/ui/linha"
import { MenuLetrasIniciais } from "@/components/ui/menu-letras-iniciais"
import MenuSetores from "@/components/ui/menu-setores"
import { setores } from "@/app/data"

export default function AgendaPage() {
  const { setor } = useAgenda()

  return (
    <div className="lg:flex lg:items-start">
      <MenuSetores className="lg:w-2/5" setores={setores} />
      <div className="sticky top-3 mx-10 flex-col gap-5 lg:flex lg:w-3/5">
        <MenuLetrasIniciais palavras={setores.map(setor => setor.nome)} />
        {setor.id != null && (
          <div className="mt-8 lg:mx-[40px] lg:mt-2">
            <Linha className="lg:hidden" />
            <h3 className="text-center text-2xl font-bold lg:text-start">{setor.nome}</h3>
            <div className="mt-5">
              <div className="mt-2 flex gap-2">
                <span className="font-semibold">Responsável:</span>
                <span>{setor.responsavel}</span>
              </div>
              <div className="mt-2 flex gap-2">
                <span className="text-justify font-semibold">Endereço:</span>
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
                  <div
                    key={contato.id}
                    className="relative mt-2 flex flex-col gap-2 rounded-md border border-gray-200 px-4 py-2 lg:static lg:flex-row lg:justify-between">
                    <span className="font-semibold">{contato.descricao}</span>
                    {contato.tipo === "Email" && <a href={`mailto:${contato.valor}`}>{contato.valor}</a>}
                    {contato.tipo === "Telefone" && <a href={`tel:${contato.valor}`}>{contato.valor}</a>}
                    <div className="absolute right-0 top-0 mr-2 mt-2 rounded-full bg-oceanBlue-500 px-2 py-1 text-xs font-bold text-white lg:static lg:mr-0 lg:mt-0">
                      {contato.tipo}
                    </div>
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
