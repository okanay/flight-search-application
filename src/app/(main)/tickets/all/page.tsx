import { TicketMockData } from '../../../../../libs/constants/MockData'
import { TicketCard } from '@/components/(Main)/Tickets/TicketCard'
import { nanoid } from '@reduxjs/toolkit'
import Image from 'next/image'

export default function Page() {
   return (
      <div className={'mx-auto mt-24 flex max-w-7xl flex-col items-center justify-center gap-4 px-8'}>
         <div className={'flex w-full max-w-[720px] flex-row items-center justify-start gap-4'}>
            <Image src={'/airplane.png'} alt={'airplane'} width={64} height={64} className={'scale-90 smTablet:scale-100'} />
            <p
               className={
                  'font-openSans text-2xl font-semibold text-slate-800 underline decoration-primary-400 underline-offset-[8px] smTablet:text-3xl'
               }>
               Bütün Biletler
            </p>
         </div>
         {TicketMockData.map(ticket => (
            <TicketCard ticket={ticket} key={nanoid()} />
         ))}
      </div>
   )
}
