'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

// ... (previous actions remain unchanged)

export async function createEvent({
  name,
  description,
  date,
  location,
  isPrivate,
  tickets,
  companyId
}: {
  name: string
  description: string
  date: Date
  location: string
  isPrivate: boolean
  tickets: { type: string; price: number; quantity: number }[]
  companyId: string
}) {
  const event = await prisma.event.create({
    data: {
      name,
      description,
      date,
      location,
      isPrivate,
      companyId,
      tickets: {
        create: tickets
      }
    }
  })

  revalidatePath('/empresas/dashboard')
  return event
}

