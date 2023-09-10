import { TFetchError } from '../../../../libs/types/types'
import { ReactNode } from 'react'
import { ErrorMessageHandle } from '../../../../libs/helpers/ValidateStateParams'
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
               'flex h-96 w-full flex-col items-center justify-center text-center font-plexSerif text-2xl font-bold text-red-400'
            }
         >
            <h1 className={'text-[16px] text-slate-800'}>Bilet Arama Formu Eksik!</h1>
            <h1>{ErrorMessageHandle(error.status)}</h1>
            <Link href={'/'} className={'my-4 rounded-lg border border-slate-800 px-2 py-4 text-slate-800'}>
               Geri Dön
            </Link>
         </div>
      </div>
   )
}
