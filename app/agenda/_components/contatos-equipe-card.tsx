import { Equipe, TipoContato } from "@/types"

type ContatosEquipeCardProps = {
  equipes: Equipe[]
}

export default function ContatosEquipeCard({ equipes }: ContatosEquipeCardProps) {
  return (
    <div className="mt-2 space-y-2">
      {equipes.map(equipe => (
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
  )
}
