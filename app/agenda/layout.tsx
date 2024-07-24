import "@/styles/globals.css"

import { ReactNode } from "react"
import { AgendaProvider } from "@/contexts/agenda-context"

import Footer from "@/components/ui/footer"
import Header from "@/components/ui/header"
import ScrollToTop from "@/components/ui/scroll-to-top"

export default function AgendaLayout({ children }: { children: ReactNode }) {
  return (
    <AgendaProvider>
      <div className="flex size-full flex-col">
        <Header />
        <main className="mb-[20px] mt-10 flex-1 lg:mx-10">{children}</main>
        <ScrollToTop />
        <Footer />
      </div>
    </AgendaProvider>
  )
}
