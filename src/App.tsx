import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import EstiloGlobal from './styles'
import Home from './pages/Home'
import Perfil from './pages/Perfil'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/perfil',
    element: <Perfil />
  }
])

function App() {
  return (
    <>
      <EstiloGlobal />
      <RouterProvider router={rotas}></RouterProvider>
    </>
  )
}

export default App
