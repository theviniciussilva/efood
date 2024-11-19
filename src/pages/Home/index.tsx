import { useEffect, useState } from 'react'
import Cardapio from '../../components/Cardapio'
import Footer from '../../components/Footer'
import HeaderRestaurante from '../../components/HeaderRestaurante'

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
  const [produtos, setProdutos] = useState<Restaurantes[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setProdutos(res))
  }, [])

  return (
    <>
      <HeaderRestaurante />
      <Cardapio layout="primary" restaurantes={produtos} />
      <Footer />
    </>
  )
}

export default Home
