import { store } from '../../redux/store'

export type TDateBtnName = 'Gidiş Tarihi' | 'Dönüş Tarihi' | 'Tek Yön'
export type TDestinationBtnName = 'Nereden' | 'Nereye' | 'Tek Yön' | 'Kalkış' | 'İniş'
export type TFetchError = {
   isError: boolean
   status: number | string
}

export type TReduxState = ReturnType<typeof store.getState>
