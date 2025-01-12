'use client'

import { useState, FormEvent } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'

// Tipagem para os ingressos
interface Ticket {
  id: string
  type: string
  price: number
}

// Tipagem para o evento
interface Event {
  tickets: Ticket[]
}

// Props do componente
interface BuyTicketFormProps {
  event: Event
}

export function BuyTicketForm({ event }: BuyTicketFormProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [ticketType, setTicketType] = useState<string>('')
  const [quantity, setQuantity] = useState<number>(1)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [paymentMethod, setPaymentMethod] = useState<string>('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      alert('Ingresso comprado com sucesso!')
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      alert('Erro ao comprar ingresso. Tente novamente.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="ticketType" className="block mb-2">Tipo de Ingresso</label>
        <Select
          onValueChange={(value) => setTicketType(value)} // Usando onValueChange
          defaultValue=""
          required
        >
          <option value="" disabled>Selecione um tipo</option>
          {event.tickets.map((ticket) => (
            <option key={ticket.id} value={ticket.id}>
              {ticket.type} - R$ {ticket.price.toFixed(2)}
            </option>
          ))}
        </Select>
      </div>
      <div>
        <label htmlFor="quantity" className="block mb-2">Quantidade</label>
        <Input
          type="number"
          id="quantity"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          required
        />
      </div>
      <div>
        <label htmlFor="paymentMethod" className="block mb-2">Método de Pagamento</label>
        <Select
          onValueChange={(value) => setPaymentMethod(value)} // Usando onValueChange
          defaultValue=""
          required
        >
          <option value="" disabled>Selecione um método</option>
          <option value="pix">PIX</option>
          <option value="credit_card">Cartão de Crédito</option>
          <option value="boleto">Boleto</option>
        </Select>
      </div>
      <Button type="submit">Comprar Ingresso</Button>
    </form>
  )
}
