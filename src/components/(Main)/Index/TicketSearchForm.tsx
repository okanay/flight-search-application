import { PaperAirplaneIcon, TrashIcon } from '@heroicons/react/20/solid'

import { nanoid } from '@reduxjs/toolkit'

import { DestinationPickerStart } from '@/components/UI/Destination/DestinationPickerStart'
import { DestinationPickerEnd } from '@/components/UI/Destination/DestinationPickerEnd'
import { DatePickerStart } from '@/components/UI/Date/DatePickerStart'
import { DatePickerEnd } from '@/components/UI/Date/DatePickerEnd'
import { IsOneWayToggleButton } from '@/components/UI/ToggleButton/IsOneWayToggleButton'
import { TicketFilterClear } from '@/components/UI/TicketFilterClear'
import { TicketSearchButton } from '@/components/UI/ToggleButton/TicketSearchButton'

export const TicketSearchForm = () => {
   return (
      <form className="relative mx-auto flex max-w-[600px] flex-col items-center justify-center gap-x-8 gap-y-2 rounded-2xl border border-slate-100 bg-gradient-to-tr from-slate-50 to-slate-100 px-4 py-4 shadow shadow-slate-200">
         <div className="flex w-fit flex-wrap-reverse items-center justify-center gap-x-8 gap-y-2">
            <IsOneWayToggleButton />
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
      </form>
   )
}
