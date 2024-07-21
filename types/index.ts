// Interface para o TipoContato
export enum TipoContato {
  TELEFONE = "Telefone",
  EMAIL = "Email",
  FAX = "Fax",
  OUTRO = "Outro",
}

// Interface para Contato
export interface Contato {
  id: number
  tipo: TipoContato
  descricao: string
  valor: string
}

// Interface para Setor
export interface Setor {
  id: number
  nome: string
  responsavel: string
  endereco: string
  horarioFuncionamento: string // Formato ISO 8601, por exemplo "08:00:00"
  contatos: Contato[]
}
