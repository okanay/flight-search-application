'use client'

import { DatePicker } from '@/components/UI/Date/DatePicker'
import { useDispatch, useSelector } from 'react-redux'
import { getIsoDateEnd, getIsoDateStart, getIsOneWay, setDateEnd } from '../../../../redux/slices/TicketSlice'

type TProps = {}

export const DatePickerEnd = ({}: TProps) => {
   const dispatch = useDispatch()

   const isOneWay = useSelector(getIsOneWay)
   const date = useSelector(getIsoDateEnd)
   const dateStart = useSelector(getIsoDateStart)

   const handleDateOnChange = (value: Date) => {
      dispatch(setDateEnd(value))
   }

   const minDate = dateStart !== undefined ? new Date(dateStart) : undefined

   return (
      <DatePicker
         buttonName={!isOneWay ? 'Dönüş Tarihi' : 'Tek Yön'}
         selectedDate={date}
         disabledBtn={isOneWay}
         handleOnChangeCallBack={handleDateOnChange}
         minDate={minDate}
      />
   )
}
