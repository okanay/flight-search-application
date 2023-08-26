'use client'
import { TrashIcon } from '@heroicons/react/20/solid'
import { useDispatch } from 'react-redux'
import { clearFilter } from '../../../../redux/slices/TicketSearchParamsSlice'

export const TicketFilterClear = () => {
   const dispatch = useDispatch()

   return (
      <button
         onClick={() => dispatch(clearFilter())}
         type={'button'}
         className={
            'absolute left-2 top-2 flex h-[28px] w-[28px] items-center justify-center rounded-full border border-slate-200 bg-slate-100 transition-opacity duration-300 hover:opacity-80 baseTablet:left-4 baseTablet:top-4 baseTablet:h-[36px] baseTablet:w-[36px]'
         }>
         <TrashIcon className={'w-[24px] scale-y-95 text-primary-400 baseTablet:w-[30px]'} />
      </button>
   )
}
