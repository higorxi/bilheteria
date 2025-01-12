import { Header } from '@/components/Header'
import { prisma } from '@/lib/prisma'
import Link from 'next/link'

async function getEvents() {
  return await prisma.event.findMany({
    where: { isPrivate: false },
    include: { company: true }
  })
}

export default async function EventosPage() {
  const events = await getEvents()

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Eventos Disponíveis</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <Link href={`/eventos/${event.id}`} key={event.id} className="border rounded-lg p-4 hover:shadow-lg transition">
              <h2 className="text-xl font-semibold">{event.name}</h2>
              <p className="text-gray-600">{new Date(event.date).toLocaleDateString()}</p>
              <p className="text-gray-600">{event.location}</p>
              <p className="mt-2">{event.company.name}</p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}

