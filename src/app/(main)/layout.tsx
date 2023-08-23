import { ReactNode } from 'react'
import { Header } from '@/components/(Main)/Header/Header'
import { Footer } from '@/components/(Main)/Footer/Footer'

type Props = {
   children: ReactNode
}
export default function RootLayout({ children }: Props) {
   return (
      <>
         <Header />
         {children}
         <Footer />
      </>
   )
}
