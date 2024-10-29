import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import EstiloGlobal from './styles'
import Home from './pages/Home'
import Restaurantes from './pages/Restaurantes'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/restaurantes',
    element: <Restaurantes />
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
