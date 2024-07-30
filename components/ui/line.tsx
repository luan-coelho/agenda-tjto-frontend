import { ComponentProps } from "react"

import { cn } from "@/lib/utils"

type LineProps = ComponentProps<"div">

export default function Line({ className }: LineProps) {
  return <div className={cn("my-4 border-t border-gray-300", className)}></div>
}
