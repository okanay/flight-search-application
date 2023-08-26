import { TicketMockData } from '../../../../../libs/constants/MockData'
import { FilteredTickets } from '@/components/(Main)/Tickets/FilteredTickets'

export default async function Page() {
   await new Promise(resolve => setTimeout(resolve, 500, { cache: 'no-cache' }))

   const tickets = [...TicketMockData]
   return <FilteredTickets tickets={tickets} listName={'Bütün Biletler'} />
}
