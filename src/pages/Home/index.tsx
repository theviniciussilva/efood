import Cardapio, { frutosDoMar } from '../../components/Cardapio'
import Footer from '../../components/Footer'
import HeaderRestaurante from '../../components/HeaderRestaurante'

const Home = () => (
  <>
    <HeaderRestaurante />
    <Cardapio receita="frutosMar" produtos={frutosDoMar} />
    <Footer />
  </>
)

export default Home
