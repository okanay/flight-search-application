export const Footer = () => {
   return (
      <footer
         className={
            'mt-16 flex flex-row flex-wrap items-center justify-center gap-1.5 pb-16 font-openSans text-[12px] font-semibold'
         }>
         <p className={'rounded-3xl bg-sky-400 px-2 py-1 text-white'}>Amadeus</p>
         <p className={'rounded-3xl bg-slate-800 px-2 py-1 text-white'}>Demo | Flight Search Application</p>
         <p className={'rounded-3xl bg-primary-400 px-2 py-1 text-white'}>Okan Ay</p>
         <a
            className={'rounded-3xl bg-pink-400 px-2 py-1 text-white'}
            rel="noreferrer noopener"
            target="_blank"
            href="https://www.okanay.com/">
            www.okanay.com
         </a>
      </footer>
   )
}
