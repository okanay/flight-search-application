import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'

import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'

import TicketSearchParamsReducer from './slices/TicketSearchParamsSlice'
import TicketSearchFormErrorReducer from './slices/TicketSearchFormErrorSlice'

const persistConfig = {
   key: 'root',
   storage,
   whitelist: ['ticketSearchParamsSlice'],
   blacklist: ['ticketSearchFormErrorSlice'],
}

const reducers = combineReducers({
   ticketSearchParamsSlice: TicketSearchParamsReducer,
   ticketSearchFormErrorSlice: TicketSearchFormErrorReducer,
})

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
   reducer: persistedReducer,
   middleware: [thunk],
})

export const persistor = persistStore(store)
