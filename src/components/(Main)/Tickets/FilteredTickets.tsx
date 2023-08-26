'use client'

import { Dispatch, SetStateAction, useState } from 'react'
import { TFlightTicket } from '../../../../libs/constants/MockData'
import { TFetchError } from '../../../../libs/types/types'

import { CalendarIcon, CurrencyDollarIcon, FlagIcon } from '@heroicons/react/20/solid'

import { FilterButton } from '@/components/UI/TicketSearchResult/FilterButton'
import { TicketList } from '@/components/(Main)/Tickets/TicketList'

type TProps = {
   tickets: TFlightTicket[]
   listName: string
   loading?: boolean
   error?: TFetchError
   ok?: boolean
}

type TFilterNames = 'orderByPrice' | 'orderByDate' | 'orderByFlag' | 'orderByCity'

export const FilteredTickets = ({ tickets, listName, error, loading = false, ok = true }: TProps) => {
   const [orderByPrice, setOrderByPrice] = useState('')
   const [orderByDate, setOrderByDate] = useState('')
   const [orderByFlag, setOrderByFlag] = useState('')

   let filteredTickets: TFlightTicket[] = [...tickets]

   if (orderByPrice === 'asc') {
      filteredTickets.sort((a, b) => b.ticketPrice - a.ticketPrice)
   } else if (orderByPrice === 'desc') {
      filteredTickets.sort((a, b) => a.ticketPrice - b.ticketPrice)
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
   }

   const handleSortChange = (filterName: TFilterNames, state: string, setState: Dispatch<SetStateAction<string>>) => {
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
            <div className={'flex flex-row items-center justify-start gap-4 rounded-lg border border-slate-200 px-4 py-2'}>
               <FilterButton
                  buttonName={'Tarih'}
                  ButtonIcon={<CalendarIcon className={'w-[24px]'} />}
                  onClick={() => {
                     handleSortChange('orderByDate', orderByDate, setOrderByDate)
                  }}
                  state={orderByDate}
               />
               <FilterButton
                  buttonName={'Fiyat'}
                  ButtonIcon={<CurrencyDollarIcon className={'w-[24px]'} />}
                  onClick={() => {
                     handleSortChange('orderByPrice', orderByPrice, setOrderByPrice)
                  }}
                  state={orderByPrice}
               />
               <FilterButton
                  buttonName={'Ülke'}
                  ButtonIcon={<FlagIcon className={'w-[24px]'} />}
                  onClick={() => {
                     handleSortChange('orderByFlag', orderByFlag, setOrderByFlag)
                  }}
                  state={orderByFlag}
               />
            </div>
         ) : (
            <div>
               <p className={'font-openSans text-[16px] font-semibold text-slate-800 baseTablet:text-[20px]'}>Sonuc Bulunamadi</p>
            </div>
         )}
      </TicketList>
   )
}
