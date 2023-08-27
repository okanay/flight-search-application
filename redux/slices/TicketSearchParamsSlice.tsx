import { createSlice } from '@reduxjs/toolkit'
import { TAirport } from '../../libs/constants/MockData'
import { formatISO } from 'date-fns'
import { TReduxState } from '../../libs/types/types'

export type TSearchType = 'reduxState' | 'searchParams'

export type TTicketSearchParams = {
   isRoundTrip: boolean
   airportStart: TAirport | undefined
   airportEnd: TAirport | undefined
   isoDateStart: string | undefined
   isoDateEnd: string | undefined
   searchType: TSearchType
}

const initialState: TTicketSearchParams = {
   isRoundTrip: true,
   airportStart: undefined,
   airportEnd: undefined,
   isoDateStart: undefined,
   isoDateEnd: undefined,
   searchType: 'searchParams',
}

export const TicketSearchParamsSlice = createSlice({
   name: 'ticketSearchParamsSlice',
   initialState,
   reducers: {
      clearFilter: state => {
         return initialState
      },
      toggleSearchType: state => {
         state.searchType = state.searchType === 'reduxState' ? 'searchParams' : 'reduxState'
      },
      toggleIsRoundTrip: state => {
         state.isRoundTrip = !state.isRoundTrip

         if (state.isRoundTrip === false) {
            state.isoDateEnd = undefined
         }
      },
      setAirportStart: (state, action: { payload: TAirport | undefined }) => {
         state.airportStart = action.payload
      },
      setAirportEnd: (state, action: { payload: TAirport | undefined }) => {
         state.airportEnd = action.payload
      },
      setDateStart: (state, action: { payload: Date | undefined }) => {
         state.isoDateStart = action.payload !== undefined ? formatISO(action.payload) : undefined
         state.isoDateEnd = undefined
      },
      setDateEnd: (state, action: { payload: Date | undefined }) => {
         state.isoDateEnd = action.payload !== undefined ? formatISO(action.payload) : undefined
      },
   },
})

export const getTicketSearchParams = (state: TReduxState) => state.ticketSearchParamsSlice
export const getIsRoundTrip = (state: TReduxState) => state.ticketSearchParamsSlice.isRoundTrip
export const getAirportStart = (state: TReduxState) => state.ticketSearchParamsSlice.airportStart
export const getAirportEnd = (state: TReduxState) => state.ticketSearchParamsSlice.airportEnd
export const getIsoDateStart = (state: TReduxState) => state.ticketSearchParamsSlice.isoDateStart
export const getIsoDateEnd = (state: TReduxState) => state.ticketSearchParamsSlice.isoDateEnd
export const getSearchType = (state: TReduxState) => state.ticketSearchParamsSlice.searchType

export const { clearFilter, toggleIsRoundTrip, setAirportStart, setAirportEnd, setDateStart, setDateEnd, toggleSearchType } =
   TicketSearchParamsSlice.actions
export default TicketSearchParamsSlice.reducer
