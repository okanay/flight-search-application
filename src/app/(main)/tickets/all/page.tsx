import { TicketMockData } from '../../../../../libs/constants/MockData'
import { FilteredTickets } from '@/components/(Main)/Tickets/FilteredTickets'

export default async function Page() {
   const tickets = [...TicketMockData]

   await new Promise(resolve => setTimeout(resolve, 2000))

   return <FilteredTickets tickets={tickets} listName={'Bütün Biletler'} />
}
