import { TFetchError } from '../../../../libs/types/types'
import { ReactNode } from 'react'
import { errorMessage } from '../../../../libs/helpers/ValidateSearchParams'
import Link from 'next/link'

type TProps = {
   error: TFetchError
   children?: ReactNode
}

export const TicketListError = ({ error, children }: TProps) => {
   return (
      <div className={'mx-auto flex h-full h-full min-w-[320px] max-w-7xl flex-col items-center justify-center px-4'}>
         <div
            className={
               'flex h-96 w-full flex-col items-center justify-center text-center font-plexSerif text-2xl font-bold text-primary-400'
            }>
            <h1>{errorMessage(error.status)}</h1>
            <Link href={'/'} locale={'tr'} className={'my-4 rounded-lg border border-slate-800 px-2 py-4 text-slate-800'}>
               Tekrar Ara
            </Link>
         </div>
      </div>
   )
}
