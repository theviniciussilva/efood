import Cardapio from '../../components/Cardapio'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import { useParams } from 'react-router-dom'
import { useGetPerfilQuery } from '../../services/api'
import Cart from '../../components/Cart'

type PerfilParams = {
  id: string
}

const Perfil = () => {
  const { id } = useParams() as PerfilParams
  const { data: produtos } = useGetPerfilQuery(id)

  return (
    <>
      <Header />
      <Hero restaurante={produtos} />
      <Cardapio layout="secondary" comidas={produtos} />
      <Cart />
      <Footer />
    </>
  )
}

export default Perfil
