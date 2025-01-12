'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'


export function BuyTicketForm({ event }) {
  const [ticketType, setTicketType] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [paymentMethod, setPaymentMethod] = useState('')

  const handleSubmit = async (e) => {
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
          id="ticketType"
          value={ticketType}
          onChange={(e) => setTicketType(e.target.value)}
          required
        >
          <option value="">Selecione um tipo</option>
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
          id="paymentMethod"
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          required
        >
          <option value="">Selecione um método</option>
          <option value="pix">PIX</option>
          <option value="credit_card">Cartão de Crédito</option>
          <option value="boleto">Boleto</option>
        </Select>
      </div>
      <Button type="submit">Comprar Ingresso</Button>
    </form>
  )
}

