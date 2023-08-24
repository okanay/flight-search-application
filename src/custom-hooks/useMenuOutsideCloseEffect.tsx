import { Dispatch, RefObject, SetStateAction, useEffect } from 'react'

type TOutsideEffect = {
   buttonRef: RefObject<HTMLButtonElement>
   menuRef: RefObject<HTMLDivElement>
   setIsOpen: Dispatch<SetStateAction<boolean>>
}

const useMenuOutsideCloseEffect = ({ buttonRef, menuRef, setIsOpen }: TOutsideEffect) => {
   const handleOutsideClick = (event: MouseEvent) => {
      if (
         buttonRef.current &&
         !buttonRef.current.contains(event.target as Node) &&
         menuRef.current &&
         !menuRef.current.contains(event.target as Node)
      ) {
         setIsOpen(false)
      }
   }

   useEffect(() => {
      window.addEventListener('mousedown', handleOutsideClick)

      return () => {
         window.removeEventListener('mousedown', handleOutsideClick)
      }
   }, [])
}

export default useMenuOutsideCloseEffect
