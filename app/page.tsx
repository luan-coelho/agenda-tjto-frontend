import { MenuLetrasIniciais } from "@/components/ui/menu-letras-iniciais"
import MenuSetores from "@/components/ui/menu-setores"
import { setores } from "@/app/data"

export default function Home() {
  return (
    <div className="flex items-start">
      <MenuSetores setores={setores} />
      <div className="sticky top-0 flex items-center justify-center">
        <MenuLetrasIniciais palavras={setores} />
      </div>
    </div>
  )
}
