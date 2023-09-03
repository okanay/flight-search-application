import useSWR from 'swr'

const fetcher = async (id: string) => {
   const response = await fetch(`https://dummyjson.com/${id}`)
   if (response.ok) {
      const data: Promise<TUser> = response.json()
      return data
   }
}

export const useUser = (id: string | number) => {
   const { isLoading, data: user, error: isError } = useSWR<TUser | undefined>(`users/${String(id)}`, fetcher)
   return { isLoading, isError, user }
}

export type TUsers = {
   limit: number
   skip: number
   total: number
   users: TUser[]
}

export type TUser = {
   id: number
   firstName: string
   lastName: string
   maidenName: string
   age: number
   gender: string
   email: string
   phone: string
   username: string
   password: string
   birthDate: string
   image: string
}
