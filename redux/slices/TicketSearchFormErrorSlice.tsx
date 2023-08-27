import { createSlice } from '@reduxjs/toolkit'
import { ErrorMessageHandle } from '../../libs/helpers/ValidateStateParams'
import exp from 'constants'
import { TReduxState } from '../../libs/types/types'

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

export const getTicketError = (state: TReduxState) => state.ticketSearchFormErrorSlice
export const getIsError = (state: TReduxState) => state.ticketSearchFormErrorSlice.isError
export const getErrorStatus = (state: TReduxState) => state.ticketSearchFormErrorSlice.status
export const getErrorMessage = (state: TReduxState) => state.ticketSearchFormErrorSlice.message

export const { clearError, setError } = TicketSearchFormErrorSlice.actions
export default TicketSearchFormErrorSlice.reducer
