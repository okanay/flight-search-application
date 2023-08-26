'use client'

import { Dispatch, SetStateAction, useState } from 'react'
import { TFetchError } from '../../../../../libs/types/types'
import { TTicketFetchResponse } from '@/app/(api)/api/tickets/route'
import { TTicketSearchParams, getTicketSearchParams } from '../../../../../redux/slices/TicketSearchParamsSlice'
import { useQuery } from '@tanstack/react-query'
import { FilteredTickets } from '@/components/(Main)/Tickets/FilteredTickets'
import { TicketListError } from '@/components/(Main)/Tickets/TicketListError'
import { TicketListLoading } from '@/components/(Main)/Tickets/TicketListLoading'
import { ValidateStateParams } from '../../../../../libs/helpers/ValidateStateParams'

import { useSelector } from 'react-redux'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export default function SearchResultPage() {
   const [error, setError] = useState<TFetchError>({
      isError: false,
      status: 200,
   })
   const formParams: TTicketSearchParams = useSelector(getTicketSearchParams)

   const { isLoading, data: searchResult } = useQuery<TTicketFetchResponse>({
      cacheTime: 0,
      queryKey: ['search result'],
      retry: 0,
      queryFn: async () => {
         return await TicketSearchFetchPost(formParams, setError)
      },
   })

   return error.isError ? (
      <TicketListError error={error} />
   ) : isLoading ? (
      <>
         <TicketListLoading maxSkeletonCount={2} />
         {formParams.isRoundTrip && <TicketListLoading maxSkeletonCount={2} />}
      </>
   ) : (
      <>
         <FilteredTickets tickets={searchResult?.startDestinationTickets?.tickets || []} listName={'Gidiş Biletleri'} />

         {formParams.isRoundTrip && (
            <FilteredTickets tickets={searchResult?.endDestinationTickets?.tickets || []} listName={'Dönüş Biletleri'} />
         )}
      </>
   )
}

const TicketSearchFetchPost = async (searchParams: TTicketSearchParams, setError: Dispatch<SetStateAction<TFetchError>>) => {
   await new Promise(resolve => setTimeout(resolve, 750))

   const isValid = ValidateStateParams(searchParams)
   if (isValid !== undefined) return setError({ isError: true, status: isValid })

   try {
      const response = await fetch('/api/tickets', {
         method: 'POST',
         body: JSON.stringify({ ...searchParams }),
         headers: { 'Content-Type': 'application/json' },
         cache: 'no-cache',
      })

      if (response.ok) {
         const json = await response.json()
         return json.data
      } else {
         setError({ isError: true, status: response.status })
      }
   } catch (error) {
      setError({ isError: true, status: 500 })
   }
}
