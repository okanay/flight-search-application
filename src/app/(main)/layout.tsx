import { ReactNode } from 'react'
import { Header } from '@/components/Header-Components/Header'
import { Footer } from '@/components/Footer-Components/Footer'

type Props = {
   children: ReactNode
}
export default function MainLayout({ children }: Props) {
   return (
      <>
         <Header />
         {children}
         <Footer />
      </>
   )
}
