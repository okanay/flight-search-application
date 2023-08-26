'use client'

import { AirportsMockData, CountriesMockData, TAirport, TCountry } from '../../../../../libs/constants/MockData'
import { DestinationPicker } from '@/components/UI/TicketSearchForm/Destination/DestinationPicker'
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
   getAirportEnd,
   getAirportStart,
   setAirportEnd,
   setAirportStart,
} from '../../../../../redux/slices/TicketSearchParamsSlice'
import { DestinationFilter } from '../../../../../libs/helpers/DestinationFilter'

export const DestinationPickerEnd = () => {
   const [selectedCountry, setSelectedCountry] = useState<TCountry | undefined>()
   const searchInputRef = useRef<HTMLInputElement>(null)

   const [searchInput, setSearchInput] = useState<string | null>()

   const dispatch = useDispatch()

   const destinationEnd = useSelector(getAirportEnd)
   const destinationStart = useSelector(getAirportStart)

   const withoutStartDestination: TAirport[] = AirportsMockData.filter(p => {
      if (destinationStart !== undefined) {
         if (p.city !== destinationStart.city) {
            return p
         }
      } else {
         return p
      }
   })

   const withSearchParamsItem: TAirport[] = DestinationFilter(withoutStartDestination, selectedCountry, searchInput)

   const handleSearchInputChange = () => {
      setSelectedCountry(undefined)
      setSearchInput(searchInputRef?.current?.value)
   }

   const handleAirportDestinationChange = (value: TAirport) => {
      if (destinationEnd?.name === value.name) return dispatch(setAirportEnd(undefined))
      dispatch(setAirportEnd(value))
   }

   return (
      <DestinationPicker
         buttonName={'Nereye'}
         selectedDestination={destinationEnd}
         selectedCountry={selectedCountry}
         setSelectedCountry={setSelectedCountry}
         setSearchInput={setSearchInput}
         airportsList={withSearchParamsItem}
         countryList={CountriesMockData}
         searchInputRef={searchInputRef}
         searchInputOnChange={handleSearchInputChange as any}
         handleAirportDestinationChange={handleAirportDestinationChange as any}
      />
   )
}
