import { range } from '../../../../libs/helpers/InlineArray'
import { nanoid } from '@reduxjs/toolkit'

export const TicketListLoading = ({ maxSkeletonCount }: { maxSkeletonCount: number }) => {
   return (
      <div className={'mx-auto flex h-full h-full min-w-[320px] max-w-7xl flex-col items-center justify-center'}>
         <div className={'flex h-full w-full max-w-[800px] flex-col items-start justify-start gap-4 px-4 py-4'}>
            <div className={'ml-4 flex w-full flex-row items-center justify-start gap-4'}>
               <div className="h-[40px] w-[40px] animate-pulse rounded-full bg-slate-400" />
               <div className="h-[45px] w-[175px] animate-pulse rounded-lg bg-slate-400" />
            </div>
            <div className={'ml-4 flex w-full flex-row items-center justify-start gap-4'}>
               <div className="h-[40px] w-[60px] animate-pulse rounded-lg bg-slate-400" />
               <div className="h-[40px] w-[60px] animate-pulse rounded-lg bg-slate-400" />
            </div>
            <div className={'flex h-full w-full max-w-[800px] flex-col items-start justify-start gap-4 px-4 py-4'}>
               {range(0, maxSkeletonCount - 1).map(i => (
                  <TicketCardLoading key={nanoid()} />
               ))}
            </div>
         </div>
      </div>
   )
}

export const TicketCardLoading = () => {
   return (
      <button
         type={'button'}
         className="relative flex w-full flex-col items-start justify-center overflow-hidden rounded-2xl border border-slate-100 bg-gradient-to-tr from-slate-50/50 to-slate-100/20
                  px-4 py-4 shadow shadow-slate-50 transition-all duration-500 hover:scale-105 baseTablet:px-8"
      >
         <div className={'flex w-full items-start justify-between overflow-x-auto'}>
            <div className={'relative z-20 flex flex-col items-start justify-start gap-y-2'}>
               <div className="h-[20px] w-[100px] animate-pulse rounded-lg bg-slate-400 baseTablet:h-[24px] baseTablet:w-[180px]" />
               <div className="h-[20px] w-[60px] animate-pulse rounded-lg bg-slate-400 baseTablet:h-[24px] baseTablet:w-[100px]" />
               <div className="flex h-[48px] animate-pulse flex-col items-start justify-center gap-1 rounded-lg border border-slate-100 bg-slate-700 px-4 baseTablet:h-[60px]">
                  <div className="h-[20px] w-[80px] animate-pulse rounded-lg bg-primary-400 baseTablet:h-[24px] baseTablet:w-[120px]" />
                  <div
                     className={'h-[10px] w-[40px] animate-pulse rounded-lg bg-slate-400 baseTablet:h-[16px] baseTablet:w-[60px]'}
                  />
               </div>
            </div>
            <div className={'absolute inset-0 z-10 flex items-center justify-center'}>
               <div className={'h-full max-h-[120px] w-full max-w-[120px] animate-pulse rounded-full bg-slate-400'} />
            </div>
            <div className={'relative z-20 flex flex-col items-end justify-end gap-y-2'}>
               <div className="h-[20px] w-[100px] animate-pulse rounded-lg bg-slate-400 baseTablet:h-[24px] baseTablet:w-[180px]" />
               <div className="h-[20px] w-[60px] animate-pulse rounded-lg bg-slate-400 baseTablet:h-[24px] baseTablet:w-[100px]" />
               <div
                  className="flex h-[48px] animate-pulse flex-col items-center justify-center gap-1 rounded-lg
                           border border-slate-200 bg-slate-700 px-4 text-center text-[14px] baseTablet:h-[60px] baseTablet:text-[20px]"
               >
                  <div className="h-[20px] w-[60px] animate-pulse rounded-lg bg-primary-400 baseTablet:h-[24px] baseTablet:w-[100px]" />
               </div>
            </div>
         </div>
      </button>
   )
}
