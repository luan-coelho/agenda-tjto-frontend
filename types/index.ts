export enum TipoContato {
  TELEFONE = "Telefone",
  EMAIL = "Email",
  FAX = "Fax",
  OUTRO = "Outro",
}

export interface Contato {
  id: number
  tipo: TipoContato
  valor: string
}

export interface Horario {
  diaSemana: DiaSemana
  inicio: Date
  fim: Date
}

export enum DiaSemana {
  Segunda = "Segunda",
  Terca = "Terça",
  Quarta = "Quarta",
  Quinta = "Quinta",
  Sexta = "Sexta",
  Sabado = "Sábado",
  Domingo = "Domingo",
}

export interface Equipe {
  id: number
  descricao: string
  contatos: Contato[]
}

export interface Setor {
  id: number
  nome: string
  responsavel: string
  endereco: string
  horarioFuncionamento: Horario[]
  equipes: Equipe[]
}
