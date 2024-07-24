import "@/styles/globals.css"

import { ReactNode } from "react"
import { AgendaProvider } from "@/contexts/agenda-context"

import Footer from "@/components/ui/footer"
import Header from "@/components/ui/header"

export default function AgendaLayout({ children }: { children: ReactNode }) {
  return (
    <AgendaProvider>
      <div className="flex size-full flex-col rounded-xl">
        <Header />
        <main className="mx-10 mb-[100px] mt-10">{children}</main>
        <Footer />
      </div>
    </AgendaProvider>
  )
}
