import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import EstiloGlobal from './styles'
import Rotas from './routes'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <EstiloGlobal />
        <Rotas />
      </BrowserRouter>
    </Provider>
  )
}

export default App
