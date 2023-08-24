import { format } from 'date-fns'
import { tr } from 'date-fns/locale'

export function FormattedDate(isoFlightDate: string | undefined | Date) {
   let formattedDate = ''
   let dayName = ''

   if (isoFlightDate !== undefined) {
      const parsedDate = new Date(isoFlightDate)
      formattedDate = format(parsedDate, 'dd MMMM', { locale: tr })
      dayName = format(parsedDate, 'EEEE', { locale: tr })
   }

   return { formattedDate, dayName }
}
