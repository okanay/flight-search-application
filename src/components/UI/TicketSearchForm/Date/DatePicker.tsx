import { TDateBtnName } from '../../../../../libs/types/types'

import { useRef, useState } from 'react'

import useMenuOutsideCloseEffect from '@/custom-hooks/useMenuOutsideCloseEffect'
import { Next2Label, NextLabel, Prev2Label, PrevLabel } from '@/components/UI/TicketSearchForm/Date/DatePickerIcons'
import { FormattedDate } from '../../../../../libs/helpers/FormattedDate'
import { PickerMenuLabel } from '@/components/UI/TicketSearchForm/PickerMenuLabel'

import { caseEndDate, caseStartDate } from '../../../../../libs/helpers/TicketFinder'
import { tr } from 'date-fns/locale'
import Calendar from 'react-calendar'

type TProps = {
   buttonName: TDateBtnName
   selectedDate: string | undefined
   disabledBtn?: boolean
   handleOnChangeCallBack: (value: Date) => void
   minDate?: Date
}

export const DatePicker = ({ buttonName, selectedDate, handleOnChangeCallBack, minDate, disabledBtn = false }: TProps) => {
   const [isOpen, setIsOpen] = useState(false)

   const handleOnChange = (value: Date) => handleOnChangeCallBack(value)
   const handleMenuToggle = () => {
      setIsOpen(prev => !prev)
   }

   const buttonRef = useRef<HTMLButtonElement>(null)
   const menuRef = useRef<HTMLDivElement>(null)
   useMenuOutsideCloseEffect({ buttonRef, menuRef, setIsOpen })

   const { formattedDate, dayName } = FormattedDate(selectedDate)

   return (
      <div className={`flex flex-col items-end`}>
         <button
            disabled={disabledBtn}
            className={`disabled:border-b-200 group h-[64px] w-[200px] border-b-[2px] text-slate-600 transition-colors duration-300 hover:border-b-primary-400 focus:border-b-primary-400 disabled:cursor-not-allowed disabled:border-b-slate-200 disabled:hover:border-b-slate-200
             ${isOpen ? 'border-b-primary-400' : 'border-b-slate-400'}`}
            type={'button'}
            ref={buttonRef}
            onClick={handleMenuToggle as any}
         >
            {selectedDate === undefined ? (
               <span className={'flex flex-col items-start justify-center text-slate-600 group-disabled:text-slate-400'}>
                  <span className={'text-[16px] font-semibold'}>{buttonName}</span>
               </span>
            ) : (
               <span className={'flex flex-col items-start justify-center text-slate-600'}>
                  <span className={'text-[12px]'}>{buttonName}</span>
                  <span className={'text-[16px] font-semibold'}>{formattedDate}</span>
                  <span className={'text-[12px] font-semibold'}>{dayName}</span>
               </span>
            )}
         </button>
         {isOpen && (
            <PickerMenuLabel menuRef={menuRef} handleMenuToggle={handleMenuToggle as any} buttonName={buttonName}>
               <Calendar
                  view={'month'}
                  locale={'tr'}
                  onChange={handleOnChange as any}
                  onClickDay={() => {
                     setIsOpen(false)
                  }}
                  showNeighboringMonth={true}
                  showNavigation={true}
                  defaultValue={new Date('2023-08-26')}
                  minDate={minDate !== undefined ? minDate : caseStartDate}
                  maxDate={caseEndDate}
                  nextLabel={<NextLabel />}
                  next2Label={<Next2Label />}
                  prevLabel={<PrevLabel />}
                  prev2Label={<Prev2Label />}
               />
            </PickerMenuLabel>
         )}
      </div>
   )
}
