import { TFlightTicket } from '../../../../libs/constants/MockData'
import { FormattedDate } from '../../../../libs/helpers/FormattedDate'
import Image from 'next/image'
import World from '../../../../public/world.svg'

type TProps = {
   ticket: TFlightTicket
}

export const TicketCard = ({ ticket }: TProps) => {
   const { destinationStart, destinationEnd, isoFlightDate, ticketPrice } = ticket
   const { formattedDate, formattedTime } = FormattedDate(isoFlightDate)

   const formattedPrice = ticketPrice.toLocaleString('tr-TR', {
      style: 'currency',
      currency: 'TRY',
   })

   return (
      <button
         type={'button'}
         className="relative flex w-full flex-col items-start justify-center overflow-hidden
         rounded-2xl border border-slate-100 bg-gradient-to-tr from-slate-50/50 to-slate-100/20
         px-4 py-4 font-openSans text-[10px] tracking-wide text-slate-100 shadow shadow-slate-50
         transition-all duration-500 hover:scale-105 baseTablet:px-8 baseTablet:text-[14px]">
         <div className={'flex w-full items-start justify-between overflow-x-auto'}>
            <div className={'relative z-20 flex flex-col items-start justify-start gap-y-2'}>
               <p
                  className={
                     'flex flex-col justify-start gap-y-1 truncate rounded-lg border border-slate-100 bg-slate-700 px-4 py-1 text-start shadow shadow-slate-100'
                  }>
                  <span>{destinationStart.name}</span>
                  <span>{destinationStart.countryName}</span>
               </p>
               <p className={'rounded-lg border border-slate-100 bg-slate-700 px-4 py-1 shadow shadow-slate-100'}>
                  {destinationStart.code}
               </p>
               <p className="flex h-[48px] flex-col items-start justify-center rounded-lg border border-slate-100 bg-slate-700 px-4 baseTablet:h-[60px]">
                  <span className={'text-[14px] font-bold tracking-wider text-primary-400 baseTablet:text-[20px]'}>
                     {formattedTime}
                  </span>
                  <span className={'text-[12px] baseTablet:text-[14px]'}>{formattedDate}</span>
               </p>
            </div>
            <div className={'absolute inset-0 z-10'}>
               <Image src={World} alt={'word'} fill={true} className={'scale-95'} />
            </div>
            <div className={'relative z-20 flex flex-col items-end justify-end gap-y-2'}>
               <p
                  className={
                     'flex flex-col justify-end gap-y-1 truncate rounded-lg border border-slate-100 bg-slate-700 px-4 py-1 text-end shadow shadow-slate-100'
                  }>
                  <span>{destinationEnd.name}</span>
                  <span>{destinationEnd.countryName}</span>
               </p>
               <p className={'rounded-lg border border-slate-100 bg-slate-700 px-4 py-1 shadow shadow-slate-200'}>
                  {destinationEnd.code}
               </p>
               <p
                  className="flex h-[48px] flex-col items-center justify-center gap-1 rounded-lg border
               border-slate-200 bg-slate-700 px-4 text-center text-[14px] baseTablet:h-[60px] baseTablet:text-[20px]">
                  <span className={'font-bold text-primary-400'}>{formattedPrice}</span>
               </p>
            </div>
         </div>
      </button>
   )
}
