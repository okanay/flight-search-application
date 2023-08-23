'use client'

import Link from 'next/link'

export default function NotFound() {
   return (
      <html lang="en">
         <body>
            <div
               className={
                  'flex h-screen w-full flex-col items-center justify-center text-center font-plexSerif text-4xl font-bold text-primary-400'
               }>
               <h1>Oooopppps..</h1>
               <Link href={'/'} locale={'tr'} className={'my-4 rounded border border-slate-600 px-3 py-5 text-slate-600'}>
                  Home Page
               </Link>
            </div>
         </body>
      </html>
   )
}
