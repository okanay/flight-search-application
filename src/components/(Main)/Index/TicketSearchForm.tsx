import { DestinationPickerStart } from '@/components/UI/TicketSearchForm/Destination/DestinationPickerStart'
import { DestinationPickerEnd } from '@/components/UI/TicketSearchForm/Destination/DestinationPickerEnd'
import { DatePickerStart } from '@/components/UI/TicketSearchForm/Date/DatePickerStart'
import { DatePickerEnd } from '@/components/UI/TicketSearchForm/Date/DatePickerEnd'
import { TicketFormTripTypeToggle } from '@/components/UI/TicketSearchForm/TicketFormTripTypeToggle'
import { TicketFormClearHandle } from '@/components/UI/TicketSearchForm/TicketFormClearHandle'
import { TicketFormSearchHandle } from '@/components/UI/TicketSearchForm/TicketFormSearchHandle'
import Link from 'next/link'
import { TicketFormErrorHandle } from '@/components/UI/TicketSearchForm/TicketFormErrorHandle'
import { TicketFormSearchTypeToggle } from '@/components/UI/TicketSearchForm/TicketFormSearchTypeToggle'

export const TicketSearchForm = () => {
   return (
      <form className="relative mx-auto flex max-w-[600px] flex-col items-center justify-center gap-x-8 gap-y-2 rounded-2xl border border-slate-100 bg-gradient-to-tr from-slate-50 to-slate-100 px-4 py-8 shadow shadow-slate-200">
         <div className="flex w-fit flex-wrap-reverse items-center justify-center gap-x-8 gap-y-2">
            <TicketFormTripTypeToggle />
            <TicketFormSearchHandle />
         </div>
         <div className={'flex w-fit flex-row flex-wrap justify-center gap-x-8 gap-y-4'}>
            <div className={'flex w-fit flex-row flex-wrap justify-center gap-x-8 gap-y-2'}>
               <DestinationPickerStart />
               <DestinationPickerEnd />
            </div>
            <div className={'flex w-fit flex-row flex-wrap justify-center gap-x-8 gap-y-2'}>
               <DatePickerStart />
               <DatePickerEnd />
            </div>
            <TicketFormClearHandle />
         </div>
         <div className={'absolute bottom-0 flex w-full translate-y-1/2 items-center justify-center'}>
            <Link
               href={'/tickets/all'}
               className="absolute bottom-0 flex h-[32px] translate-y-1/2 flex-col items-center justify-center
         border border-primary-500 bg-gradient-to-tr from-primary-50 to-primary-100/40
         px-4 text-center text-[12px] font-semibold tracking-wide text-primary-500 transition-all duration-500 hover:text-primary-400 hover:opacity-90">
               BÜTÜN BİLETLER
            </Link>
         </div>

         <TicketFormErrorHandle />
         <TicketFormSearchTypeToggle />
      </form>
   )
}
