import { TFlightTicket } from '../../../../../libs/constants/MockData'
import { IsTicketExist } from '../../../../../libs/helpers/IsTicketExist'
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

   const ticketsStart: TFlightTicket[] = IsTicketExist(Number(startId), startDate) || []
   const ticketsEnd: TFlightTicket[] = IsTicketExist(Number(endId), endDate) || []

   await new Promise(resolve => setTimeout(resolve, 500))

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
