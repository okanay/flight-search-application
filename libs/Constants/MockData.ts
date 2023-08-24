export type TContinentNames = 'Avrupa' | 'Asya' | 'Kuzey Amerika' | 'Güney Amerika' | 'Afrika' | 'Avustralya' | 'Antarktika'
export type TCountryNames = 'Türkiye' | 'Almanya' | 'Fransa'
export type TCityName = 'İstanbul' | 'Antalya' | 'İzmir' | 'Ankara' | 'Muğla' | 'Frankfurt' | 'Münih' | 'Paris' | 'Nice'

export type TAirport = {
   id: number
   countryId: number
   countryName: TCountryNames
   continent: TContinentNames
   name: string
   city: TCityName
   code: string
}

export type TCountry = {
   id: number
   name: TCountryNames
   continent: TContinentNames
}

const CountriesMockData: TCountry[] = [
   { id: 1, name: 'Türkiye', continent: 'Avrupa' },
   { id: 2, name: 'Almanya', continent: 'Avrupa' },
   { id: 3, name: 'Fransa', continent: 'Avrupa' },
]

const AirportsMockData: TAirport[] = [
   {
      id: 1,
      countryId: 1,
      countryName: 'Türkiye',
      continent: 'Avrupa',
      name: 'Istanbul Avrupa',
      city: 'İstanbul',
      code: 'IST',
   },
   {
      id: 2,
      countryId: 1,
      continent: 'Avrupa',
      countryName: 'Türkiye',
      name: 'Istanbul Asya',
      city: 'İstanbul',
      code: 'SAW',
   },
   {
      id: 3,
      countryId: 1,
      continent: 'Avrupa',
      countryName: 'Türkiye',
      name: 'Antalya',
      city: 'Antalya',
      code: 'AYT',
   },
   {
      id: 4,
      countryId: 1,
      continent: 'Avrupa',
      countryName: 'Türkiye',
      name: 'İzmir',
      city: 'İzmir',
      code: 'ADB',
   },
   {
      id: 5,
      countryId: 1,
      continent: 'Avrupa',
      countryName: 'Türkiye',
      name: 'Ankara',
      city: 'Ankara',
      code: 'ESB',
   },
   {
      id: 6,
      countryId: 1,
      continent: 'Avrupa',
      countryName: 'Türkiye',
      name: 'Dalaman',
      city: 'Muğla',
      code: 'DLM',
   },
   {
      id: 7,
      countryId: 1,
      continent: 'Avrupa',
      countryName: 'Türkiye',
      name: 'Bodrum',
      city: 'Muğla',
      code: 'BJV',
   },
   // Almanya
   {
      id: 8,
      countryId: 2,
      continent: 'Avrupa',
      countryName: 'Almanya',
      name: 'Frankfurt',
      city: 'Frankfurt',
      code: 'FRA',
   },
   {
      id: 9,
      countryId: 2,
      continent: 'Avrupa',
      name: 'Münih',
      countryName: 'Almanya',
      city: 'Münih',
      code: 'MUC',
   },
   // Fransa
   {
      id: 10,
      countryId: 3,
      continent: 'Avrupa',
      countryName: 'Fransa',
      name: 'Paris',
      city: 'Paris',
      code: 'CDG',
   },
   {
      id: 11,
      countryId: 3,
      continent: 'Avrupa',
      countryName: 'Fransa',
      name: 'Nice',
      city: 'Nice',
      code: 'NCE',
   },
]

export { CountriesMockData, AirportsMockData }
