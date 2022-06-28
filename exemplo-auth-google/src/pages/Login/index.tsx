import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'

import { UserContext } from "../../context/UserContext"
import firebaseApp from "../../config/firebase"
import LoginButton from "../../components/LoginButton"
import { Container, ErrorMessage, InfoMessage } from "./styles"

const Login = () => {
  const navigate = useNavigate()
  
  const { token, setToken, setUserName } = useContext(UserContext)

//useEffect aciona após algum item de reinderização. Ele recebe uma função

  useEffect(() => {
    if (token) {
      navigate('/home')
    }
  })

  const [noTokenProvided, setNoTokenProvided ] = useState (false)

  const auth = getAuth(firebaseApp)
  auth.languageCode = 'pt-br'
  const [signInWithGoogle, userCredentials, loading, error] = useSignInWithGoogle(auth)
  
  if (userCredentials) {
    const credentials = GoogleAuthProvider.credentialFromResult(userCredentials)
    const token = credentials?.accessToken
    const { user } = userCredentials
    const userName = user.displayName

    if (token) {
      setToken(token)
      setUserName(userName || '')
      navigate('/home')
    } else {
      setNoTokenProvided(true)

    }
    
  }

  return (
    <Container>
      <LoginButton onClick={signInWithGoogle} />

      {loading && <InfoMessage>Autenticando...</InfoMessage>}

      {error && <ErrorMessage>Autenticação falhou</ErrorMessage>}

      {noTokenProvided && (
        <ErrorMessage>
          Houve um erro ao tentar realizar a autenticação
        </ErrorMessage>
      )}
    </Container>
  )
}

export default Login