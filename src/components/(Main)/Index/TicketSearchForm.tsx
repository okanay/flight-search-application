import { PaperAirplaneIcon, TrashIcon } from '@heroicons/react/20/solid'

import { nanoid } from '@reduxjs/toolkit'

import { DestinationPickerStart } from '@/components/UI/Destination/DestinationPickerStart'
import { DestinationPickerEnd } from '@/components/UI/Destination/DestinationPickerEnd'
import { DatePickerStart } from '@/components/UI/Date/DatePickerStart'
import { DatePickerEnd } from '@/components/UI/Date/DatePickerEnd'
import { IsRoundTripToggleButton } from '@/components/UI/ToggleButton/IsRoundTripToggleButton'
import { TicketFilterClear } from '@/components/UI/TicketFilterClear'
import { TicketSearchButton } from '@/components/UI/ToggleButton/TicketSearchButton'
import Link from 'next/link'

export const TicketSearchForm = () => {
   return (
      <form className="relative mx-auto flex max-w-[600px] flex-col items-center justify-center gap-x-8 gap-y-2 rounded-2xl border border-slate-100 bg-gradient-to-tr from-slate-50 to-slate-100 px-4 py-8 shadow shadow-slate-200">
         <div className="flex w-fit flex-wrap-reverse items-center justify-center gap-x-8 gap-y-2">
            <IsRoundTripToggleButton />
            <TicketSearchButton />
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
            <TicketFilterClear />
         </div>
         <div className={'absolute bottom-0 flex w-full translate-y-1/2 items-center justify-center'}>
            <Link
               href={'/tickets/all'}
               className="rounded-lg border border-primary-200 bg-gradient-to-tr from-primary-300 to-primary-400 px-4 py-2 font-openSans text-sm font-semibold tracking-wide text-white transition-opacity duration-300 hover:opacity-80">
               BÜTÜN BİLETLER
            </Link>
         </div>
      </form>
   )
}
