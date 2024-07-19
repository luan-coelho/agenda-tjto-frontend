import "@/styles/globals.css"

import { ReactNode } from "react"
import { Inter as FontSans } from "next/font/google"

import { cn } from "@/lib/utils"
import ScrollToTop from "@/components/ui/scroll-to-top"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "m-10 flex h-full min-h-full items-center justify-center bg-background font-sans antialiased",
          fontSans.variable,
        )}>
        <div className="min-h-full w-5/6 rounded-xl border-2 border-gray-200 p-4">
          <div className="flex flex-col">
            <main>{children}</main>
            <ScrollToTop />
          </div>
        </div>
      </body>
    </html>
  )
}
