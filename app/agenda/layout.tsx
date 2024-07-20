import "@/styles/globals.css"

import { ReactNode } from "react"

export default function AgendaLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-[300px] flex-col rounded-xl p-4">
      <main>{children}</main>
    </div>
  )
}
