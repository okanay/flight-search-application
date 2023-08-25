import { NextRequest, NextResponse } from 'next/server'
import { TTicketSearchParams } from '../../../../../redux/slices/TicketSlice'
import { TAirport, TFlightTicket, TicketMockData } from '../../../../../libs/constants/MockData'
import { IsTicketExist } from '../../../../../libs/helpers/IsTicketExist'
import { ok } from 'assert'

export async function GET() {
   const data = [...TicketMockData]
   return NextResponse.json({ data })
}

export async function POST(req: NextRequest) {
   const searchParams: TTicketSearchParams = await req.json()

   if (!searchParams.airportStart) return NextResponse.json({ error: '' }, { status: 405 })
   else if (!searchParams.airportEnd) return NextResponse.json({ error: '' }, { status: 406 })
   else if (!searchParams.isoDateStart) return NextResponse.json({ error: '' }, { status: 407 })
   else if (!searchParams.isOneWay && !searchParams.isoDateEnd) return NextResponse.json({ error: '' }, { status: 408 })

   let startDestinationTickets: TFlightTicket[] = IsTicketExist(searchParams.airportStart.id, searchParams.isoDateStart) || []
   let endDestinationTickets: TFlightTicket[] = IsTicketExist(searchParams.airportEnd.id, searchParams.isoDateEnd) || []

   const data: TTicketFetchResponse = {
      startDestinationTickets: { tickets: [...startDestinationTickets], ok: startDestinationTickets.length > 0 },
      endDestinationTickets: {
         tickets: [...endDestinationTickets],
         ok: !searchParams.isOneWay && endDestinationTickets.length > 0,
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
