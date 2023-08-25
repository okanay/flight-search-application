'use client'

import Link from 'next/link'
export const TicketSearchButton = () => {
   return (
      <Link
         href={'/tickets/searchresult'}
         className="flex h-[52px] flex-col items-center justify-center rounded-lg border border-primary-200 bg-gradient-to-tr from-primary-300 to-primary-400 px-4 text-center text-lg font-semibold tracking-wide text-white transition-opacity duration-300 hover:opacity-80">
         <span>BİLET ARA</span>
      </Link>
   )
}
