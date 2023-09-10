import { ReactNode } from 'react'
import { TFilterStateName } from '@/components/(Main)/Tickets/FilteredTickets'

type TFilterBtnProps = {
   buttonName: string
   state: TFilterStateName
   icon: ReactNode
   onClick: () => void
}

export const FilterButton = ({ buttonName, state, icon, onClick }: TFilterBtnProps) => {
   return (
      <button
         onClick={onClick}
         className={`${state !== '' ? (state !== 'desc' ? 'bg-slate-800' : 'bg-primary-400') : 'bg-slate-100'}
             flex flex-shrink-0 flex-col items-center justify-center gap-[4px] rounded-lg border border-slate-200 px-[12px] py-[6px] transition-colors duration-300 smTablet:px-[16px] smTablet:py-[8px]`}
      >
         <span className={`${state !== '' ? (state !== 'desc' ? 'text-white' : 'text-white') : 'text-primary-400'}`}>{icon}</span>
         <p
            className={`${
               state !== '' ? (state !== 'desc' ? 'text-white' : 'text-white') : 'text-slate-800'
            } text-[12px] font-semibold smTablet:text-[14px]`}
         >
            {buttonName}
         </p>
      </button>
   )
}
