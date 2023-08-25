'use client'

import React from 'react'
import { ReactNode } from 'react'

import { PersistGate as ReduxPersistProvider } from 'redux-persist/integration/react'
import { Provider as ReduxProvider } from 'react-redux'
import { persistor, store } from '../../redux/store'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

type TProps = {
   children: ReactNode
}

const queryClient = new QueryClient()

export const Providers = ({ children }: TProps) => {
   return (
      <>
         <QueryClientProvider client={queryClient}>
            <ReduxProvider store={store}>
               <ReduxPersistProvider persistor={persistor}>{children}</ReduxPersistProvider>
            </ReduxProvider>
         </QueryClientProvider>
      </>
   )
}
