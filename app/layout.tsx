import "@/styles/globals.css";
import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import { InitialLetterMenu } from "@/components/ui/initial-letter-menu/initial-letter-menu";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen h-screen bg-background flex items-center justify-center font-sans antialiased",
          fontSans.variable,
        )}>
        <div className="w-5/6 h-5/6 border-gray-300 border-2 rounded-xl p-4">
          <div className="flex flex-col">
            <div className="flex items-center justify-center">
              <InitialLetterMenu />
            </div>
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
