import { Setor, TipoContato } from "@/types"

export const setores: Setor[] = [
  {
    id: 1,
    nome: "Gabinete da Presidência",
    responsavel: "Presidente da República",
    endereco: "Endereço do Gabinete da Presidência",
    horarioFuncionamento: "09:00:00",
    contatos: [
      {
        id: 1,
        tipo: TipoContato.TELEFONE,
        descricao: "Telefone principal",
        valor: "+55 61 1234-5678",
      },
      {
        id: 2,
        tipo: TipoContato.EMAIL,
        descricao: "Email de contato",
        valor: "contato@gabinetepresidencia.gov.br",
      },
      {
        id: 333,
        tipo: TipoContato.EMAIL,
        descricao: "Email de contato",
        valor: "contato@gabinetepresidencia.gov.br",
      },
    ],
  },
  {
    id: 2,
    nome: "Gabinete Des. Adolfo Amaro Mendes",
    responsavel: "Des. Adolfo Amaro Mendes",
    endereco: "Endereço do Gabinete Des. Adolfo Amaro Mendes",
    horarioFuncionamento: "09:00:00",
    contatos: [
      {
        id: 3,
        tipo: TipoContato.EMAIL,
        descricao: "Email de contato",
        valor: "contato@adolfomendes.gov.br",
      },
    ],
  },
  {
    id: 3,
    nome: "Gabinete Des. Eurípedes Lamounier",
    responsavel: "Des. Eurípedes Lamounier",
    endereco: "Endereço do Gabinete Des. Eurípedes Lamounier",
    horarioFuncionamento: "09:00:00",
    contatos: [
      {
        id: 4,
        tipo: TipoContato.TELEFONE,
        descricao: "Telefone de contato",
        valor: "+55 61 2345-6789",
      },
    ],
  },
  {
    id: 4,
    nome: "Gabinete Des. Helvécio de Brito Maia Neto",
    responsavel: "Des. Helvécio de Brito Maia Neto",
    endereco: "Endereço do Gabinete Des. Helvécio de Brito Maia Neto",
    horarioFuncionamento: "09:00:00",
    contatos: [
      {
        id: 5,
        tipo: TipoContato.EMAIL,
        descricao: "Email de contato",
        valor: "contato@helvecio.gov.br",
      },
    ],
  },
  {
    id: 5,
    nome: "ASMETO (Associação dos Magistrados do Tocantins)",
    responsavel: "Presidente da ASMETO",
    endereco: "Endereço da ASMETO",
    horarioFuncionamento: "08:00:00",
    contatos: [
      {
        id: 6,
        tipo: TipoContato.TELEFONE,
        descricao: "Telefone de contato",
        valor: "+55 63 1234-5678",
      },
    ],
  },
  {
    id: 6,
    nome: "Assessoria Militar",
    responsavel: "Chefe da Assessoria Militar",
    endereco: "Endereço da Assessoria Militar",
    horarioFuncionamento: "08:00:00",
    contatos: [
      {
        id: 7,
        tipo: TipoContato.EMAIL,
        descricao: "Email de contato",
        valor: "contato@assessoria.militar.br",
      },
    ],
  },
  {
    id: 7,
    nome: "Diretoria de Tecnologia de Informação",
    responsavel: "Diretor de TI",
    endereco: "Endereço da Diretoria de TI",
    horarioFuncionamento: "08:00:00",
    contatos: [
      {
        id: 8,
        tipo: TipoContato.EMAIL,
        descricao: "Email de suporte",
        valor: "suporte@ti.gov.br",
      },
    ],
  },
  {
    id: 8,
    nome: "Diretoria do Centro de Comunicação Social",
    responsavel: "Diretor de Comunicação Social",
    endereco: "Endereço da Diretoria do Centro de Comunicação Social",
    horarioFuncionamento: "08:00:00",
    contatos: [
      {
        id: 9,
        tipo: TipoContato.TELEFONE,
        descricao: "Telefone de contato",
        valor: "+55 61 3456-7890",
      },
    ],
  },
  {
    id: 9,
    nome: "Diretoria Financeira",
    responsavel: "Diretor Financeiro",
    endereco: "Endereço da Diretoria Financeira",
    horarioFuncionamento: "08:00:00",
    contatos: [
      {
        id: 10,
        tipo: TipoContato.EMAIL,
        descricao: "Email de contato",
        valor: "financeiro@diretoria.gov.br",
      },
    ],
  },
  {
    id: 10,
    nome: "Diretoria Geral",
    responsavel: "Diretor Geral",
    endereco: "Endereço da Diretoria Geral",
    horarioFuncionamento: "08:00:00",
    contatos: [
      {
        id: 11,
        tipo: TipoContato.TELEFONE,
        descricao: "Telefone de contato",
        valor: "+55 61 4567-8901",
      },
    ],
  },
  {
    id: 11,
    nome: "Diretoria Judiciária",
    responsavel: "Diretor Judiciário",
    endereco: "Endereço da Diretoria Judiciária",
    horarioFuncionamento: "08:00:00",
    contatos: [
      {
        id: 12,
        tipo: TipoContato.EMAIL,
        descricao: "Email de contato",
        valor: "judiciario@diretoria.gov.br",
      },
    ],
  },
  {
    id: 12,
    nome: "Divisão de Contrainteligência do NIS",
    responsavel: "Chefe da Divisão de Contrainteligência",
    endereco: "Endereço da Divisão de Contrainteligência do NIS",
    horarioFuncionamento: "08:00:00",
    contatos: [
      {
        id: 13,
        tipo: TipoContato.TELEFONE,
        descricao: "Telefone de contato",
        valor: "+55 61 5678-9012",
      },
    ],
  },
  {
    id: 13,
    nome: "Divisão de Serviços Gerais do Tribunal de Justiça",
    responsavel: "Chefe da Divisão de Serviços Gerais",
    endereco: "Endereço da Divisão de Serviços Gerais",
    horarioFuncionamento: "08:00:00",
    contatos: [
      {
        id: 14,
        tipo: TipoContato.EMAIL,
        descricao: "Email de contato",
        valor: "servicosgerais@tj.gov.br",
      },
    ],
  },
  {
    id: 14,
    nome: "Escola Superior da Magistratura Tocantinense",
    responsavel: "Diretor da Escola Superior",
    endereco: "Endereço da Escola Superior da Magistratura",
    horarioFuncionamento: "08:00:00",
    contatos: [
      {
        id: 15,
        tipo: TipoContato.TELEFONE,
        descricao: "Telefone de contato",
        valor: "+55 63 6789-0123",
      },
    ],
  },
  {
    id: 15,
    nome: "ASTJ (Associação dos Servidores do Tribunal de Justiça)",
    responsavel: "Presidente da ASTJ",
    endereco: "Endereço da ASTJ",
    horarioFuncionamento: "08:00:00",
    contatos: [
      {
        id: 16,
        tipo: TipoContato.EMAIL,
        descricao: "Email de contato",
        valor: "contato@astj.org.br",
      },
    ],
  },
  {
    id: 16,
    nome: "Comissão de Jurisprudência e Documentação",
    responsavel: "Chefe da Comissão de Jurisprudência",
    endereco: "Endereço da Comissão de Jurisprudência",
    horarioFuncionamento: "08:00:00",
    contatos: [
      {
        id: 17,
        tipo: TipoContato.TELEFONE,
        descricao: "Telefone de contato",
        valor: "+55 61 7890-1234",
      },
    ],
  },
  {
    id: 17,
    nome: "Comissão de Seleção e Treinamento",
    responsavel: "Chefe da Comissão de Seleção",
    endereco: "Endereço da Comissão de Seleção e Treinamento",
    horarioFuncionamento: "08:00:00",
    contatos: [
      {
        id: 18,
        tipo: TipoContato.EMAIL,
        descricao: "Email de contato",
        valor: "selecao@comissao.gov.br",
      },
    ],
  },
  {
    id: 18,
    nome: "Gabinete Desa. Etelvina Maria Sampaio Felipe",
    responsavel: "Desa. Etelvina Maria Sampaio Felipe",
    endereco: "Endereço do Gabinete Desa. Etelvina Maria Sampaio Felipe",
    horarioFuncionamento: "09:00:00",
    contatos: [
      {
        id: 19,
        tipo: TipoContato.TELEFONE,
        descricao: "Telefone de contato",
        valor: "+55 61 8901-2345",
      },
    ],
  },
  {
    id: 19,
    nome: "Gabinete Desa. Jacqueline Adorno de La Cruz Barbosa",
    responsavel: "Desa. Jacqueline Adorno de La Cruz Barbosa",
    endereco: "Endereço do Gabinete Desa. Jacqueline Adorno de La Cruz Barbosa",
    horarioFuncionamento: "09:00:00",
    contatos: [
      {
        id: 20,
        tipo: TipoContato.EMAIL,
        descricao: "Email de contato",
        valor: "jacqueline@cruzbarbosa.gov.br",
      },
    ],
  },
  {
    id: 20,
    nome: "Gabinete Desa. Maysa Vendramini Rosal",
    responsavel: "Desa. Maysa Vendramini Rosal",
    endereco: "Endereço do Gabinete Desa. Maysa Vendramini Rosal",
    horarioFuncionamento: "09:00:00",
    contatos: [
      {
        id: 21,
        tipo: TipoContato.TELEFONE,
        descricao: "Telefone de contato",
        valor: "+55 61 9012-3456",
      },
    ],
  },
  {
    id: 21,
    nome: "Gabinete Juiz Convocado Jocy Gomes de Almeida",
    responsavel: "Juiz Convocado Jocy Gomes de Almeida",
    endereco: "Endereço do Gabinete Juiz Convocado Jocy Gomes de Almeida",
    horarioFuncionamento: "09:00:00",
    contatos: [
      {
        id: 22,
        tipo: TipoContato.EMAIL,
        descricao: "Email de contato",
        valor: "jocy.almeida@juiz.gov.br",
      },
    ],
  },
  {
    id: 22,
    nome: "Junta Médica",
    responsavel: "Chefe da Junta Médica",
    endereco: "Endereço da Junta Médica",
    horarioFuncionamento: "08:00:00",
    contatos: [
      {
        id: 23,
        tipo: TipoContato.TELEFONE,
        descricao: "Telefone de contato",
        valor: "+55 61 0123-4567",
      },
    ],
  },
  {
    id: 23,
    nome: "Justiça Militar",
    responsavel: "Chefe da Justiça Militar",
    endereco: "Endereço da Justiça Militar",
    horarioFuncionamento: "08:00:00",
    contatos: [
      {
        id: 24,
        tipo: TipoContato.EMAIL,
        descricao: "Email de contato",
        valor: "justica.militar@militar.gov.br",
      },
    ],
  },
  {
    id: 24,
    nome: "Comissão Permanente de Acessibilidade e Inclusão",
    responsavel: "Chefe da Comissão de Acessibilidade",
    endereco: "Endereço da Comissão Permanente de Acessibilidade",
    horarioFuncionamento: "08:00:00",
    contatos: [
      {
        id: 25,
        tipo: TipoContato.TELEFONE,
        descricao: "Telefone de contato",
        valor: "+55 61 1234-5678",
      },
    ],
  },
  {
    id: 25,
    nome: "Conselho da Magistratura",
    responsavel: "Presidente do Conselho",
    endereco: "Endereço do Conselho da Magistratura",
    horarioFuncionamento: "08:00:00",
    contatos: [
      {
        id: 26,
        tipo: TipoContato.EMAIL,
        descricao: "Email de contato",
        valor: "conselho@magistratura.gov.br",
      },
    ],
  },
  {
    id: 26,
    nome: "Coordenadoria de Gestão Estratégica, Estatística e Projetos",
    responsavel: "Coordenador de Gestão Estratégica",
    endereco: "Endereço da Coordenadoria de Gestão Estratégica",
    horarioFuncionamento: "08:00:00",
    contatos: [
      {
        id: 27,
        tipo: TipoContato.TELEFONE,
        descricao: "Telefone de contato",
        valor: "+55 61 2345-6789",
      },
    ],
  },
  {
    id: 27,
    nome: "Coordenadoria Estadual da Mulher em Situação de Violência Doméstica e Familiar",
    responsavel: "Coordenador da Coordenadoria Estadual da Mulher",
    endereco: "Endereço da Coordenadoria Estadual da Mulher",
    horarioFuncionamento: "08:00:00",
    contatos: [
      {
        id: 28,
        tipo: TipoContato.EMAIL,
        descricao: "Email de contato",
        valor: "violencia@coordenadoria.gov.br",
      },
    ],
  },
  {
    id: 28,
    nome: "Corregedoria-Geral de Justiça",
    responsavel: "Corregedor-Geral de Justiça",
    endereco: "Endereço da Corregedoria-Geral",
    horarioFuncionamento: "08:00:00",
    contatos: [
      {
        id: 29,
        tipo: TipoContato.TELEFONE,
        descricao: "Telefone de contato",
        valor: "+55 61 3456-7890",
      },
    ],
  },
  {
    id: 29,
    nome: "Diretoria Administrativa",
    responsavel: "Diretor Administrativo",
    endereco: "Endereço da Diretoria Administrativa",
    horarioFuncionamento: "08:00:00",
    contatos: [
      {
        id: 30,
        tipo: TipoContato.EMAIL,
        descricao: "Email de contato",
        valor: "administrativo@diretoria.gov.br",
      },
    ],
  },
  {
    id: 30,
    nome: "Diretoria Controladoria Interna",
    responsavel: "Diretor da Controladoria Interna",
    endereco: "Endereço da Diretoria Controladoria Interna",
    horarioFuncionamento: "08:00:00",
    contatos: [
      {
        id: 31,
        tipo: TipoContato.TELEFONE,
        descricao: "Telefone de contato",
        valor: "+55 61 4567-8901",
      },
    ],
  },
  {
    id: 31,
    nome: "Diretoria de Gestão de Pessoas",
    responsavel: "Diretor de Gestão de Pessoas",
    endereco: "Endereço da Diretoria de Gestão de Pessoas",
    horarioFuncionamento: "08:00:00",
    contatos: [
      {
        id: 32,
        tipo: TipoContato.EMAIL,
        descricao: "Email de contato",
        valor: "gestaopessoas@diretoria.gov.br",
      },
    ],
  },
  {
    id: 32,
    nome: "Diretoria de Infraestrutura e Obras",
    responsavel: "Diretor de Infraestrutura e Obras",
    endereco: "Endereço da Diretoria de Infraestrutura e Obras",
    horarioFuncionamento: "08:00:00",
    contatos: [
      {
        id: 33,
        tipo: TipoContato.TELEFONE,
        descricao: "Telefone de contato",
        valor: "+55 61 5678-9012",
      },
    ],
  },
  {
    id: 33,
    nome: "Espaço Saúde",
    responsavel: "Coordenador do Espaço Saúde",
    endereco: "Endereço do Espaço Saúde",
    horarioFuncionamento: "08:00:00",
    contatos: [
      {
        id: 34,
        tipo: TipoContato.EMAIL,
        descricao: "Email de contato",
        valor: "espaco@saude.gov.br",
      },
    ],
  },
  {
    id: 34,
    nome: "Gabinete Des. João Rigo Guimarães",
    responsavel: "Des. João Rigo Guimarães",
    endereco: "Endereço do Gabinete Des. João Rigo Guimarães",
    horarioFuncionamento: "09:00:00",
    contatos: [
      {
        id: 35,
        tipo: TipoContato.TELEFONE,
        descricao: "Telefone de contato",
        valor: "+55 61 6789-0123",
      },
    ],
  },
  {
    id: 35,
    nome: "Gabinete Des. Marco Villas Boas",
    responsavel: "Des. Marco Villas Boas",
    endereco: "Endereço do Gabinete Des. Marco Villas Boas",
    horarioFuncionamento: "09:00:00",
    contatos: [
      {
        id: 36,
        tipo: TipoContato.EMAIL,
        descricao: "Email de contato",
        valor: "marco.villas@boas.gov.br",
      },
    ],
  },
  {
    id: 36,
    nome: "Gabinete Des. Pedro Nelson de Miranda Coutinho",
    responsavel: "Des. Pedro Nelson de Miranda Coutinho",
    endereco: "Endereço do Gabinete Des. Pedro Nelson de Miranda Coutinho",
    horarioFuncionamento: "09:00:00",
    contatos: [
      {
        id: 37,
        tipo: TipoContato.TELEFONE,
        descricao: "Telefone de contato",
        valor: "+55 61 7890-1234",
      },
    ],
  },
  {
    id: 37,
    nome: "Gabinete Desa. Ângela Issa Haonat",
    responsavel: "Desa. Ângela Issa Haonat",
    endereco: "Endereço do Gabinete Desa. Ângela Issa Haonat",
    horarioFuncionamento: "09:00:00",
    contatos: [
      {
        id: 38,
        tipo: TipoContato.EMAIL,
        descricao: "Email de contato",
        valor: "angela.haonat@des.gov.br",
      },
    ],
  },
  {
    id: 38,
    nome: "Gabinete Desa. Ângela M. Ribeiro Prudente",
    responsavel: "Desa. Ângela M. Ribeiro Prudente",
    endereco: "Endereço do Gabinete Desa. Ângela M. Ribeiro Prudente",
    horarioFuncionamento: "09:00:00",
    contatos: [
      {
        id: 39,
        tipo: TipoContato.TELEFONE,
        descricao: "Telefone de contato",
        valor: "+55 61 8901-2345",
      },
    ],
  },
  {
    id: 39,
    nome: "Justiça Móvel",
    responsavel: "Coordenador da Justiça Móvel",
    endereco: "Endereço da Justiça Móvel",
    horarioFuncionamento: "08:00:00",
    contatos: [
      {
        id: 40,
        tipo: TipoContato.EMAIL,
        descricao: "Email de contato",
        valor: "justica.movel@justica.gov.br",
      },
    ],
  },
  {
    id: 40,
    nome: "Lanchonete",
    responsavel: "Gerente da Lanchonete",
    endereco: "Endereço da Lanchonete",
    horarioFuncionamento: "08:00:00",
    contatos: [
      {
        id: 41,
        tipo: TipoContato.TELEFONE,
        descricao: "Telefone de contato",
        valor: "+55 61 9012-3456",
      },
    ],
  },
  {
    id: 41,
    nome: "Núcleo de Apoio às Comarcas",
    responsavel: "Coordenador do Núcleo de Apoio",
    endereco: "Endereço do Núcleo de Apoio às Comarcas",
    horarioFuncionamento: "08:00:00",
    contatos: [
      {
        id: 42,
        tipo: TipoContato.EMAIL,
        descricao: "Email de contato",
        valor: "apoio@comarcas.gov.br",
      },
    ],
  },
  {
    id: 42,
    nome: "Núcleo Permanente de Métodos Consensuais de Solução de Conflitos",
    responsavel: "Coordenador do Núcleo Permanente",
    endereco: "Endereço do Núcleo Permanente de Métodos Consensuais",
    horarioFuncionamento: "08:00:00",
    contatos: [
      {
        id: 43,
        tipo: TipoContato.TELEFONE,
        descricao: "Telefone de contato",
        valor: "+55 61 0123-4567",
      },
    ],
  },
  {
    id: 43,
    nome: "OAB",
    responsavel: "Presidente da OAB",
    endereco: "Endereço da OAB",
    horarioFuncionamento: "08:00:00",
    contatos: [
      {
        id: 44,
        tipo: TipoContato.EMAIL,
        descricao: "Email de contato",
        valor: "contato@oab.org.br",
      },
    ],
  },
  {
    id: 44,
    nome: "Ouvidoria Judiciária",
    responsavel: "Ouvidor Judiciário",
    endereco: "Endereço da Ouvidoria Judiciária",
    horarioFuncionamento: "08:00:00",
    contatos: [
      {
        id: 45,
        tipo: TipoContato.TELEFONE,
        descricao: "Telefone de contato",
        valor: "+55 61 1234-5678",
      },
    ],
  },
  {
    id: 45,
    nome: "Serviço Social",
    responsavel: "Chefe do Serviço Social",
    endereco: "Endereço do Serviço Social",
    horarioFuncionamento: "08:00:00",
    contatos: [
      {
        id: 46,
        tipo: TipoContato.EMAIL,
        descricao: "Email de contato",
        valor: "servico.social@social.gov.br",
      },
    ],
  },
]
