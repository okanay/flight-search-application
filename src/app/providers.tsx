'use client'

import { ReactNode } from 'react'

import React from 'react'

import { Provider as ReduxProvider } from 'react-redux'
import store from '../../redux/store'

type TProps = {
   children: ReactNode
}

export const Providers = ({ children }: TProps) => {
   return (
      <>
         <ReduxProvider store={store}>{children}</ReduxProvider>
      </>
   )
}
