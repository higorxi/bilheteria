"use client"
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <header className="bg-primary text-primary-foreground">
      <div className="container mx-auto flex justify-between items-center py-4">
        <Link href="/" className="text-2xl font-bold">
          Bilheteria Digital
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/eventos">Eventos</Link></li>
            <li><Link href="/empresas">Para Empresas</Link></li>
            <li><Button asChild variant="secondary"><Link href="/login">Entrar</Link></Button></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

