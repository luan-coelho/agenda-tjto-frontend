export enum TipoContato {
  TELEFONE = "Telefone",
  EMAIL = "Email",
  FAX = "Fax",
  OUTRO = "Outro",
}

export interface Contato {
  id: string
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
  id: string
  descricao: string
  contatos: Contato[]
}

export interface Setor {
  id: string
  nome: string
  responsavel: string
  endereco: string
  horarioFuncionamento: Horario[]
  equipes: Equipe[]
}
