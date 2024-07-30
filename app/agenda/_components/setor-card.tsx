import { Setor } from "@/types"

import Line from "@/components/ui/line"
import ContatosEquipeCard from "@/app/agenda/_components/contatos-equipe-card"
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
        <ContatosEquipeCard equipes={setor.equipes} />
      </div>
    </div>
  )
}
