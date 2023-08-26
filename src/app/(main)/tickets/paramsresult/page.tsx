import { TFlightTicket } from '../../../../../libs/constants/MockData'
import { IsTicketExist } from '../../../../../libs/helpers/IsTicketExist'
import { FilteredTickets } from '@/components/(Main)/Tickets/FilteredTickets'
import { errorMessage } from '../../../../../libs/helpers/ValidateSearchParams'
import { CustomError } from '../../../../../libs/helpers/CustomError'

type TProps = {
   params: {
      num?: string
   }
   searchParams: {
      startId: string
      startDate: string
      endId: string
      endDate: string
      trip: string
      state: string
   }
}

export default async function ParamsResultPage({ params, searchParams }: TProps) {
   const { startId, startDate, endId, endDate, trip, state } = searchParams

   if (startId === undefined) {
      throw new Error('600')
   }

   const ticketsStart: TFlightTicket[] = IsTicketExist(Number(startId), startDate) || []
   const ticketsEnd: TFlightTicket[] = IsTicketExist(Number(endId), endDate) || []

   await new Promise(resolve => setTimeout(resolve, 500))

   return (
      <>
         <FilteredTickets tickets={ticketsStart} listName={'Gidiş Biletleri'} />
         {Boolean(trip) && (
            <>
               <FilteredTickets tickets={ticketsEnd} listName={'Dönüş Biletleri'} />
            </>
         )}
      </>
   )
}
