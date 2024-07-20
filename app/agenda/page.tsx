import { MenuLetrasIniciais } from "@/components/ui/menu-letras-iniciais"
import MenuSetores from "@/components/ui/menu-setores"
import { setores } from "@/app/data"

export default function AgendaPage() {
  return (
    <div className="flex items-start">
      <MenuSetores className="w-2/5" setores={setores} />
      <MenuLetrasIniciais className="w-3/5" palavras={setores} />
    </div>
  )
}
