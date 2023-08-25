import { TicketListLoading } from '@/components/(Main)/Tickets/TicketListLoading'

export default function AllTicketLoading() {
   return (
      <>
         <TicketListLoading maxSkeletonCount={2} />
         <TicketListLoading maxSkeletonCount={2} />
      </>
   )
}
