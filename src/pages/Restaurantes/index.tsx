import Cardapio, { frutosDoMar } from '../../components/Cardapio'
import Footer from '../../components/Footer'
import HeaderRestaurante from '../../components/HeaderRestaurante'

const Restaurantes = () => (
  <>
    <HeaderRestaurante />
    <Cardapio receita="frutosMar" produtos={frutosDoMar} />
    <Footer />
  </>
)

export default Restaurantes
