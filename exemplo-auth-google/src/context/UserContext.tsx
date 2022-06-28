import { createContext, ReactNode, useEffect, useState } from "react"

type UserType = {
  token: string
  userName: string
  setToken: (newState: string) => void
  setUserName: (newState: string) => void
}

const initialValue: UserType = {
  token: localStorage.getItem('token') ||'',
  setToken: () => { },
  userName: localStorage.getItem('userName') ||'',
  setUserName: () => {},
}

export const UserContext = createContext(initialValue)

//Criar o provider para encapsular todo  e fornece os valores

type Props = {
  children: ReactNode
}

export const UserContextProvider = ({ children }: Props) => {
  const [ token, setToken ] = useState(initialValue.token)
  const [ userName, setUserName ] = useState(initialValue.userName)

  useEffect(() => { 
    localStorage.setItem('token', token)
    localStorage.setItem('userName', userName)
  }, [token, userName])
  
  
  return (
    <UserContext.Provider value={{
      token,
      setToken,
      userName,
      setUserName
    }}
    >
      {children}
    </UserContext.Provider>
  )
}