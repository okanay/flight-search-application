import { TicketMockData } from '../constants/MockData'

export const IsTicketExist = (destinationStartId: number, date: string | undefined) => {
   const destinationStartDate = date !== undefined ? new Date(date) : undefined

   if (destinationStartDate !== undefined) {
      return TicketMockData.filter(ticket => {
         const ticketStartDate = new Date(ticket.isoFlightDate)
         if (
            ticketStartDate.getDate() === destinationStartDate.getDate() &&
            ticketStartDate.getMonth() === destinationStartDate.getMonth() &&
            ticketStartDate.getFullYear() === destinationStartDate.getFullYear() &&
            destinationStartId === ticket.destinationStart.id
         ) {
            return true
         }
      })
   }

   return undefined
}
