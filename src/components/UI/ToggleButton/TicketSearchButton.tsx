'use client'

import { useSelector } from 'react-redux'
import { getTicketData, TTicket } from '../../../../redux/slices/TicketSlice'
import { parseISO } from 'date-fns'
import { TFlightTicket, TicketMockData } from '../../../../libs/constants/MockData'
import { IsTicketExist } from '../../../../libs/helpers/IsTicketExist'

export const TicketSearchButton = () => {
   const searchedTicket: TTicket = useSelector(getTicketData)

   const handleOnClick = () => {
      if (
         searchedTicket.isoDateStart !== undefined &&
         searchedTicket.isoDateEnd !== undefined &&
         searchedTicket.airportStart !== undefined &&
         searchedTicket.airportEnd !== undefined
      ) {
         const ticket = IsTicketExist(searchedTicket.airportStart.id, searchedTicket.isoDateStart)

         if (ticket) {
            console.log('Bilet bulundu:', ticket)
         } else {
            console.log('Bilet bulunamadı.')
         }
      } else {
         console.log('here')
      }
   }

   return (
      <button
         onClick={handleOnClick}
         type={'button'}
         className="h-[52px] rounded-lg border border-primary-200 bg-gradient-to-tr from-primary-300 to-primary-400 px-4 text-lg text-white transition-opacity duration-300 hover:opacity-80">
         BİLET ARA
      </button>
   )
}
