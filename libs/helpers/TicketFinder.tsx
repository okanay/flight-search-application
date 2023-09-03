import { TicketMockData } from '../constants/MockData'

export const TicketFinder = (destinationStartId: number, destinationEndId: number, date: string | undefined) => {
   const destinationDate = date !== undefined ? new Date(date) : undefined

   if (destinationDate !== undefined) {
      const destinationDateTRLocale = destinationDate.toLocaleDateString('tr-TR', { timeZone: 'Europe/Istanbul' })

      return TicketMockData.filter(ticket => {
         const ticketDate = new Date(ticket.isoFlightDate)
         const ticketDateTRLocale = ticketDate.toLocaleDateString('tr-TR', { timeZone: 'Europe/Istanbul' })

         if (
            ticketDateTRLocale === destinationDateTRLocale &&
            ticket.destinationStart.id === destinationStartId &&
            ticket.destinationEnd.id === destinationEndId
         ) {
            return true
         }
      })
   }

   return undefined
}

export const caseStartDate = new Date('2023-08-25T00:00:00Z')
export const caseEndDate = new Date('2023-09-03T00:00:00Z')
