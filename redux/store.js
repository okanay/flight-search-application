import { combineReducers, configureStore } from '@reduxjs/toolkit'
import TicketReducer from './slices/TicketSlice'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'

const persistConfig = {
   key: 'root',
   storage,
   whitelist: ['ticketSlice'],
   blacklist: [],
}

const reducers = combineReducers({
   ticketSlice: TicketReducer,
})

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
   reducer: persistedReducer,
   middleware: [thunk],
})

export const persistor = persistStore(store)
