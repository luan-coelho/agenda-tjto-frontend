import { Horario } from "@/types"

import { Badge } from "@/components/ui/badge"

export interface HorarioFuncionamentoProps {
  horarioFuncionamento: Horario[]
}

export default function HorarioFuncionamento({ horarioFuncionamento }: HorarioFuncionamentoProps) {
  function exibirHoraFormatada(hora: Date): string {
    return hora.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })
  }

  return (
    <div className="flex items-center gap-2">
      {horarioFuncionamento.map((horario, index) => (
        <Badge key={index} className="flex flex-col items-center gap-1 bg-oceanBlue-600 hover:bg-oceanBlue-600">
          <span>{horario.diaSemana}</span>
          <span>
            {exibirHoraFormatada(horario.inicio)} às {exibirHoraFormatada(horario.fim)}
          </span>
        </Badge>
      ))}
    </div>
  )
}
