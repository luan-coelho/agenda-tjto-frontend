type MenuSetoresProps = {
  setores: string[]
}

export default function MenuSetores({ setores }: MenuSetoresProps) {
  return (
    <div>
      {setores.map(setor => (
        <div key={setor}>
          <span>{setor}</span>
        </div>
      ))}
    </div>
  )
}
