import { BrowserRouter } from 'react-router-dom'
import EstiloGlobal from './styles'

import Rotas from './routes'

function App() {
  return (
    <BrowserRouter>
      <EstiloGlobal />
      <Rotas />
    </BrowserRouter>
  )
}

export default App
