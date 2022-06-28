import { Route, Routes } from "react-router-dom"
import ProtectedRoute from "./components/ProtectedRoute"
import { UserContextProvider } from "./context/UserContext"
import CreateUser from "./pages/CreateUser"
import Home from "./pages/Home"
import Login from "./pages/Login"

const App = () => {
  return (

  //Fazer as rotas como se todas fossem públicas  
    <UserContextProvider>
      <Routes>
        <Route index element={<Login />} />
        <Route path="login" element={<Login />}/>
        <Route path="home" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } />
        <Route path='createUser' element={<CreateUser />} />
      </Routes>
    </UserContextProvider>
  )
}

export default App