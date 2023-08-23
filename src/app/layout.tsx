import { ReactNode } from 'react'
import { Providers } from './providers'

import './globals.css'

type Props = {
   children: ReactNode
}
export default function RootLayout({ children }: Props) {
   return (
      <html>
         <body>
            <Providers>{children}</Providers>
         </body>
      </html>
   )
}
