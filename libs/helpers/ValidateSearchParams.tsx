import { TTicketSearchParams } from '../../redux/slices/TicketSearchParamsSlice'

export const ValidateSearchParams = (searchParams: TTicketSearchParams): number | undefined => {
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

   return undefined
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
      default:
         return 'Sunucuda hata meydana geldi.'
   }
}
