import "@/styles/globals.css"

import { ReactNode } from "react"
import { Inter as FontSans } from "next/font/google"

import { cn } from "@/lib/utils"

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
          "m-5 flex min-h-screen items-center justify-center bg-background font-sans antialiased",
          fontSans.variable,
        )}>
        <div className="w-5/6 rounded-xl border-2 border-gray-200 p-4">
          <div className="flex flex-col">
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  )
}
