'use client'

import { AirportsMockData, CountriesMockData, TAirport, TCountry } from '../../../../../libs/constants/MockData'
import { DestinationPicker } from '@/components/UI/TicketSearchForm/Destination/DestinationPicker'
import { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
   getAirportEnd,
   getAirportStart,
   setAirportEnd,
   setAirportStart,
} from '../../../../../redux/slices/TicketSearchParamsSlice'
import { DestinationFilter } from '../../../../../libs/helpers/DestinationFilter'

export const DestinationPickerStart = () => {
   const [selectedCountry, setSelectedCountry] = useState<TCountry | undefined>()
   const searchInputRef = useRef<HTMLInputElement>(null)
   const [searchInput, setSearchInput] = useState<string | null>()

   const dispatch = useDispatch()

   const destinationEnd: TAirport = useSelector(getAirportEnd)
   const destinationStart: TAirport = useSelector(getAirportStart)

   const withoutEndDestination: TAirport[] = AirportsMockData.filter(a => {
      if (destinationEnd !== undefined) {
         if (a.city !== destinationEnd.city) {
            return a
         }
      } else {
         return a
      }
   })

   const withSearchParamsItem: TAirport[] = DestinationFilter(withoutEndDestination, selectedCountry, searchInput)

   const handleSearchInputChange = () => {
      setSelectedCountry(undefined)
      setSearchInput(searchInputRef?.current?.value)
   }

   const handleAirportDestinationChange = (value: TAirport) => {
      if (destinationStart?.name === value.name) return dispatch(setAirportStart(undefined))
      dispatch(setAirportStart(value))
   }

   return (
      <DestinationPicker
         buttonName={'Nereden'}
         selectedDestination={destinationStart}
         setSelectedCountry={setSelectedCountry}
         selectedCountry={selectedCountry}
         setSearchInput={setSearchInput}
         airportsList={withSearchParamsItem}
         countryList={CountriesMockData}
         searchInputRef={searchInputRef}
         searchInputOnChange={handleSearchInputChange as any}
         handleAirportDestinationChange={handleAirportDestinationChange as any}
      />
   )
}
