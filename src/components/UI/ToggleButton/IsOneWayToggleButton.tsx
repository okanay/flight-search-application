'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getIsOneWay, toggleIsOneWay } from '../../../../redux/slices/TicketSlice'

const selectableTab = [
   {
      id: 0,
      name: 'Gidiş Dönüş',
      active: false,
   },
   {
      id: 1,
      name: 'Tek Yön',
      active: true,
   },
]

export const IsOneWayToggleButton = () => {
   const dispatch = useDispatch()
   const isOneWay = useSelector(getIsOneWay)

   return (
      <button type={'button'} onClick={() => dispatch(toggleIsOneWay())} className={'group flex flex-col'}>
         <div className="group flex flex-row justify-between gap-4 rounded-lg border border-slate-200 bg-gradient-to-tr from-slate-200 to-slate-100 px-2 py-2 font-openSans shadow shadow-slate-200">
            {selectableTab.map(item => (
               <div
                  key={item.id}
                  className={`relative flex-shrink-0 rounded-full px-4 py-2 text-[14px] transition-opacity duration-300 ${
                     isOneWay === item.active ? 'group-hover:opacity-80' : ''
                  }`}>
                  {isOneWay === item.active && (
                     <motion.div
                        layoutId={'active-pill'}
                        style={{ borderRadius: 8 }}
                        className={'absolute inset-0 bg-gradient-to-tr from-primary-300 to-primary-400'}
                     />
                  )}
                  <p
                     className={`relative z-20 transition-colors duration-700 ${
                        isOneWay === item.active ? 'text-white' : 'text-slate-600'
                     }`}>
                     {item.name}
                  </p>
               </div>
            ))}
         </div>
      </button>
   )
}
