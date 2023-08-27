import { NextRequest, NextResponse } from 'next/server'
import { TTicketSearchParams } from '../../../../../redux/slices/TicketSearchParamsSlice'
import { TFlightTicket, TicketMockData } from '../../../../../libs/constants/MockData'
import { TicketFinder } from '../../../../../libs/helpers/TicketFinder'
import { ValidateStateParams } from '../../../../../libs/helpers/ValidateStateParams'

export async function GET() {
   const data = [...TicketMockData]
   return NextResponse.json({ data })
}

export async function POST(req: NextRequest) {
   const searchParams: TTicketSearchParams = await req.json()

   const isValid: number | undefined = ValidateStateParams(searchParams)
   if (isValid !== undefined) return NextResponse.json({ error: '' }, { status: isValid as number })

   let startDestinationTickets: TFlightTicket[] = []
   let endDestinationTickets: TFlightTicket[] = []

   if (searchParams?.airportStart?.id !== undefined && searchParams?.airportEnd?.id) {
      startDestinationTickets =
         TicketFinder(searchParams.airportStart.id, searchParams.airportEnd.id, searchParams.isoDateStart) || []
      endDestinationTickets =
         TicketFinder(searchParams.airportEnd.id, searchParams.airportStart.id, searchParams.isoDateEnd) || []
   }

   const data: TTicketFetchResponse = {
      startDestinationTickets: { tickets: [...startDestinationTickets], ok: startDestinationTickets.length > 0 },
      endDestinationTickets: {
         tickets: [...endDestinationTickets],
         ok: searchParams.isRoundTrip && endDestinationTickets.length > 0,
      },
   }

   return NextResponse.json({ data })
}

export type TTicketFetchResponse = {
   startDestinationTickets: {
      tickets: TFlightTicket[]
      ok: boolean
   }
   endDestinationTickets?: {
      tickets: TFlightTicket[]
      ok: boolean
   }
}
