'use client'

import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { getSearchType, toggleSearchType, TSearchType } from '../../../../redux/slices/TicketSearchParamsSlice'
import { nanoid } from '@reduxjs/toolkit'

const selectableTab = [
   {
      name: 'reduxState' as TSearchType,
      text: 'STATE',
   },
   {
      name: 'searchParams' as TSearchType,
      text: 'URL',
   },
]

export const TicketFormSearchTypeToggle = () => {
   const dispatch = useDispatch()
   const searchType = useSelector(getSearchType)

   return (
      <button
         type={'button'}
         onClick={() => {
            dispatch(toggleSearchType())
         }}
         className={'group flex flex-col'}>
         <div
            className="group absolute right-2 top-4 flex flex-row justify-between gap-2
          border border-slate-200 bg-gradient-to-tr from-slate-200 to-slate-100 px-1 py-2 font-openSans shadow shadow-slate-200">
            {selectableTab.map(item => (
               <div
                  key={nanoid()}
                  className={`relative rounded-full px-1 py-1 transition-opacity duration-300 ${
                     searchType === item.name ? 'group-hover:opacity-80' : ''
                  }`}>
                  {searchType === item.name && (
                     <motion.div
                        layoutId={'active-pill-searchType'}
                        style={{ borderRadius: 8 }}
                        className={'absolute inset-0 bg-gradient-to-tr from-primary-300 to-primary-400'}
                     />
                  )}
                  <p
                     className={`relative z-20 text-[8px] font-semibold tracking-wide transition-colors duration-700 ${
                        searchType === item.name ? 'text-white' : 'text-slate-600'
                     }`}>
                     {item.text}
                  </p>
               </div>
            ))}
         </div>
      </button>
   )
}
