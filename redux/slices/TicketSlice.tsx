import { createSlice } from '@reduxjs/toolkit'
import { TAirport } from '../../libs/constants/MockData'
import { formatISO } from 'date-fns'

export type TTicketSearchParams = {
   isRoundTrip: boolean
   airportStart: TAirport | undefined
   airportEnd: TAirport | undefined
   isoDateStart: string | undefined
   isoDateEnd: string | undefined
}

const initialState: TTicketSearchParams = {
   isRoundTrip: false,
   airportStart: undefined,
   airportEnd: undefined,
   isoDateStart: undefined,
   isoDateEnd: undefined,
}

export const TicketSlice = createSlice({
   name: 'ticketSlice',
   initialState,
   reducers: {
      clearFilter: state => {
         state.isRoundTrip = false
         state.airportStart = undefined
         state.airportEnd = undefined
         state.isoDateStart = undefined
         state.isoDateEnd = undefined
      },
      toggleIsOneWay: state => {
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

export const getTicketData = (state: any) => state.ticketSlice
export const getIsRoundTrip = (state: any) => state.ticketSlice.isRoundTrip
export const getAirportStart = (state: any) => state.ticketSlice.airportStart
export const getAirportEnd = (state: any) => state.ticketSlice.airportEnd
export const getIsoDateStart = (state: any) => state.ticketSlice.isoDateStart
export const getIsoDateEnd = (state: any) => state.ticketSlice.isoDateEnd

export const { clearFilter, toggleIsOneWay, setAirportStart, setAirportEnd, setDateStart, setDateEnd } = TicketSlice.actions
export default TicketSlice.reducer
