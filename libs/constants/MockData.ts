export type TContinentNames = 'Avrupa' | 'Asya' | 'Kuzey Amerika' | 'Güney Amerika' | 'Afrika' | 'Avustralya' | 'Antarktika'
export type TCountryNames = 'Türkiye' | 'Almanya' | 'Fransa' | 'USA' | 'Kanada'
export type TCityName =
   | 'İstanbul'
   | 'Antalya'
   | 'İzmir'
   | 'Ankara'
   | 'Muğla'
   | 'Frankfurt'
   | 'Münih'
   | 'Paris'
   | 'Nice'
   | 'New York'
   | 'Los Angeles'
   | 'Vancouver'
   | 'Toronto'

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

export type TFlightTicket = {
   ticketId: number
   destinationStart: TAirport
   destinationEnd: TAirport
   isoFlightDate: string
   ticketPrice: number
}

const CountriesMockData: TCountry[] = [
   { id: 1, name: 'Türkiye', continent: 'Avrupa' },
   { id: 2, name: 'Almanya', continent: 'Avrupa' },
   { id: 3, name: 'Fransa', continent: 'Avrupa' },
   { id: 4, name: 'USA', continent: 'Kuzey Amerika' },
   { id: 5, name: 'Kanada', continent: 'Kuzey Amerika' },
]

const AirportsMockData: TAirport[] = [
   {
      id: 1,
      countryId: 1,
      countryName: 'Türkiye',
      continent: 'Avrupa',
      name: 'İstanbul Havalimani',
      city: 'İstanbul',
      code: 'IST',
   },
   {
      id: 2,
      countryId: 1,
      continent: 'Asya',
      countryName: 'Türkiye',
      name: 'İstanbul Sabiha Gökçen',
      city: 'İstanbul',
      code: 'SAW',
   },
   {
      id: 3,
      countryId: 1,
      continent: 'Asya',
      countryName: 'Türkiye',
      name: 'Antalya',
      city: 'Antalya',
      code: 'AYT',
   },
   {
      id: 4,
      countryId: 1,
      continent: 'Asya',
      countryName: 'Türkiye',
      name: 'İzmir',
      city: 'İzmir',
      code: 'ADB',
   },
   {
      id: 5,
      countryId: 1,
      continent: 'Asya',
      countryName: 'Türkiye',
      name: 'Ankara',
      city: 'Ankara',
      code: 'ESB',
   },
   {
      id: 6,
      countryId: 1,
      continent: 'Asya',
      countryName: 'Türkiye',
      name: 'Dalaman',
      city: 'Muğla',
      code: 'DLM',
   },
   {
      id: 7,
      countryId: 1,
      continent: 'Asya',
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
   // Amerika
   {
      id: 12,
      countryId: 4,
      continent: 'Kuzey Amerika',
      countryName: 'USA',
      name: 'New York',
      city: 'New York',
      code: 'NYC',
   },
   {
      id: 13,
      countryId: 4,
      continent: 'Kuzey Amerika',
      countryName: 'USA',
      name: 'Los Angeles',
      city: 'Los Angeles',
      code: 'LAX',
   },
   // Kanada
   {
      id: 14,
      countryId: 5,
      continent: 'Kuzey Amerika',
      countryName: 'Kanada',
      name: 'Toronto',
      city: 'Toronto',
      code: 'YYZ',
   },
   {
      id: 15,
      countryId: 5,
      continent: 'Kuzey Amerika',
      countryName: 'Kanada',
      name: 'Vancouver',
      city: 'Vancouver',
      code: 'YVR',
   },
]

const TicketMockData: TFlightTicket[] = [
   {
      ticketId: 5,
      destinationStart: AirportsMockData[11], // New York
      destinationEnd: AirportsMockData[12], // Los Angeles
      isoFlightDate: '2023-08-30T16:30:00+03:00', // 30 Ağustos 2023, saat 16:30
      ticketPrice: 1142,
   },
   {
      ticketId: 6,
      destinationStart: AirportsMockData[14], // Toronto
      destinationEnd: AirportsMockData[1], // İstanbul Sabiha Gökçen
      isoFlightDate: '2023-08-31T17:45:00+03:00', // 31 Ağustos 2023, saat 17:45
      ticketPrice: 1449,
   },
   {
      ticketId: 2,
      destinationStart: AirportsMockData[2], // Antalya
      destinationEnd: AirportsMockData[6], // Bodrum
      isoFlightDate: '2023-08-27T13:30:00+03:00', // 27 Ağustos 2023, saat 13:30
      ticketPrice: 1399,
   },
   {
      ticketId: 3,
      destinationStart: AirportsMockData[5], // Dalaman
      destinationEnd: AirportsMockData[9], // Paris
      isoFlightDate: '2023-08-28T14:45:00+03:00', // 28 Ağustos 2023, saat 14:45
      ticketPrice: 899,
   },
   {
      ticketId: 4,
      destinationStart: AirportsMockData[7], // Frankfurt
      destinationEnd: AirportsMockData[10], // Nice
      isoFlightDate: '2023-08-29T15:15:00+03:00', // 29 Ağustos 2023, saat 15:15
      ticketPrice: 1764,
   },
   {
      ticketId: 1,
      destinationStart: AirportsMockData[0], // İstanbul Havalimanı
      destinationEnd: AirportsMockData[3], // İzmir
      isoFlightDate: '2023-08-26T12:00:00+03:00', // 26 Ağustos 2023, saat 12:00
      ticketPrice: 1699,
   },
   {
      ticketId: 1,
      destinationStart: AirportsMockData[0], // İstanbul Havalimanı
      destinationEnd: AirportsMockData[3], // İzmir
      isoFlightDate: '2023-08-26T11:00:00+03:00', // 26 Ağustos 2023, saat 12:00
      ticketPrice: 1940,
   },
]

export { TicketMockData, CountriesMockData, AirportsMockData }
