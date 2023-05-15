import {
  ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react'
import { api } from '../services/api'

interface User {
  gender: string
  name: {
    title: string
    first: string
    last: string
  }
  dob: {
    age: number
  }
  email: string
  cell: string

  picture: {
    large: string
  }
}

interface Address {
  location: {
    street: {
      number: number
      name: string
    }
    city: string
    state: string
    country: string
    postcode: number
  }
}

interface UserContextData {
  user: User[]
  address: Address[]
}

interface ContextProviderProps {
  children: ReactNode
}

export const UserContext = createContext({} as UserContextData)

export function UserContextProvider({ children }: ContextProviderProps) {
  const [user, setUser] = useState<User[]>([])
  const [address, setAddress] = useState<Address[]>([])

  async function getData() {
    const response = await api.get('/user')
    setUser(response.data.results)
    setAddress(response.data.results)
  }

  useEffect(() => {
    getData()
  }, [])

  console.log(user)

  return (
    <UserContext.Provider value={{ user, address }}>
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  const context = useContext(UserContext)
  return context
}
