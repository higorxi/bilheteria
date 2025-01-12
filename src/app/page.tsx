import { Header } from '@/components/Header'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Bem-vindo à Bilheteria Digital</h1>
        <p className="text-xl mb-8">
          Encontre e compre ingressos para os melhores eventos ou gerencie seus próprios eventos.
        </p>
        <div className="flex space-x-4">
          <Button asChild>
            <Link href="/eventos">Ver Eventos</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/empresas">Para Empresas</Link>
          </Button>
        </div>
      </main>
    </div>
  )
}

