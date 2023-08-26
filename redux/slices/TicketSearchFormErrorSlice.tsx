import { createSlice } from '@reduxjs/toolkit'
import { ErrorMessageHandle } from '../../libs/helpers/ValidateStateParams'
import exp from 'constants'

export type TTicketSearchFormError = {
   isError: boolean
   message: string
   status: number
}

const initialState: TTicketSearchFormError = {
   isError: false,
   message: '',
   status: 0,
}

export const TicketSearchFormErrorSlice = createSlice({
   name: 'ticketSearchFormErrorSlice',
   initialState,
   reducers: {
      clearError: state => {
         return initialState
      },
      setError: (state, action: { payload: number }) => {
         state.status = action.payload
         state.message = ErrorMessageHandle(action.payload)
         state.isError = true
      },
   },
})

export const getTicketError = (state: any) => state.ticketSearchFormErrorSlice
export const getIsError = (state: any) => state.ticketSearchFormErrorSlice.isError
export const getErrorStatus = (state: any) => state.ticketSearchFormErrorSlice.status
export const getErrorMessage = (state: any) => state.ticketSearchFormErrorSlice.message

export const { clearError, setError } = TicketSearchFormErrorSlice.actions
export default TicketSearchFormErrorSlice.reducer
