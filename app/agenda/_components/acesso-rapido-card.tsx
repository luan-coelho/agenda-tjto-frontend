import { Equipe } from "@/types"

import ContatosEquipeCard from "@/app/agenda/_components/contatos-equipe-card"

type AcessoRapidoCardProps = {
  equipes: Equipe[]
}

export default function AcessoRapidoCard({ equipes }: AcessoRapidoCardProps) {
  return (
    <div className="mt-8 lg:mx-[40px] lg:mt-2">
      <h3 className="text-center text-2xl font-bold lg:text-start">Acesso rápido</h3>
      <div className="mt-2">
        <ContatosEquipeCard equipes={equipes} />
      </div>
    </div>
  )
}
