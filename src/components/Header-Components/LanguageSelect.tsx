'use client'

import { useRouter } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'
import { usePathname } from 'next-intl/client'
import { ChangeEvent, useTransition } from 'react'

export const LanguageSelect = () => {
   const t = useTranslations('LocaleSwitcher')
   const [isPending, startTransition] = useTransition()
   const locale = useLocale()
   const router = useRouter()
   const pathname = usePathname()

   function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
      startTransition(() => {
         router.replace(`/${event.target.value}${pathname}`)
      })
   }

   return (
      <label className={`text-gray-400', relative ${isPending && 'transition-opacity [&:disabled]:opacity-30'}`}>
         <select
            className="appearance-none rounded-lg border border-slate-100 bg-slate-200/50 px-4 py-2"
            defaultValue={locale}
            disabled={isPending}
            onChange={onSelectChange}>
            {['en', 'tr'].map(cur => (
               <option key={cur} value={cur}>
                  {t('locale', { locale: cur })}
               </option>
            ))}
         </select>
      </label>
   )
}
