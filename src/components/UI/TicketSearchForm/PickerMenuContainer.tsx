import { ReactNode, RefObject } from 'react'
import { XMarkIcon } from '@heroicons/react/20/solid'

type TProps = {
   menuRef: RefObject<HTMLDivElement>
   children: ReactNode
   buttonName: string
   handleMenuToggle: void
}

export const PickerMenuContainer = ({ menuRef, children, buttonName, handleMenuToggle }: TProps) => {
   return (
      <div className="fixed left-0 top-16 z-[30] flex h-full w-full flex-col items-center justify-start bg-slate-300/10 smTablet:top-0 smTablet:justify-center">
         <div
            ref={menuRef}
            className="flex h-fit w-full flex-col items-start justify-start smTablet:mb-16 smTablet:w-[480px] baseTablet:justify-center">
            <div className="flex h-12 w-full items-center justify-between border border-slate-200 bg-white px-4 font-openSans text-[16px] font-semibold font-semibold shadow-lg shadow-slate-200 smTablet:mb-4 smTablet:rounded-lg smTablet:px-2">
               <h1>{buttonName}</h1>
               <XMarkIcon className={'w-[24px] cursor-pointer text-slate-600'} onClick={handleMenuToggle as any} />
            </div>
            {children}
         </div>
      </div>
   )
}
