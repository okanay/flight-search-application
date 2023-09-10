'use client'

import { Dispatch, SetStateAction, useState } from 'react'
import { TFlightTicket } from '../../../../libs/constants/MockData'

import { CalendarIcon, CurrencyDollarIcon, FlagIcon, MapPinIcon } from '@heroicons/react/20/solid'

import { FilterButton } from '@/components/UI/TicketSearchResult/FilterButton'
import { TicketList, TTicketListName } from '@/components/(Main)/Tickets/TicketList'

type TProps = {
   tickets: TFlightTicket[]
   listName: TTicketListName
}

export type TFilterStateName = '' | 'asc' | 'desc'

export type TFilterNames = 'orderByPrice' | 'orderByDate' | 'orderByFlag' | 'orderByCity'

export const FilteredTickets = ({ tickets, listName }: TProps) => {
   const [orderByPrice, setOrderByPrice] = useState<TFilterStateName>('')
   const [orderByDate, setOrderByDate] = useState<TFilterStateName>('')
   const [orderByFlag, setOrderByFlag] = useState<TFilterStateName>('')
   const [orderByCity, setOrderByCity] = useState<TFilterStateName>('')

   let filteredTickets: TFlightTicket[] = [...tickets]

   if (orderByPrice === 'asc') {
      filteredTickets.sort((a, b) => a.ticketPrice - b.ticketPrice)
   } else if (orderByPrice === 'desc') {
      filteredTickets.sort((a, b) => b.ticketPrice - a.ticketPrice)
   }

   if (orderByDate === 'asc') {
      filteredTickets.sort((a, b) => new Date(a.isoFlightDate).getTime() - new Date(b.isoFlightDate).getTime())
   } else if (orderByDate === 'desc') {
      filteredTickets.sort((a, b) => new Date(b.isoFlightDate).getTime() - new Date(a.isoFlightDate).getTime())
   }

   if (orderByFlag === 'asc') {
      filteredTickets.sort((a, b) => a.destinationStart.countryName.localeCompare(b.destinationStart.countryName))
   } else if (orderByFlag === 'desc') {
      filteredTickets.sort((a, b) => b.destinationStart.countryName.localeCompare(a.destinationStart.countryName))
   }

   if (orderByCity === 'asc') {
      filteredTickets.sort((a, b) => a.destinationStart.city.localeCompare(b.destinationStart.city))
   } else if (orderByCity === 'desc') {
      filteredTickets.sort((a, b) => b.destinationStart.city.localeCompare(a.destinationStart.city))
   }

   const resetOtherFilters = (currentFilter: TFilterNames) => {
      if (currentFilter !== 'orderByPrice') {
         setOrderByPrice('')
      }
      if (currentFilter !== 'orderByDate') {
         setOrderByDate('')
      }
      if (currentFilter !== 'orderByFlag') {
         setOrderByFlag('')
      }
      if (currentFilter !== 'orderByCity') {
         setOrderByCity('')
      }
   }

   const handleSortChange = (
      filterName: TFilterNames,
      state: TFilterStateName,
      setState: Dispatch<SetStateAction<TFilterStateName>>,
   ) => {
      resetOtherFilters(filterName)

      if (state === '') {
         setState('asc')
      } else if (state === 'asc') {
         setState('desc')
      } else if (state === 'desc') {
         setState('')
      }
   }

   return (
      <TicketList listName={listName} tickets={filteredTickets}>
         {filteredTickets.length > 0 ? (
            <div
               className={
                  'mb-2 grid w-full grid-cols-[repeat(auto-fill,minmax(80px,12fr))] items-center justify-start gap-4 overflow-hidden rounded-lg border border-slate-200 px-4 py-2'
               }
            >
               <FilterButton
                  buttonName={'Tarih'}
                  icon={<CalendarIcon className={'w-[20px] smTablet:w-[24px]'} />}
                  onClick={() => {
                     handleSortChange('orderByDate', orderByDate, setOrderByDate)
                  }}
                  state={orderByDate}
               />
               <FilterButton
                  buttonName={'Fiyat'}
                  icon={<CurrencyDollarIcon className={'w-[20px] smTablet:w-[24px]'} />}
                  onClick={() => {
                     handleSortChange('orderByPrice', orderByPrice, setOrderByPrice)
                  }}
                  state={orderByPrice}
               />

               {listName === 'Bütün Biletler' && (
                  <>
                     <FilterButton
                        buttonName={'Şehir'}
                        icon={<MapPinIcon className={'w-[20px] smTablet:w-[24px]'} />}
                        onClick={() => {
                           handleSortChange('orderByCity', orderByCity, setOrderByCity)
                        }}
                        state={orderByCity}
                     />
                     <FilterButton
                        buttonName={'Ülke'}
                        icon={<FlagIcon className={'w-[20px] smTablet:w-[24px]'} />}
                        onClick={() => {
                           handleSortChange('orderByFlag', orderByFlag, setOrderByFlag)
                        }}
                        state={orderByFlag}
                     />
                  </>
               )}
            </div>
         ) : (
            <div>
               <p className={'font-openSans text-[16px] font-semibold text-slate-800 baseTablet:text-[20px]'}>Sonuc Bulunamadi</p>
            </div>
         )}
      </TicketList>
   )
}
