import "@/styles/globals.css"

import { ReactNode } from "react"
import { Source_Sans_3 as FontSans } from "next/font/google"

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
      <body className={cn("flex min-h-screen justify-center bg-background font-sans antialiased", fontSans.variable)}>
        {children}
      </body>
    </html>
  )
}
