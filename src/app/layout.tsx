import { ReactNode } from 'react'
import { Providers } from '@/app/providers'

import './globals.css'

type Props = {
   children: ReactNode
}
export default function RootLayout({ children }: Props) {
   return <Providers>{children}</Providers>
}
