'use client'

import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import { getTicketSearchParams, TTicketSearchParams } from '../../../../redux/slices/TicketSearchParamsSlice'
import { ValidateStateParams } from '../../../../libs/helpers/ValidateStateParams'
import { setError } from '../../../../redux/slices/TicketSearchFormErrorSlice'
//
//
//
export const TicketFormSearchHandle = () => {
   //
   const dispatch = useDispatch()
   const router = useRouter()
   //
   const formParams: TTicketSearchParams = useSelector(getTicketSearchParams)
   const searchType = formParams.searchType
   //
   const handleOnClick = () => {
      //
      const isValid = ValidateStateParams(formParams)
      //
      if (isValid === undefined) {
         //
         //
         if (searchType === 'searchParams') handleSearchParams()
         if (searchType === 'reduxState') handleStateParams()
         //
      }
      //
      else dispatch(setError(isValid))
   }

   const handleSearchParams = () => {
      const urlParams = {
         startId: formParams.airportStart?.id || 'empty',
         startDate: formParams.isoDateStart || 'empty',
         endId: formParams.airportEnd?.id || 'empty',
         endDate: formParams.isoDateEnd || 'empty',
         trip: formParams.isRoundTrip ? 'true' : 'false',
      }
      const url = `/tickets/params-result?startId=${encodeURIComponent(urlParams.startId)}&startDate=${encodeURIComponent(
         urlParams.startDate,
      )}&endId=${encodeURIComponent(urlParams.endId)}&endDate=${encodeURIComponent(urlParams.endDate)}&trip=${encodeURIComponent(
         urlParams.trip,
      )}`

      router.push(url)
   }

   const handleStateParams = () => {
      router.push('/tickets/state-result')
   }

   return (
      <button
         onClick={handleOnClick}
         type={'button'}
         className="flex h-[52px] flex-col items-center justify-center
         rounded-lg border border-primary-950/10 bg-gradient-to-tr from-primary-50 to-primary-100/40
         px-4 text-center text-[16px] font-semibold tracking-wide text-primary-500 transition-all duration-500 hover:text-primary-400 hover:opacity-90">
         <span>BİLET ARA</span>
      </button>
   )
}
