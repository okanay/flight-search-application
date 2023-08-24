'use client'

import React from 'react'
import { ReactNode } from 'react'

import { PersistGate as ReduxPersistProvider } from 'redux-persist/integration/react'
import { Provider as ReduxProvider } from 'react-redux'
import { persistor, store } from '../../redux/store'

type TProps = {
   children: ReactNode
}

export const Providers = ({ children }: TProps) => {
   return (
      <>
         <ReduxProvider store={store}>
            <ReduxPersistProvider persistor={persistor}>{children}</ReduxPersistProvider>
         </ReduxProvider>
      </>
   )
}
