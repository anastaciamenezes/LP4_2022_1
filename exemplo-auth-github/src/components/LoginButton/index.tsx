import { Button, Logo, SignInText } from "./styles"

type Props = {
  onClick: () => void
  authServiceName: string
  logo: string
}

const LoginButton = ({ onClick, authServiceName, logo }: Props) => {
  return (
    <Button onClick={() => onClick()}>
      <Logo src={logo} alt={authServiceName} />
      <SignInText>Entrar {authServiceName}</SignInText>
    </Button>
  )
}

export default LoginButton