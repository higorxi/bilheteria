import { Header } from '@/components/Header'
import { prisma } from '@/lib/prisma'
import Link from 'next/link'

async function getCompanyEvents(companyId: string) {
  return await prisma.event.findMany({
    where: { companyId },
    include: { tickets: true }
  })
}

export default async function DashboardEmpresaPage() {
  // TODO: Obter o ID da empresa autenticada
  const companyId = 'company_id_here'
  const events = await getCompanyEvents(companyId)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Dashboard da Empresa</h1>
        <Link href="/empresas/eventos/novo" className="btn btn-primary mb-4">
          Criar Novo Evento
        </Link>
        <div className="space-y-6">
          {events.map((event) => (
            <div key={event.id} className="border rounded-lg p-4">
              <h2 className="text-xl font-semibold">{event.name}</h2>
              <p>{new Date(event.date).toLocaleString()}</p>
              <p>{event.location}</p>
              <p>Tipo: {event.isPrivate ? 'Privado' : 'Público'}</p>
              <h3 className="text-lg font-semibold mt-2">Ingressos:</h3>
              <ul>
                {event.tickets.map((ticket) => (
                  <li key={ticket.id}>
                    {ticket.type}: R$ {ticket.price.toFixed(2)} - Disponíveis: {ticket.quantity}
                  </li>
                ))}
              </ul>
              <Link href={`/empresas/eventos/${event.id}/editar`} className="btn btn-secondary mt-2">
                Editar Evento
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

