import { TAirport, TCountry } from '../constants/MockData'

export function DestinationFilter(
   withoutAirport: TAirport[],
   selectedCountry: TCountry | undefined,
   searchInput: string | null | undefined,
): TAirport[] {
   const withSelectedCountry: TAirport[] = withoutAirport.filter(a => {
      if (selectedCountry !== undefined) {
         if (a.countryId === selectedCountry.id) return a
      } else {
         return a
      }
   })

   const findSearchParamsItem = (): TAirport[] => {
      if (searchInput !== null && searchInput !== '' && searchInput !== undefined) {
         //
         const searchInputCleaned = searchInput.toLocaleLowerCase('tr-TR')
         //
         return withoutAirport.filter(a => {
            return (
               a.name.toLocaleLowerCase('tr-TR').includes(searchInputCleaned) ||
               a.continent.toLocaleLowerCase('tr-TR').includes(searchInputCleaned) ||
               a.city.toLocaleLowerCase('tr-TR').includes(searchInputCleaned) ||
               a.countryName.toLocaleLowerCase('tr-TR').includes(searchInputCleaned) ||
               a.code.toLocaleLowerCase('tr-TR').includes(searchInputCleaned)
            )
         })
         //
      }

      return withSelectedCountry
   }

   return findSearchParamsItem()
}
