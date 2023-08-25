import { TTicketSearchParams } from '../../redux/slices/TicketSlice'

export const validateSearchParams = (searchParams: TTicketSearchParams): number | undefined => {
   if (!searchParams.airportStart!) {
      return 600
   }

   if (!searchParams.airportEnd!) {
      return 601
   }

   if (!searchParams.isoDateStart!) {
      return 602
   }

   if (!searchParams.isOneWay! && !searchParams.isoDateEnd!) {
      return 603
   }

   return undefined
}

export const errorMessage = (status: number | string) => {
   switch (Number(status)) {
      case 404:
         return 'Formu eksik tamamladınız.'
      case 600:
         return 'Kalkış lokasyonunu belirtmediniz.'
      case 601:
         return 'Varış lokasyonunu belirtmediniz.'
      case 602:
         return 'Gidiş tarihi belirtmediniz.'
      case 603:
         return 'Dönüş tarihi belirtmediniz.'
      default:
         return 'Sunucuda hata meydana geldi.'
   }
}
