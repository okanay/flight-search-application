import { TAirport, TCountry } from '../constants/MockData'

export function DestinationFilter(
   withoutAirport: TAirport[],
   selectedCountry: TCountry | undefined,
   searchInput: string | null | undefined,
): TAirport[] {
   const withSelectedCountry: TAirport[] = withoutAirport.filter(airport => {
      if (selectedCountry !== undefined) {
         if (airport.countryId === selectedCountry.id) return airport
      } else {
         return airport
      }
   })

   const findSearchParamsItem = (): TAirport[] => {
      if (searchInput !== null && searchInput !== '' && searchInput !== undefined) {
         //
         const searchInputCleaned = searchInput.toLocaleLowerCase('tr-TR')
         //
         return withoutAirport.filter(airport => {
            return (
               airport.name.toLocaleLowerCase('tr-TR').includes(searchInputCleaned) ||
               airport.continent.toLocaleLowerCase('tr-TR').includes(searchInputCleaned) ||
               airport.city.toLocaleLowerCase('tr-TR').includes(searchInputCleaned) ||
               airport.countryName.toLocaleLowerCase('tr-TR').includes(searchInputCleaned) ||
               airport.code.toLocaleLowerCase('tr-TR').includes(searchInputCleaned)
            )
         })
         //
      }

      return withSelectedCountry
   }

   return findSearchParamsItem()
}
