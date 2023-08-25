import { TFetchError } from '../../../../libs/types/types'
import { ReactNode } from 'react'
import Link from 'next/link'

type TProps = {
   error: TFetchError
   children?: ReactNode
}

export const TicketListError = ({ error, children }: TProps) => {
   console.log(error.status)

   const errorMessage = (status: number | string) => {
      switch (Number(status)) {
         case 404:
            return 'Formu eksik tamamladınız.'
         case 405:
            return 'Kalkış lokasyonunu belirtmediniz.'
         case 406:
            return 'Varış lokasyonunu belirtmediniz.'
         case 407:
            return 'Gidiş tarihi belirtmediniz.'
         case 408:
            return 'Dönüş tarihi belirtmediniz.'
         default:
            return 'Bir hata meydana geldi.'
      }
   }

   return (
      <div className={'mx-auto flex h-full h-full min-w-[320px] max-w-7xl flex-col items-center justify-center px-4'}>
         <div
            className={
               'flex h-96 w-full flex-col items-center justify-center text-center text-start font-plexSerif text-2xl font-bold text-primary-400'
            }>
            <h1>{errorMessage(error.status)}</h1>
            <Link href={'/'} locale={'tr'} className={'my-4 rounded border border-slate-600 px-3 py-5 text-slate-600'}>
               Anasayfa Dön
            </Link>
         </div>
      </div>
   )
}
