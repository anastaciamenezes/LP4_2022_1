//Criar componente para autenticação

import React, { useContext, useState } from "react"
import { getAuth } from 'firebase/auth'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'

import firebaseApp from "../../config/firebase"
import { UserContext } from "../../context/UserContext"
import { useNavigate } from "react-router-dom"
import { Container, ErrorMessage, Form, InfoMessage, Input, SignInButton } from "./styles"

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const auth = getAuth(firebaseApp)
  const [signInWithEmailAndPassword, userCredentials, loading, error] =
    useSignInWithEmailAndPassword(auth)
  
  const doLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    signInWithEmailAndPassword(email, password)
  }

  const { setToken } = useContext(UserContext)
  const navigate = useNavigate()

  if (userCredentials) {
    const { user } = userCredentials
    user
      .getIdToken()
      .then((token) => {
      setToken(token)
      navigate("/home")
      })
      .catch((error) => console.log(error))
  }

  return (
    <Container>
      <Form onSubmit={(event) => doLogin(event)}>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Senha"
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <SignInButton>Entrar</SignInButton>
      </Form>

      {loading && <InfoMessage>Autenticando...</InfoMessage>}

      {error && <ErrorMessage>Credenciais inválidas</ErrorMessage>}
    </Container>
  )

}

export default LoginForm