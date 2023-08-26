import { ReactNode } from 'react'
import { Providers } from './providers'

import './globals.css'
import { Metadata } from 'next'

type Props = {
   children: ReactNode
}

export const metadata: Metadata = {
   title: 'Okan Ay | Amadeus',
   description: 'Demo | Flight Search Application',
}

export default function RootLayout({ children }: Props) {
   return (
      <html style={{ WebkitTapHighlightColor: 'transparent' }}>
         <body>
            <Providers>{children}</Providers>
         </body>
      </html>
   )
}
