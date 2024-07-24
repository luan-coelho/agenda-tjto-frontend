import { ComponentProps } from "react"

import { cn } from "@/lib/utils"

type LinhaProps = ComponentProps<"div">

export default function Linha({ className }: LinhaProps) {
  return <div className={cn("my-4 border-t border-gray-300", className)}></div>
}
