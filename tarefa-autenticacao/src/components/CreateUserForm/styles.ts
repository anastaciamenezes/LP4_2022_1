import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  padding: 10px;
`
export const Title = styled.h1`
  color: #8c14fc;
  font-family: 'bold';
  text-align: center;
`

export const Form = styled.form`
  width: 300px;
  margin: 50px auto 20px auto;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 5px 5px 7px #d5b8ff;
  text-align: center;
`
export const Input = styled.input`
  width: 80%;
  border: none;
  border-radius: 5px;
  height: 30px;
  padding: 0 5px;
  text-align: center;
  font-size: 100%;
  font-family: 'regular';
  box-shadow: 3px 3px 5px #d5b8ff, -1px -1px 2px #d5b8ff;
  margin-bottom: 10px;

    :focus {
        outline: 3px solid #d5b8ff;
    }
`

export const CreateUserButton = styled.button`
  display: block;
  margin: 10px auto 0 auto;
  width: 100px;
  background-color: #8c14fc;
  color: white;
  font-size: 100%;
  border: none;
  border-radius: 5px;
  padding: 10px 0;
  outline: none;
  cursor: pointer;
  font-family: 'bold';
`

export const InfoMessage = styled.p`
  font-family: 'bold';
  color: #8c14fc;
  text-align: center;
  margin-top: 10px;
`
export const ErrorMessage = styled.p`
  font-family: 'bold';
  color: #ff4c30;
  text-align: center;
  margin-top: 10px;
`
export const LoginLink = styled(Link)`
  text-decoration:none;
  color: #bf55ec;
  cursor: pointer;

    :hover {
      color: #d5b8ff;
    }
`
