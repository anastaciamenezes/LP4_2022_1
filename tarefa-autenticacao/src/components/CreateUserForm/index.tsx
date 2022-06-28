import { getAuth } from "firebase/auth"
import React, { useState } from "react"

import firebaseApp from "../../config/firebase"
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

import { Container, CreateUserButton, ErrorMessage, Form, InfoMessage, Input, LoginLink, Title } from "./styles";

const CreateUserForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const auth = getAuth(firebaseApp);
  const [
    createUserWithEmailAndPassword,
    userCredentials,
    loading,
    error
    
  ] = useCreateUserWithEmailAndPassword(auth)

const createUser = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault()
    createUserWithEmailAndPassword(email, password)
}

return (
  <Container>
    <Title>Novo usuário</Title>
    <Form onSubmit={(event) => createUser(event)}>
      <Input
        type='email'
        id='email'
        placeholder='E-mail'
        required
        onChange={(e) => setEmail(e.target.value)} />
      
      <Input
        type='password'
        id='password'
        placeholder='Senha'
        required
        onChange={(e) => setPassword(e.target.value)} />
      
        <CreateUserButton>Criar</CreateUserButton>
    </Form>

    {loading && <InfoMessage>Criando usuário ...</InfoMessage>}

    {error && (
      <ErrorMessage>
          Ocorreu um erro ao tentar criar o usuário
      </ErrorMessage>
    )}

    {userCredentials && (
      <InfoMessage>
        Usuário criado! Clique <LoginLink to='/login'>aqui</LoginLink>
        para realizar o login.
      </InfoMessage>
    )}
  </Container>
)
    }
export default CreateUserForm