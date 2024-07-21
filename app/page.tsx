import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center gap-2">
      <h1>Agenda TJTO</h1>
      <Link className={buttonVariants()} href="/agenda">
        Acessar
      </Link>
    </div>
  )
}
