import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

export function NextLabel() {
   return (
      <div className={'flex h-full w-full flex-col items-center justify-center'}>
         <ChevronRightIcon className={'w-[20px]'} />
      </div>
   )
}

export function Next2Label() {
   return (
      <div className={'flex h-full w-full flex-col items-center justify-center'}>
         <ChevronDoubleRightIcon className={'w-[24px]'} />
      </div>
   )
}

export function PrevLabel() {
   return (
      <div className={'flex h-full w-full flex-col items-center justify-center'}>
         <ChevronLeftIcon className={'w-[20px]'} />
      </div>
   )
}

export function Prev2Label() {
   return (
      <div className={'flex h-full w-full flex-col items-center justify-center'}>
         <ChevronDoubleLeftIcon className={'w-[24px]'} />
      </div>
   )
}
