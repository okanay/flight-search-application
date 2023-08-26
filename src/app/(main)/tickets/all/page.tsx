import { TicketMockData } from '../../../../../libs/constants/MockData'
import { FilteredTickets } from '@/components/(Main)/Tickets/FilteredTickets'

export default async function Page() {
   const tickets = [...TicketMockData]
   return <FilteredTickets tickets={tickets} listName={'Bütün Biletler'} />
}
