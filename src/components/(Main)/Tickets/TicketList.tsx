import Image from 'next/image'
import { TicketCard } from '@/components/(Main)/Tickets/TicketCard'
import { nanoid } from '@reduxjs/toolkit'
import { TFlightTicket } from '../../../../libs/constants/MockData'
import { ReactNode } from 'react'

import AirPlaneImageBlur from '../../../../public/airplane.png'

type TProps = {
   tickets: TFlightTicket[]
   listName: string
   children?: ReactNode
}

export const TicketList = ({ tickets, listName, children }: TProps) => {
   return (
      <div className={'mx-auto flex h-full h-full min-w-[320px] max-w-7xl flex-col items-center justify-center px-4'}>
         <div className={'flex h-full w-full max-w-[800px] flex-col items-start justify-start gap-4 px-4 py-4'}>
            <div className={'flex w-full flex-row items-center justify-start gap-4'}>
               <Image
                  src={AirPlaneImageBlur}
                  placeholder={'blur'}
                  alt={'airplane'}
                  width={64}
                  height={64}
                  className={'scale-90 smTablet:scale-100'}
               />
               <p className="font-openSans text-2xl font-semibold text-slate-800 underline decoration-primary-400 underline-offset-[8px] smTablet:text-3xl">
                  {listName}
               </p>
            </div>
            {children}
            {tickets.map(ticket => (
               <TicketCard ticket={ticket} key={nanoid()} />
            ))}
         </div>
      </div>
   )
}
