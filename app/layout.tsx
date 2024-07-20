import "@/styles/globals.css"

import { ReactNode } from "react"
import { Poppins as FontSans } from "next/font/google"

import { cn } from "@/lib/utils"

const fontSans = FontSans({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-sans",
})
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "flex h-full items-center justify-center bg-background font-sans antialiased",
          fontSans.variable,
        )}>
        <div className="flex flex-col rounded-xl p-4">
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}
