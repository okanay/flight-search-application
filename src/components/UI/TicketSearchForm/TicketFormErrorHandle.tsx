'use client'

import { useSelector } from 'react-redux'
import { getTicketError, TTicketSearchFormError } from '../../../../redux/slices/TicketSearchFormErrorSlice'

export const TicketFormErrorHandle = () => {
   const { isError, message }: TTicketSearchFormError = useSelector(getTicketError)

   return isError ? (
      <p className={'mt-2 font-openSans text-[12px] font-semibold text-red-400 smTablet:text-[16px]'}>{message}</p>
   ) : (
      <></>
   )
}
