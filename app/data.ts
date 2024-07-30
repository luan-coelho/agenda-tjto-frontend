import { Contato, DiaSemana, Equipe, Setor, TipoContato } from "@/types"
import { v4 as uuidv4 } from "uuid"

export function criarHora(hora: string): Date {
  const [horas, minutos] = hora.split(":").map(Number)
  const agora = new Date()
  agora.setHours(horas, minutos, 0, 0)
  return agora
}

export const equipesSetorAcessoRapido = [
  {
    id: uuidv4(),
    descricao: "Tribunal - Geral",
    contatos: [
      {
        id: uuidv4(),
        tipo: TipoContato.TELEFONE,
        valor: "(63) 3218-4300 / 4401",
      },
    ] as Contato[],
  },
  {
    id: uuidv4(),
    descricao: "Gab. da Presidência - Recepção",
    contatos: [
      {
        id: uuidv4(),
        tipo: TipoContato.TELEFONE,
        valor: "(63) 3218-4304 / 4409",
      },
    ] as Contato[],
  },
  {
    id: uuidv4(),
    descricao: "CGJUS - Chefe de Gabinete",
    contatos: [
      {
        id: uuidv4(),
        tipo: TipoContato.EMAIL,
        valor: "corregedoria@tjto.jus.br",
      },
      {
        id: uuidv4(),
        tipo: TipoContato.TELEFONE,
        valor: "(63) 3218-4291 / (63) 3901-9091",
      },
    ] as Contato[],
  },
  {
    id: uuidv4(),
    descricao: "ESMAT- Recepção",
    contatos: [
      {
        id: uuidv4(),
        tipo: TipoContato.TELEFONE,
        valor: "(63) 3218-4229",
      },
    ] as Contato[],
  },
  {
    id: uuidv4(),
    descricao: "Suporte E-Proc",
    contatos: [
      {
        id: uuidv4(),
        tipo: TipoContato.EMAIL,
        valor: "processoeletronico@tjto.jus.br",
      },
      {
        id: uuidv4(),
        tipo: TipoContato.TELEFONE,
        valor: "(63) 3218-4248/ 4388",
      },
    ] as Contato[],
  },
] as Equipe[]

export const setores: Setor[] = [
  {
    id: uuidv4(),
    nome: "ASMETO (Associação dos Magistrados do Tocantins)",
    responsavel: "Juíza Odete Batista Dias Almeida",
    endereco:
      "Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-013",
    horarioFuncionamento: [
      { diaSemana: DiaSemana.Segunda, inicio: criarHora("12:00"), fim: criarHora("18:00") },
      { diaSemana: DiaSemana.Terca, inicio: criarHora("12:00"), fim: criarHora("18:00") },
      { diaSemana: DiaSemana.Quarta, inicio: criarHora("12:00"), fim: criarHora("18:00") },
      { diaSemana: DiaSemana.Quinta, inicio: criarHora("12:00"), fim: criarHora("18:00") },
      { diaSemana: DiaSemana.Sexta, inicio: criarHora("12:00"), fim: criarHora("18:00") },
    ],
    equipes: [
      {
        id: uuidv4(),
        descricao: "ASMETO(Associação dos Magistrados do Tocantins)",
        contatos: [
          {
            id: uuidv4(),
            tipo: TipoContato.TELEFONE,
            valor: "(63) 3223-9300",
          },
        ],
      },
    ],
  },
  {
    id: uuidv4(),
    nome: "Assessoria Militar",
    responsavel: "Coronel Jaizon Veras Barbosa",
    endereco:
      "Palácio da Justiça Rio Tocantins, Praça dos Girassóis, s/nº Centro - Palmas - Tocantins - Cep: 77015-007",
    horarioFuncionamento: [
      { diaSemana: DiaSemana.Segunda, inicio: criarHora("12:00"), fim: criarHora("18:00") },
      { diaSemana: DiaSemana.Terca, inicio: criarHora("12:00"), fim: criarHora("18:00") },
      { diaSemana: DiaSemana.Quarta, inicio: criarHora("12:00"), fim: criarHora("18:00") },
      { diaSemana: DiaSemana.Quinta, inicio: criarHora("12:00"), fim: criarHora("18:00") },
      { diaSemana: DiaSemana.Sexta, inicio: criarHora("12:00"), fim: criarHora("18:00") },
    ],
    equipes: [
      {
        id: uuidv4(),
        descricao: "Assessoria Militar - Gabinete",
        contatos: [
          {
            id: uuidv4(),
            tipo: TipoContato.EMAIL,
            valor: "asmil@tjto.jus.br",
          },
          {
            id: uuidv4(),
            tipo: TipoContato.TELEFONE,
            valor: "(63) 3218-4364",
          },
        ],
      },
      {
        id: uuidv4(),
        descricao: "Assessoria Militar Contratos",
        contatos: [
          {
            id: uuidv4(),
            tipo: TipoContato.TELEFONE,
            valor: "(63) 3218-4525",
          },
        ],
      },
      {
        id: uuidv4(),
        descricao: "Guarita",
        contatos: [
          {
            id: uuidv4(),
            tipo: TipoContato.TELEFONE,
            valor: "(63) 3218-4476",
          },
        ],
      },
      {
        id: uuidv4(),
        descricao: "Sala de Monitoramento",
        contatos: [
          {
            id: uuidv4(),
            tipo: TipoContato.TELEFONE,
            valor: "(63) 3218-4402",
          },
        ],
      },
    ],
  },
] as Setor[]
