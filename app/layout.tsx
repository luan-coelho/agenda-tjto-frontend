import "@/styles/globals.css"

import { Inter as FontSans } from "next/font/google"

import { cn } from "@/lib/utils"
import { Index } from "@/components/ui/initial-letter-menu"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "flex h-screen min-h-screen items-center justify-center bg-background font-sans antialiased",
          fontSans.variable,
        )}>
        <div className="size-5/6 rounded-xl border-2 border-gray-200 p-4">
          <div className="flex flex-col">
            <div className="flex items-center justify-center">
              <Index words={["teste", "alegria"]} />
            </div>
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  )
}
