import { TFlightTicket } from '../../../../../libs/constants/MockData'
import { TicketFinder } from '../../../../../libs/helpers/TicketFinder'
import { FilteredTickets } from '@/components/(Main)/Tickets/FilteredTickets'
import { ValidateSearchParams } from '../../../../../libs/helpers/ValidateStateParams'

export type TValidationSearchParams = {
   startId: string
   startDate: string
   endId: string
   endDate: string
   trip: string
   state: string
}

type TProps = {
   params: {
      num?: string
   }
   searchParams: TValidationSearchParams
}

export default async function ParamsResultPage({ params, searchParams }: TProps) {
   const { startId, startDate, endId, endDate, trip, state } = searchParams
   ValidateSearchParams(searchParams)

   const ticketsStart: TFlightTicket[] = TicketFinder(Number(startId), Number(endId), startDate) || []
   const ticketsEnd: TFlightTicket[] = TicketFinder(Number(endId), Number(startId), endDate) || []

   await new Promise(resolve => setTimeout(resolve, 1000))

   return (
      <>
         <FilteredTickets tickets={ticketsStart} listName={'Gidiş Biletleri'} />
         {trip === 'true' && (
            <>
               <FilteredTickets tickets={ticketsEnd} listName={'Dönüş Biletleri'} />
            </>
         )}
      </>
   )
}
