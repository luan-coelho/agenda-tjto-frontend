import { Contato, criarHora, DiaSemana, Equipe, Setor, TipoContato } from "@/types"

export const setorAcessoRapido = {
  id: 1,
  nome: "Gabinete da Presidência",
  responsavel: "Presidente da República",
  endereco: "Endereço do Gabinete da Presidência",
  equipes: [
    {
      id: 1,
      descricao: "Gabinete da Presidência",
      contatos: [
        {
          id: 1,
          tipo: TipoContato.TELEFONE,
          valor: "(63) 3218-4300 / 4401",
        },
        {
          id: 2,
          tipo: TipoContato.TELEFONE,
          valor: "(63) 3218-4304 / 4409",
        },
        {
          id: 3,
          tipo: TipoContato.TELEFONE,
          valor: "(63) 3218-4304 / 4409",
        },
      ] as Contato[],
    },
  ] as Equipe[],
} as Setor

export const setores: Setor[] = [
  {
    id: 1,
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
        id: 1,
        descricao: "ASMETO(Associação dos Magistrados do Tocantins)",
        contatos: [
          {
            id: 1,
            tipo: TipoContato.TELEFONE,
            valor: "(63) 3223-9300",
          },
        ],
      },
    ],
  },
  {
    id: 2,
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
        id: 2,
        descricao: "Assessoria Militar - Gabinete",
        contatos: [
          {
            id: 2,
            tipo: "E-mail",
            valor: "asmil@tjto.jus.br",
          },
          {
            id: 3,
            tipo: "Telefone",
            valor: "(63) 3218-4364",
          },
        ],
      },
      {
        id: 3,
        descricao: "Assessoria Militar Contratos",
        contatos: [
          {
            id: 4,
            tipo: "Telefone",
            valor: "(63) 3218-4525",
          },
        ],
      },
      {
        id: 4,
        descricao: "Guarita",
        contatos: [
          {
            id: 5,
            tipo: "Telefone",
            valor: "(63) 3218-4476",
          },
        ],
      },
      {
        id: 5,
        descricao: "Sala de Monitoramento",
        contatos: [],
      },
    ],
  },
] as Setor[]
