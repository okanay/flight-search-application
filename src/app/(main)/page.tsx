import { TicketSearchForm } from '@/components/(Main)/Index/TicketSearchForm'
import { Footer } from '@/components/(Main)/Footer/Footer'

function RootPage() {
   return (
      <main className={'mx-auto mt-20 max-w-7xl px-4'}>
         <TicketSearchForm />
      </main>
   )
}

export default RootPage
