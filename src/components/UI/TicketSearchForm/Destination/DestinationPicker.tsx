import { TAirport, TCountry } from '../../../../../libs/constants/MockData'
import { TDestinationBtnName } from '../../../../../libs/types/types'
import { Dispatch, RefObject, SetStateAction, useEffect, useRef, useState } from 'react'
import useMenuOutsideCloseEffect from '@/custom-hooks/useMenuOutsideCloseEffect'
import { PickerMenuContainer } from '@/components/UI/TicketSearchForm/PickerMenuContainer'
import { nanoid } from '@reduxjs/toolkit'

type TProps = {
   buttonName: TDestinationBtnName
   selectedDestination: TAirport | undefined
   selectedCountry: TCountry | undefined
   airportsList: TAirport[]
   countryList: TCountry[]
   handleAirportDestinationChange: (value: TAirport) => void
   searchInputRef: RefObject<HTMLInputElement>
   setSelectedCountry: Dispatch<SetStateAction<TCountry | undefined>>
   setSearchInput: Dispatch<SetStateAction<string | null | undefined>>
   searchInputOnChange: void
}

export const DestinationPicker = ({
   buttonName,
   selectedDestination,
   selectedCountry,
   airportsList,
   countryList,
   handleAirportDestinationChange,
   searchInputRef,
   setSelectedCountry,
   setSearchInput,
   searchInputOnChange,
}: TProps) => {
   const [isOpen, setIsOpen] = useState(false)

   const buttonRef = useRef<HTMLButtonElement>(null)
   const menuRef = useRef<HTMLDivElement>(null)

   const handleMenuToggle = () => setIsOpen(prev => !prev)

   useMenuOutsideCloseEffect({ buttonRef, menuRef, setIsOpen })

   useEffect(() => {
      if (!isOpen) {
         setSearchInput('')
      }
   }, [isOpen, setSearchInput])

   const handleSetCountry = (c: TCountry) => {
      if (selectedCountry?.name === c.name) return setSelectedCountry(undefined)

      setSelectedCountry(c)
   }
   return (
      <div className={`relative flex w-fit flex-col items-start`}>
         <button
            type={'button'}
            className={`h-[64px] w-[200px] border-b-[2px] text-slate-600 transition-colors duration-300 hover:border-b-primary-400 focus:border-b-primary-400
             ${isOpen ? 'border-b-primary-400' : 'border-b-slate-400'}`}
            ref={buttonRef}
            onClick={handleMenuToggle as any}>
            <>
               {selectedDestination === undefined ? (
                  <span className={'flex flex-col items-start justify-center text-slate-600'}>
                     <span className={'text-[16px] font-semibold'}>{buttonName}</span>
                  </span>
               ) : (
                  <span className={'flex flex-col items-start justify-center text-slate-600'}>
                     <span className={'text-[12px]'}>{buttonName}</span>
                     <span className={'text-[16px] font-semibold'}>{selectedDestination.name}</span>
                     <span className={'text-[12px] font-semibold'}>
                        {selectedDestination.countryName}/{selectedDestination.city}
                     </span>
                  </span>
               )}
            </>
         </button>
         {isOpen && (
            <PickerMenuContainer menuRef={menuRef} handleMenuToggle={handleMenuToggle as any} buttonName={buttonName}>
               <div className="react-calendar flex h-full flex-col items-start justify-start shadow shadow-slate-200 smTablet:h-[300px]">
                  <input
                     ref={searchInputRef}
                     onChange={searchInputOnChange as any}
                     type={'text'}
                     className="relative z-20 w-full border-2 border-transparent bg-slate-50 px-2 py-4 font-openSans font-semibold text-slate-800 placeholder-slate-500 focus:border-primary-600 focus:outline-0"
                     placeholder={'Havalimani Ara...'}
                  />
                  {/*Airports and Country*/}
                  <div className={'flex h-full w-full flex-row shadow shadow-slate-200'}>
                     {/*Airports*/}
                     <div className={'flex h-full w-full flex-col gap-2 bg-white pb-4'}>
                        <h2
                           className={
                              'w-full bg-gradient-to-l from-primary-300 to-primary-400 px-2 py-4 text-start text-[16px] font-semibold text-white'
                           }>
                           Havalimanlari
                        </h2>
                        <div className={'flex h-full w-full flex-col gap-2 overflow-y-auto pr-4'}>
                           {airportsList.map(a => (
                              <button
                                 type={'button'}
                                 key={nanoid()}
                                 onClick={() => handleAirportDestinationChange(a)}
                                 className={`relative flex w-full flex-col px-2 text-start transition-all duration-300 ${
                                    selectedDestination?.name === a.name
                                       ? 'bg-gradient-to-r from-primary-400 to-primary-300 text-slate-50 hover:opacity-80'
                                       : 'text-slate-600 hover:bg-slate-200 hover:opacity-90'
                                 }`}>
                                 <span className={'text-[14px] font-bold'}>{a.name}</span>
                                 <span className={'text-[10px]'}>
                                    {a.countryName}/{a.continent}
                                 </span>
                              </button>
                           ))}
                        </div>
                     </div>
                     {/*Country*/}
                     <div className={'flex h-full w-full flex-col gap-2 bg-white pb-4'}>
                        <h2
                           className={
                              'w-full bg-gradient-to-l from-primary-400 to-primary-300 px-2 py-4 text-start text-[16px] font-semibold text-white'
                           }>
                           Ülkeler
                        </h2>
                        <div className={'flex h-full w-full flex-col gap-2 overflow-y-auto pr-4'}>
                           {countryList.map(c => (
                              <button
                                 key={nanoid()}
                                 type={'button'}
                                 onClick={() => {
                                    handleSetCountry(c)
                                 }}
                                 className={`relative flex w-full flex-col px-2 text-start transition-all duration-300 ${
                                    selectedCountry?.name === c.name
                                       ? 'bg-gradient-to-l from-primary-400 to-primary-300 text-slate-50 hover:opacity-80'
                                       : 'text-slate-600 hover:bg-slate-200 hover:opacity-90'
                                 }`}>
                                 <span className={'text-[14px] font-bold'}>{c.name}</span>
                                 <span className={'text-[10px]'}>{c.continent}</span>
                              </button>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
            </PickerMenuContainer>
         )}
      </div>
   )
}
