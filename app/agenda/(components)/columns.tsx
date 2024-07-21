"use client"

import { Contato } from "@/types"
import { ColumnDef } from "@tanstack/react-table"

export const columns: ColumnDef<Contato>[] = [
  {
    accessorKey: "descricao",
    header: "Descrição",
  },
  {
    accessorKey: "tipo",
    header: "Tipo",
  },
  {
    accessorKey: "valor",
    header: "",
  },
]
