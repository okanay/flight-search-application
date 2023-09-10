'use client'

import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import { getTicketSearchParams, TTicketSearchParams } from '../../../../redux/slices/TicketSearchParamsSlice'
import { ValidateStateParams } from '../../../../libs/helpers/ValidateStateParams'
import { setError } from '../../../../redux/slices/TicketSearchFormErrorSlice'
import { useState } from 'react'
//
//
//
export const TicketFormSearchHandle = () => {
   const [loading, setLoading] = useState(false)
   //
   const dispatch = useDispatch()
   const { push, refresh } = useRouter()
   //
   const formParams: TTicketSearchParams = useSelector(getTicketSearchParams)
   const searchType = formParams.searchType
   //
   const handleOnClick = () => {
      //
      const isValid = ValidateStateParams(formParams)
      //
      if (isValid === undefined) {
         setLoading(true)
         //
         //
         if (searchType === 'searchParams') handleSearchParams()
         if (searchType === 'reduxState') handleStateParams()
         //
         setLoading(false)
      }
      //
      else {
         dispatch(setError(isValid))
      }
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

      push(url)
      refresh()
   }

   const handleStateParams = () => {
      push('/tickets/state-result')
      refresh()
   }

   return (
      <button
         onClick={handleOnClick}
         type={'button'}
         disabled={loading}
         className="flex h-[52px] w-32 flex-col items-center justify-center
         rounded-lg border border-primary-950/10 bg-gradient-to-tr from-primary-50 to-primary-100/40
         px-4 text-center text-[16px] font-semibold tracking-wide text-primary-500 transition-all duration-500 hover:text-primary-400 hover:opacity-90 disabled:text-gray-600 disabled:opacity-60">
         {!loading ? (
            <span>BİLET ARA</span>
         ) : (
            <span className={'h-8 w-8 animate-spin rounded-full bg-gradient-to-tr from-primary-500 to-primary-800'} />
         )}
      </button>
   )
}
