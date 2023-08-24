'use client'

import { useSelector } from 'react-redux'
import { getTicketData, TTicket } from '../../../../redux/slices/TicketSlice'

export const TicketSearchButton = () => {
   const ticket: TTicket = useSelector(getTicketData)

   const handleOnClick = () => {
      console.log(ticket)
   }

   return (
      <button
         onClick={handleOnClick}
         type={'button'}
         className="h-[52px] rounded-lg border border-primary-200 bg-gradient-to-tr from-primary-500 to-primary-400 px-4 text-lg text-white transition-opacity duration-300 hover:opacity-80">
         BİLET ARA
      </button>
   )
}
