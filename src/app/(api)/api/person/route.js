import { NextResponse } from 'next/server'
import { nanoid } from '@reduxjs/toolkit'

export async function GET() {
   const data = {
      id: nanoid(),
      name: 'okan',
   }

   return NextResponse.json({ data })
}
