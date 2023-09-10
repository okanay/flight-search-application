'use client'

export default function NotFound() {
   return (
      <html lang="tr">
         <body>
            <div
               className={
                  'flex h-screen w-full flex-col items-center justify-center text-center font-plexSerif text-4xl font-bold text-primary-400'
               }
            >
               <h1>Oooopppps..</h1>
               <a href={'/'} className={'my-4 rounded border border-slate-600 px-3 py-5 text-slate-600'}>
                  Ana Sayfa
               </a>
            </div>
         </body>
      </html>
   )
}
