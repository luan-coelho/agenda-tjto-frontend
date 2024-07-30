import { Setor } from "@/types"

import Line from "@/components/ui/line"

type AcessoRapidoCardProps = {
  setor: Setor
}

export default function AcessoRapidoCard({ setor }: AcessoRapidoCardProps) {
  return (
    <div className="mt-8 lg:mx-[40px] lg:mt-2">
      <h3 className="text-center text-2xl font-bold lg:text-start">Acesso rápido</h3>
      <Line />
      <div className="flex flex-col">
        <h4 className="text-xl font-semibold">Contatos</h4>
        <div className="mt-2">
          {setor.equipes.map(equipe => (
            <div
              key={equipe.id}
              className="relative mt-2 flex flex-col gap-2 rounded-md border border-gray-200 px-4 py-2 lg:static lg:flex-row lg:justify-between">
              <span className="font-semibold">{equipe.descricao}</span>
              {equipe.contatos.map(contato => (
                <>
                  {contato.tipo === "Email" && <a href={`mailto:${contato.valor}`}>{contato.valor}</a>}
                  {contato.tipo === "Telefone" && <a href={`tel:${contato.valor}`}>{contato.valor}</a>}
                  <div className="absolute right-0 top-0 mr-2 mt-2 rounded-full bg-oceanBlue-500 px-2 py-1 text-xs font-bold text-white lg:static lg:mr-0 lg:mt-0">
                    {contato.tipo}
                  </div>
                </>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
