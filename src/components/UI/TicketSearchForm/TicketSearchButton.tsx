'use client'

import { useDispatch, useSelector } from 'react-redux'

import { useRouter } from 'next/navigation'
import { getTicketSearchParams, TTicketSearchParams } from '../../../../redux/slices/TicketSearchParamsSlice'
import { ValidateStateParams } from '../../../../libs/helpers/ValidateStateParams'
import { clearError, setError } from '../../../../redux/slices/TicketSearchFormErrorSlice'
//
//
//
export const TicketSearchButton = () => {
   const router = useRouter()
   const dispatch = useDispatch()
   const formParams: TTicketSearchParams = useSelector(getTicketSearchParams)

   const handleOnClick = () => {
      const isValid = ValidateStateParams(formParams)
      if (isValid === undefined) {
         dispatch(clearError())
         if (formParams.isSearchFilterTypeStateOrParams) {
            const srcParams = {
               startId: formParams.airportStart?.id || 'empty',
               startDate: formParams.isoDateStart || 'empty',
               endId: formParams.airportEnd?.id || 'empty',
               endDate: formParams.isoDateEnd || 'empty',
               trip: formParams.isRoundTrip ? 'true' : 'false',
            }
            const url = `/tickets/paramsresult?startId=${encodeURIComponent(srcParams.startId)}&startDate=${encodeURIComponent(
               srcParams.startDate,
            )}&endId=${encodeURIComponent(srcParams.endId)}&endDate=${encodeURIComponent(
               srcParams.endDate,
            )}&trip=${encodeURIComponent(srcParams.trip)}`

            router.push(url)
         } else {
            router.push('/tickets/stateresult')
         }
      } else {
         dispatch(setError(isValid))
      }
   }

   return (
      <button
         onClick={handleOnClick}
         type={'button'}
         className="flex h-[52px] flex-col items-center justify-center rounded-lg border border-primary-200 bg-gradient-to-tr from-primary-300 to-primary-400 px-4 text-center text-lg font-semibold tracking-wide text-white transition-opacity duration-300 hover:opacity-80">
         <span>BİLET ARA</span>
      </button>
   )
}
