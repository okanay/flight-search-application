'use client'

import { getTicketData, TTicketSearchParams } from '../../../../../redux/slices/TicketSlice'
import { useQuery } from '@tanstack/react-query'
import { FilteredTickets } from '@/components/(Main)/Tickets/FilteredTickets'
import { useSelector } from 'react-redux'
import { Dispatch, SetStateAction, useState } from 'react'
import { TFetchError } from '../../../../../libs/types/types'
import { TTicketFetchResponse } from '@/app/(api)/api/tickets/route'
import { TicketListError } from '@/components/(Main)/Tickets/TicketListError'
import { TicketListLoading } from '@/components/(Main)/Tickets/TicketListLoading'
import { validateSearchParams } from '../../../../../libs/helpers/ValidateSearchParams'

export default function SearchResultPage() {
   const searchParams: TTicketSearchParams = useSelector(getTicketData)

   const [error, setError] = useState<TFetchError>({
      isError: false,
      status: 200,
   })
   const { isLoading, data: searchResult } = useQuery<TTicketFetchResponse>({
      cacheTime: 0,
      queryKey: ['search result'],
      retry: 0,
      queryFn: async () => {
         return await TicketSearchFetchPost(searchParams, setError)
      },
   })

   if (error.isError) return <TicketListError error={error} />

   if (isLoading) return <TicketListLoading maxSkeletonCount={searchParams.isOneWay ? 2 : 5} />

   return (
      <>
         <FilteredTickets
            tickets={searchResult?.startDestinationTickets?.tickets || []}
            listName={'Gidiş Biletleri'}
            loading={isLoading}
            error={error}
            ok={searchResult?.startDestinationTickets?.ok || true}
         />

         {!searchParams.isOneWay && (
            <FilteredTickets
               tickets={searchResult?.endDestinationTickets?.tickets || []}
               listName={'Dönüş Biletleri'}
               loading={isLoading}
               error={error}
               ok={searchResult?.endDestinationTickets?.ok || true}
            />
         )}
      </>
   )
}

const TicketSearchFetchPost = async (searchParams: TTicketSearchParams, setError: Dispatch<SetStateAction<TFetchError>>) => {
   // await new Promise(resolve => setTimeout(resolve, 500))

   const isValid = validateSearchParams(searchParams)
   if (isValid !== undefined) return setError({ isError: true, status: isValid })

   // await new Promise(resolve => setTimeout(resolve, 1000))

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
