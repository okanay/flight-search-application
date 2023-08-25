'use client'

import { DatePicker } from '@/components/UI/Date/DatePicker'
import { useDispatch, useSelector } from 'react-redux'
import { getIsoDateEnd, getIsoDateStart, getIsRoundTrip, setDateEnd } from '../../../../redux/slices/TicketSlice'

type TProps = {}

export const DatePickerEnd = ({}: TProps) => {
   const dispatch = useDispatch()

   const isRoundTrip = useSelector(getIsRoundTrip)
   const date = useSelector(getIsoDateEnd)
   const dateStart = useSelector(getIsoDateStart)

   const handleDateOnChange = (value: Date) => {
      dispatch(setDateEnd(value))
   }

   const minDate = dateStart !== undefined ? new Date(dateStart) : undefined

   return (
      <DatePicker
         buttonName={!isRoundTrip ? 'Dönüş Tarihi' : 'Tek Yön'}
         selectedDate={date}
         disabledBtn={isRoundTrip}
         handleOnChangeCallBack={handleDateOnChange}
         minDate={minDate}
      />
   )
}
