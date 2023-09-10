export const Footer = () => {
   return (
      <footer
         className={
            'mt-16 flex flex-row flex-wrap items-center justify-center gap-1.5 pb-16 font-openSans text-[12px] font-semibold'
         }
      >
         <a
            className={'rounded-3xl bg-sky-400 px-2 py-1 text-white'}
            rel="noreferrer noopener"
            target="_blank"
            href="https://coderspace.io/etkinlikler/travel-to-future-program/"
         >
            Amadeus
         </a>
         <a
            className={'rounded-3xl bg-slate-800 px-2 py-1 text-white'}
            rel="noreferrer noopener"
            target="_blank"
            href="https://docs.google.com/document/d/1eIxBEaWg7WoNIKWgW260jofdFKRRkOR-Wz_c5MNZ7D8/edit?pli=1"
         >
            Demo | Flight Search Application
         </a>
         <a
            className={'rounded-3xl bg-primary-400 px-2 py-1 text-white'}
            rel="noreferrer noopener"
            target="_blank"
            href="https://www.linkedin.com/in/wokanay/"
         >
            Okan Ay
         </a>
         <a
            className={'rounded-3xl bg-pink-400 px-2 py-1 text-white'}
            rel="noreferrer noopener"
            target="_blank"
            href="https://www.okanay.com/"
         >
            www.okanay.com
         </a>
      </footer>
   )
}
