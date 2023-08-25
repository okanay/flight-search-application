import { TFlightTicket } from '../../../../libs/constants/MockData'
import { ReactNode } from 'react'
import Image from 'next/image'
import { TicketCard } from '@/components/(Main)/Tickets/TicketCard'
import { nanoid } from '@reduxjs/toolkit'
import { range } from '../../../../libs/helpers/InlineArray'
import { TicketListLoading } from '@/components/(Main)/Tickets/TicketListLoading'
import { TicketListError } from '@/components/(Main)/Tickets/TicketListError'
import { TicketList } from '@/components/(Main)/Tickets/TicketList'

type TProps = {
   tickets: TFlightTicket[]
   listName: string
   loading?: boolean
   error?: boolean
   children?: ReactNode
}

export const TicketListHandle = ({ tickets, listName, children, loading = false, error = false }: TProps) => {
   console.log(error)

   return error ? (
      <TicketListError />
   ) : loading ? (
      <TicketListLoading />
   ) : (
      <TicketList listName={listName} tickets={tickets}>
         {children}
      </TicketList>
   )
}
