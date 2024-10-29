import Cardapio, { pizzaMarguerita } from '../../components/Cardapio'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Hero from '../../components/Hero'

const Home = () => (
  <>
    <Header />
    <Hero />
    <Cardapio receita="pizza" produtos={pizzaMarguerita} />
    <Footer />
  </>
)

export default Home
