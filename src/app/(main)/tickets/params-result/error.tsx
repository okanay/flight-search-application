'use client'

import Link from 'next/link'
import { errorMessage } from '../../../../../libs/helpers/ValidateStateParams'

type TProps = {
   error: Error & { digest?: string }
   reset: () => void
}

export default function SearchParamsError({ error, reset }: TProps) {
   console.log(error.message)

   return (
      <div className={'mx-auto flex h-full h-full min-w-[320px] max-w-7xl flex-col items-center justify-center px-4'}>
         <div
            className={
               'flex h-96 w-full flex-col items-center justify-center text-center font-plexSerif text-2xl font-bold text-red-400'
            }>
            <h1 className={'text-[16px] text-slate-800'}>Size Uygun Sonuç Bulunamadı!</h1>
            <h1>{errorMessage(Number(error.message))}</h1>
            <a href={'/'} className={'my-4 rounded-lg border border-slate-800 px-2 py-4 text-slate-800'}>
               Geri Dön
            </a>
         </div>
      </div>
   )
}
