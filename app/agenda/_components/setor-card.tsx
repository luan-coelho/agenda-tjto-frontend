import { Setor, TipoContato } from "@/types"

import Line from "@/components/ui/line"
import HorarioFuncionamento from "@/app/agenda/_components/horario-funcionamento"

type SetorCardProps = {
  setor: Setor
}

export default function SetorCard({ setor }: SetorCardProps) {
  return (
    <div className="mt-8 lg:mx-[40px] lg:mt-2">
      <Line className="lg:hidden" />
      <h3 className="text-center text-2xl font-bold lg:text-start">{setor.nome}</h3>
      <div className="mt-5 space-y-2">
        <div className="flex gap-2">
          <span className="font-semibold">Responsável:</span>
          <span>{setor.responsavel}</span>
        </div>
        <div className="flex gap-2">
          <span className="text-justify font-semibold">Endereço:</span>
          <span>{setor.endereco}</span>
        </div>
        <div className="space-y-2">
          <span className="font-semibold">Horário de Funcionamento</span>
          <HorarioFuncionamento horarioFuncionamento={setor.horarioFuncionamento} />
        </div>
      </div>
      <Line />
      <div className="flex flex-col">
        <h4 className="text-xl font-semibold">Contatos</h4>
        <div className="mt-2 space-y-2">
          {setor.equipes.map(equipe => (
            <div
              key={equipe.id}
              className="flex flex-col gap-2 rounded-md border border-gray-200 px-4 py-2 lg:justify-between">
              <span className="font-semibold">{equipe.descricao}</span>
              {equipe.contatos.map(contato => (
                <div key={contato.id} className="flex items-center justify-between">
                  {contato.tipo === TipoContato.EMAIL && <a href={`mailto:${contato.valor}`}>{contato.valor}</a>}
                  {contato.tipo === TipoContato.TELEFONE && <a href={`tel:${contato.valor}`}>{contato.valor}</a>}
                  <div className="rounded-full bg-aquaTeal-600 px-2 py-1 text-xs font-bold text-white lg:static lg:mr-0 lg:mt-0">
                    {contato.tipo}
                  </div>
                </div>
              ))}
              {equipe.contatos.length === 0 && <span className="text-muted-foreground">Sem contatos no momento</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
