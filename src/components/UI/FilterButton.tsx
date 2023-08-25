import { ReactNode } from 'react'

type TFilterBtnProps = {
   buttonName: string
   ButtonIcon: ReactNode
   onClick: () => void
   state: string
}

export const FilterButton = ({ buttonName, ButtonIcon, onClick, state }: TFilterBtnProps) => {
   return (
      <button
         onClick={onClick}
         className={`${state !== '' ? (state !== 'desc' ? 'bg-slate-800' : 'bg-primary-400') : 'bg-slate-100'}
             flex flex-shrink-0 flex-col items-center justify-center gap-[4px] rounded-lg border border-slate-200 px-[16px] py-[8px] transition-colors duration-300`}>
         <span className={`${state !== '' ? (state !== 'desc' ? 'text-white' : 'text-white') : 'text-slate-800'}`}>
            {ButtonIcon}
         </span>
         <p
            className={`${
               state !== '' ? (state !== 'desc' ? 'text-white' : 'text-white') : 'text-slate-800'
            } text-[14px] font-semibold`}>
            {buttonName}
         </p>
      </button>
   )
}
