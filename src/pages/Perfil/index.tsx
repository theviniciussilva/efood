import Cardapio, { pizzaMarguerita } from '../../components/Cardapio'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Hero from '../../components/Hero'

const Restaurantes = () => (
  <>
    <Header />
    <Hero />
    <Cardapio receita="pizza" produtos={pizzaMarguerita} />
    <Footer />
  </>
)

export default Restaurantes
