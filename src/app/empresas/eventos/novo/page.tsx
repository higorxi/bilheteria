'use client'

import { useState } from 'react'
import { Header } from '@/components/Header'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'

export default function NovoEventoPage() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [location, setLocation] = useState('')
  const [isPrivate, setIsPrivate] = useState(false)
  const [tickets, setTickets] = useState([{ type: '', price: 0, quantity: 0 }])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
     
      alert('Evento criado com sucesso!')
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      alert('Erro ao criar evento. Tente novamente.')
    }
  }

  const addTicketType = () => {
    setTickets([...tickets, { type: '', price: 0, quantity: 0 }])
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Criar Novo Evento</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-2">Nome do Evento</label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="description" className="block mb-2">Descrição</label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="date" className="block mb-2">Data e Hora</label>
            <Input
              id="date"
              type="datetime-local"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="location" className="block mb-2">Local</label>
            <Input
              id="location"
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center">
            <Checkbox
              id="isPrivate"
              checked={isPrivate}
              onCheckedChange={(checked) => setIsPrivate(checked as boolean)}
            />
            <label htmlFor="isPrivate" className="ml-2">Evento Privado</label>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Tipos de Ingresso</h2>
            {tickets.map((ticket, index) => (
              <div key={index} className="space-y-2 mb-4">
                <Input
                  type="text"
                  placeholder="Tipo de Ingresso"
                  value={ticket.type}
                  onChange={(e) => {
                    const newTickets = [...tickets]
                    newTickets[index].type = e.target.value
                    setTickets(newTickets)
                  }}
                  required
                />
                <Input
                  type="number"
                  placeholder="Preço"
                  value={ticket.price}
                  onChange={(e) => {
                    const newTickets = [...tickets]
                    newTickets[index].price = Number(e.target.value)
                    setTickets(newTickets)
                  }}
                  required
                />
                <Input
                  type="number"
                  placeholder="Quantidade"
                  value={ticket.quantity}
                  onChange={(e) => {
                    const newTickets = [...tickets]
                    newTickets[index].quantity = Number(e.target.value)
                    setTickets(newTickets)
                  }}
                  required
                />
              </div>
            ))}
            <Button type="button" onClick={addTicketType}>Adicionar Tipo de Ingresso</Button>
          </div>
          <Button type="submit">Criar Evento</Button>
        </form>
      </main>
    </div>
  )
}

