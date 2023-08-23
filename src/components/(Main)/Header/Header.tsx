import Link from 'next/link'
import { BellAlertIcon, GlobeAltIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'

export const Header = () => {
   return (
      <header className={'mx-auto mb-16'}>
         <nav className={'fixed left-0 top-0 z-[99] h-16 w-full bg-white shadow shadow-gray-100'}>
            <div className={'mx-auto flex h-full w-full max-w-7xl items-center justify-between px-4'}>
               <ul className={'flex h-full w-full items-center justify-start gap-x-4 overflow-y-auto'}>
                  <li className={'mr-4 flex-shrink-0 font-plexSerif text-xl baseTablet:text-3xl lgTablet:mr-8'}>
                     <Link href={'/'}>Flight Case</Link>
                  </li>
                  <li className="skeleton-nav-item h-[20px] w-[64px] lgTablet:w-[80px]" />
                  <li className="skeleton-nav-item h-[20px] w-[56px] lgTablet:w-[64px]" />
                  <li className="skeleton-nav-item h-[20px] w-[72px] lgTablet:w-[88px]" />
                  <li className="skeleton-nav-item h-[20px] w-[80px] lgTablet:w-[96px]" />
                  <li className="skeleton-nav-item h-[20px] w-[88px] lgTablet:w-[104px]" />
               </ul>
               <ul className={'hidden h-full w-fit items-center justify-end gap-x-4 lgTablet:flex'}>
                  <MagnifyingGlassIcon className="skeleton-nav-icon" />
                  <GlobeAltIcon className="skeleton-nav-icon" />
                  <BellAlertIcon className="skeleton-nav-icon" />
               </ul>
            </div>
         </nav>
      </header>
   )
}
