import Image from "next/image"

export default function Header() {
  return (
    <header className="bg-[url('https://www.tjto.jus.br/images/tema/bg_tjto.jpg')] p-[10px] md:py-0 lg:px-[20px]">
      <div className="m-[10px] flex items-center justify-around md:my-[50px] lg:mx-[180px]">
        <Image
          className="md:h-[100px] md:w-[300px]"
          src="https://www.tjto.jus.br/images/tema/tjto_logo_horizontal_branco.svg"
          alt="Tribunal de Justiça do Tocantins"
          width={100}
          height={100}
        />
        <h1 className="text-right text-xl font-bold text-white md:text-4xl">Agenda Telefônica</h1>
      </div>
    </header>
  )
}
