import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  padding: 10px;

`
export const InfoMessage = styled.p`
  font-family: 'bold';
  color: #8c34fc;
  text-align: center;
  margin-top: 10px;
`

export const CreateUserLink = styled(Link)`

  text-decoration: none;
  color: #bf55ec;
  cursor: pointer;
  :hover {
    color: #d5b8ff;
  }
`