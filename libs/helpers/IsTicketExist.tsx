import { TicketMockData } from '../constants/MockData'

export const IsTicketExist = (destinationStartId: number, date: string | undefined) => {
   const destinationStartDate = date !== undefined ? new Date(date) : undefined

   if (destinationStartDate !== undefined) {
      const trLocaleTime = destinationStartDate.toLocaleDateString('tr-TR', { timeZone: 'Europe/Istanbul' })

      return TicketMockData.filter(ticket => {
         const ticketStartDate = new Date(ticket.isoFlightDate)
         const trTicketStartDate = ticketStartDate.toLocaleDateString('tr-TR', { timeZone: 'Europe/Istanbul' })

         if (trTicketStartDate === trLocaleTime && destinationStartId === ticket.destinationStart.id) {
            return true
         }
      })
   }

   return undefined
}
