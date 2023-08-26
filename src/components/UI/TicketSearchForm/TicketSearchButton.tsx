'use client'

import { useDispatch, useSelector } from 'react-redux'

import { useRouter } from 'next/navigation'
import { getTicketSearchParams, TTicketSearchParams } from '../../../../redux/slices/TicketSearchParamsSlice'
import { ValidateSearchParams } from '../../../../libs/helpers/ValidateSearchParams'
import { clearError, setError } from '../../../../redux/slices/TicketSearchFormErrorSlice'
export const TicketSearchButton = () => {
   const searchParams: TTicketSearchParams = useSelector(getTicketSearchParams)

   const router = useRouter()
   const dispatch = useDispatch()

   const handleOnClick = () => {
      const isValid = ValidateSearchParams(searchParams)

      if (isValid === undefined) {
         dispatch(clearError())
         router.push('/tickets/searchresult')
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
