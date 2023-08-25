import { NextRequest, NextResponse } from 'next/server'
import { TTicketSearchParams } from '../../../../../redux/slices/TicketSlice'
import { TFlightTicket, TicketMockData } from '../../../../../libs/constants/MockData'
import { IsTicketExist } from '../../../../../libs/helpers/IsTicketExist'
import { validateSearchParams } from '../../../../../libs/helpers/ValidateSearchParams'

export async function GET() {
   const data = [...TicketMockData]
   return NextResponse.json({ data })
}

export async function POST(req: NextRequest) {
   const searchParams: TTicketSearchParams = await req.json()

   console.log(searchParams)
   console.log(TicketMockData)

   const isValid: number | undefined = validateSearchParams(searchParams)
   if (isValid !== undefined) return NextResponse.json({ error: '' }, { status: isValid as number })

   // @ts-ignore
   const startDestinationTickets: TFlightTicket[] = IsTicketExist(searchParams.airportStart.id, searchParams.isoDateStart) || []
   // @ts-ignore
   const endDestinationTickets: TFlightTicket[] = IsTicketExist(searchParams.airportEnd.id, searchParams.isoDateEnd) || []

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
