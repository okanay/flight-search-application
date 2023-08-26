import { number } from 'zod'

export type TDateBtnName = 'Gidiş Tarihi' | 'Dönüş Tarihi' | 'Tek Yön'
export type TDestinationBtnName = 'Nereden' | 'Nereye' | 'Tek Yön' | 'Kalkış' | 'İniş'
export type TFetchError = {
   isError: boolean
   status: number | string
}
