import Cardapio from '../../components/Cardapio'
import Footer from '../../components/Footer'
import HeaderRestaurante from '../../components/HeaderRestaurante'
import { useGetRestaurantesQuery } from '../../services/api'

export interface Restaurantes {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Cardapio[]
}
export interface Cardapio {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}
const Home = () => {
  const { data: produtos } = useGetRestaurantesQuery()

  return (
    <>
      <HeaderRestaurante />
      <Cardapio layout="primary" restaurantes={produtos} />
      <Footer />
    </>
  )
}

export default Home
