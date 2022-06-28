import { RouteObject } from 'react-router-dom'
import Crypto from '../pages/Crypto'
import Home from '../pages/Home'


const routes: RouteObject[] = [
  {
    path: '/', 
    element: <Home />
  },
  {
    path: '/crypto/:id/:name/:currency',
    element: <Crypto />
  }
]

export default routes