import { TDateBtnName } from '../../../../libs/types/types'
import Calendar from 'react-calendar'
import { tr } from 'date-fns/locale'
import { format } from 'date-fns'
import { Next2Label, NextLabel, Prev2Label, PrevLabel } from '@/components/UI/DatePickerLabels'
import { PickerMenuContainer } from '@/components/UI/PickerMenuContainer'
import { useRef, useState } from 'react'
import useMenuOutsideCloseEffect from '@/custom-hooks/useMenuOutsideCloseEffect'

type TProps = {
   buttonName: TDateBtnName
   selectedDate: Date | undefined
   disabledBtn?: boolean
   handleOnChangeCallBack: (value: Date) => void
   minDate?: Date
}

export const DatePicker = ({ buttonName, selectedDate, handleOnChangeCallBack, minDate, disabledBtn = false }: TProps) => {
   const currentDate = new Date()
   const [isOpen, setIsOpen] = useState(false)

   const handleOnChange = (value: Date) => handleOnChangeCallBack(value)
   const handleMenuToggle = () => {
      setIsOpen(prev => !prev)
   }

   const buttonRef = useRef<HTMLButtonElement>(null)
   const menuRef = useRef<HTMLDivElement>(null)
   useMenuOutsideCloseEffect({ buttonRef, menuRef, setIsOpen })

   let formattedDate = ''
   let dayName = ''

   if (selectedDate !== undefined) {
      const parsedDate = new Date(selectedDate)
      formattedDate = format(parsedDate, 'dd MMMM', { locale: tr })
      dayName = format(parsedDate, 'EEEE', { locale: tr })
   }

   return (
      <div className={`flex flex-col items-end`}>
         <button
            disabled={disabledBtn}
            className={`disabled:border-b-200 group h-[60px] w-[200px] border-b-[2px] text-slate-600 transition-colors duration-300 hover:border-b-primary-600 focus:border-b-primary-600 disabled:cursor-not-allowed disabled:border-b-slate-200 disabled:hover:border-b-slate-200
             ${isOpen ? 'border-b-primary-600' : 'border-b-slate-400'}`}
            type={'button'}
            ref={buttonRef}
            onClick={handleMenuToggle as any}>
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
            <PickerMenuContainer menuRef={menuRef} handleMenuToggle={handleMenuToggle as any} buttonName={buttonName}>
               <Calendar
                  view={'month'}
                  locale={'tr'}
                  onChange={handleOnChange as any}
                  showNeighboringMonth={true}
                  showNavigation={true}
                  defaultValue={selectedDate}
                  minDate={minDate !== undefined ? minDate : currentDate}
                  nextLabel={<NextLabel />}
                  next2Label={<Next2Label />}
                  prevLabel={<PrevLabel />}
                  prev2Label={<Prev2Label />}
               />
            </PickerMenuContainer>
         )}
      </div>
   )
}
