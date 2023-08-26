'use client'

import { TicketListLoading } from '@/components/(Main)/Tickets/TicketListLoading'
import { useSearchParams } from 'next/navigation'

export default function ParamsLoading() {
   const searchParams = useSearchParams()
   const isTrip = searchParams.get('trip') === 'true'

   return (
      <>
         <TicketListLoading maxSkeletonCount={isTrip ? 2 : 5} />
         {isTrip && <TicketListLoading maxSkeletonCount={2} />}
      </>
   )
}
