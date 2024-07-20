import Image from "next/image"

export default function Header() {
  return (
    <header className="bg-[url('https://www.tjto.jus.br/images/tema/bg_tjto.jpg')] px-[60px]">
      <div className="mx-[180px] my-[50px] flex items-center justify-around">
        <Image
          src="https://www.tjto.jus.br/images/tema/tjto_logo_horizontal_branco.svg"
          alt="Tribunal de Justiça do Tocantins"
          width={300}
          height={100}
        />
        <h1 className="text-4xl font-bold text-white">Agenda Telefônica</h1>
      </div>
    </header>
  )
}
