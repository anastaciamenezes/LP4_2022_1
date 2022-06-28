import { createContext, ReactNode, useEffect, useState } from "react";

//Adiciona todas as propriedades que o usuario quer inserir
type UserType = {
  token: string
  setToken: (newState: string) => void
}

const initialValue: UserType = {
  token: localStorage.getItem('token') || '',
  setToken: () => {},
}

export const UserContext = createContext(initialValue)

type UserContextProps = {
 children: ReactNode
}

//criar um provider para encapsular toda a aplicação e o código que vai ser capaz de alteração
//Receber as props e os componentes que serão reinderizados

export const UserContextProvider = ({ children }: UserContextProps) => {
  const [token, setToken] = useState(initialValue.token)

  //criar um código que vai ser capaz de alteração automaticamente.
  //para gravar usa 

  useEffect(() => {
    console.log('Entrou')
    localStorage.setItem('token', token)
  }, [token])

  return (
    <UserContext.Provider value={{ token, setToken }}>
      {children}
    </UserContext.Provider>
  )
}

