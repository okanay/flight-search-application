import { TTicketSearchParams } from '../../redux/slices/TicketSearchParamsSlice'
import { CustomError } from './CustomError'
import { TValidationSearchParams } from '@/app/(main)/tickets/paramsresult/page'

export const ValidateStateParams = (searchParams: TTicketSearchParams): number | undefined => {
   if (!searchParams.airportStart!) {
      return 600
   }

   if (!searchParams.airportEnd!) {
      return 601
   }

   if (!searchParams.isoDateStart!) {
      return 602
   }

   if (searchParams.isRoundTrip! && !searchParams.isoDateEnd!) {
      return 603
   }

   if (searchParams.isRoundTrip === undefined) {
      return 604
   }

   return undefined
}

export function ValidateSearchParams(searchParams: TValidationSearchParams) {
   const { startId, startDate, endId, endDate, trip, state } = searchParams

   if (startId === undefined) {
      throw new CustomError('600', 600)
   }

   if (endId === undefined) {
      throw new CustomError('601', 601)
   }

   if (startDate === undefined) {
      throw new CustomError('602', 602)
   }

   if (trip === undefined) {
      throw new CustomError('604', 604)
   }

   if (endDate === undefined && trip === 'true') {
      throw new CustomError('603', 600)
   }
}

export const errorMessage = (status: number | string) => {
   switch (Number(status)) {
      case 404:
         return 'Formu eksik tamamladınız.'
      case 600:
         return 'Kalkış lokasyonunu eksik.'
      case 601:
         return 'Varış lokasyonunu eksik.'
      case 602:
         return 'Gidiş tarihi eksik.'
      case 603:
         return 'Dönüş tarihi eksik.'
      case 604:
         return 'Gidiş Dönüş Durumu eksik.'
      default:
         return 'Sunucuda hata meydana geldi.'
   }
}
