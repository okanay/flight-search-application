import { createSlice } from '@reduxjs/toolkit'
import { TAirport } from '../../libs/constants/MockData'
import { formatISO } from 'date-fns'

export type TTicketSearchParams = {
   isRoundTrip: boolean
   airportStart: TAirport | undefined
   airportEnd: TAirport | undefined
   isoDateStart: string | undefined
   isoDateEnd: string | undefined
   isSearchFilterTypeStateOrParams: boolean
}

const initialState: TTicketSearchParams = {
   isRoundTrip: true,
   airportStart: undefined,
   airportEnd: undefined,
   isoDateStart: undefined,
   isoDateEnd: undefined,
   isSearchFilterTypeStateOrParams: false,
}

export const TicketSearchParamsSlice = createSlice({
   name: 'ticketSearchParamsSlice',
   initialState,
   reducers: {
      clearFilter: state => {
         return initialState
      },
      toggleIsSearchFilterTypeStateOrParams: state => {
         state.isSearchFilterTypeStateOrParams = !state.isSearchFilterTypeStateOrParams
      },
      toggleIsRoundTrip: state => {
         state.isRoundTrip = !state.isRoundTrip

         if (state.isRoundTrip === true) {
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

export const getTicketSearchParams = (state: any) => state.ticketSearchParamsSlice
export const getIsRoundTrip = (state: any) => state.ticketSearchParamsSlice.isRoundTrip
export const getAirportStart = (state: any) => state.ticketSearchParamsSlice.airportStart
export const getAirportEnd = (state: any) => state.ticketSearchParamsSlice.airportEnd
export const getIsoDateStart = (state: any) => state.ticketSearchParamsSlice.isoDateStart
export const getIsoDateEnd = (state: any) => state.ticketSearchParamsSlice.isoDateEnd
export const getIsSearchFilterTypeStateOrParams = (state: any) => state.ticketSearchParamsSlice.isSearchFilterTypeStateOrParams

export const {
   clearFilter,
   toggleIsRoundTrip,
   setAirportStart,
   setAirportEnd,
   setDateStart,
   setDateEnd,
   toggleIsSearchFilterTypeStateOrParams,
} = TicketSearchParamsSlice.actions
export default TicketSearchParamsSlice.reducer
