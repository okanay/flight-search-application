'use client'

import { DatePicker } from '@/components/UI/Date/DatePicker'
import { useDispatch, useSelector } from 'react-redux'
import { getIsoDateStart, setDateStart } from '../../../../redux/slices/TicketSlice'

type TProps = {}

export const DatePickerStart = ({}: TProps) => {
   const dispatch = useDispatch()
   const date = useSelector(getIsoDateStart) || undefined

   const handleDateOnChange = (value: Date) => {
      dispatch(setDateStart(value))
   }

   return <DatePicker buttonName={'Gidiş Tarihi'} selectedDate={date} handleOnChangeCallBack={handleDateOnChange} />
}
