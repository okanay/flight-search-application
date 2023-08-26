'use client'

import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import {
   getIsSearchFilterTypeStateOrParams,
   toggleIsSearchFilterTypeStateOrParams,
} from '../../../../redux/slices/TicketSearchParamsSlice'

const selectableTab = [
   {
      id: 0,
      name: 'STATE',
      active: false,
   },
   {
      id: 1,
      name: 'URL',
      active: true,
   },
]

export const SearchParamsOrStateToggle = () => {
   const dispatch = useDispatch()
   const isSearchParams = useSelector(getIsSearchFilterTypeStateOrParams)

   return (
      <button
         type={'button'}
         onClick={() => {
            dispatch(toggleIsSearchFilterTypeStateOrParams())
         }}
         className={'group flex flex-col'}>
         <div className="group absolute right-0 top-0 flex flex-row justify-between gap-2 border border-slate-200 bg-gradient-to-tr from-slate-200 to-slate-100 px-1 py-2 font-openSans shadow shadow-slate-200">
            {selectableTab.map(item => (
               <div
                  key={item.id}
                  className={`relative rounded-full px-1 py-1 transition-opacity duration-300 ${
                     isSearchParams === item.active ? 'group-hover:opacity-80' : ''
                  }`}>
                  {isSearchParams === item.active && (
                     <motion.div
                        layoutId={'active-pill-params-or-state'}
                        style={{ borderRadius: 8 }}
                        className={'absolute inset-0 bg-gradient-to-tr from-primary-300 to-primary-400'}
                     />
                  )}
                  <p
                     className={`relative z-20 text-[8px] font-semibold tracking-wide transition-colors duration-700 ${
                        isSearchParams === item.active ? 'text-white' : 'text-slate-600'
                     }`}>
                     {item.name}
                  </p>
               </div>
            ))}
         </div>
      </button>
   )
}
