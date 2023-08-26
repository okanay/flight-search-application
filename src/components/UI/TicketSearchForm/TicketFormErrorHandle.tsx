'use client'

import { useDispatch, useSelector } from 'react-redux'
import { clearError, getTicketError, TTicketSearchFormError } from '../../../../redux/slices/TicketSearchFormErrorSlice'
import { useEffect } from 'react'

export const TicketFormErrorHandle = () => {
   const { isError, message }: TTicketSearchFormError = useSelector(getTicketError)
   const dispatch = useDispatch()

   useEffect(() => {
      return () => {
         dispatch(clearError())
      }
   }, [dispatch])

   return isError ? (
      <p className={'mt-2 font-openSans text-[12px] font-semibold text-red-400 smTablet:text-[16px]'}>{message}</p>
   ) : (
      <></>
   )
}
