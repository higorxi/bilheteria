import { BuyTicketForm } from '@/components/BuyTicketForm'
import { Header } from '@/components/Header'
import { prisma } from '@/lib/prisma'

import { notFound } from 'next/navigation'


async function getEvent(id: string) {
  const event = await prisma.event.findUnique({
    where: { id },
    include: { company: true, tickets: true }
  })

  if (!event) notFound()

  return event
}

export default async function EventPage({ params }: { params: { id: string } }) {
  const event = await getEvent(params.id)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">{event.name}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-xl mb-2">{new Date(event.date).toLocaleString()}</p>
            <p className="text-xl mb-4">{event.location}</p>
            <p className="text-gray-700">{event.description}</p>
            <p className="mt-4 text-lg">Organizado por: {event.company.name}</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Comprar Ingressos</h2>
            <BuyTicketForm event={event} />
          </div>
        </div>
      </main>
    </div>
  )
}

