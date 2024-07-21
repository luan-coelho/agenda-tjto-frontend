// Interface para o TipoContato
export enum TipoContato {
  TELEFONE = "TELEFONE",
  EMAIL = "EMAIL",
  FAX = "FAX",
  OUTRO = "OUTRO",
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
