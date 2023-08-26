import { TicketMockData } from '../constants/MockData'

export const TicketFinder = (destinationStartId: number, destinationEndId: number, date: string | undefined) => {
   const destinationReturnDate = date !== undefined ? new Date(date) : undefined

   if (destinationReturnDate !== undefined) {
      const destinationTrLocaleDate = destinationReturnDate.toLocaleDateString('tr-TR', { timeZone: 'Europe/Istanbul' })

      return TicketMockData.filter(ticket => {
         const ticketDate = new Date(ticket.isoFlightDate)
         const ticketDateTrLocale = ticketDate.toLocaleDateString('tr-TR', { timeZone: 'Europe/Istanbul' })

         if (
            ticketDateTrLocale === destinationTrLocaleDate &&
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
export const caseEndDate = new Date('2023-09-15T00:00:00Z')
