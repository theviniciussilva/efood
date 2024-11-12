import { useEffect, useState } from 'react'
import Cardapio from '../../components/Cardapio'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import { Produtos } from '../Home'

const Restaurantes = () => {
  const [produtos, setProdutos] = useState<Produtos[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setProdutos(res))
  }, [])

  return (
    <>
      <Header />
      <Hero />
      <Cardapio layout="secondary" restaurantes={produtos} />
      <Footer />
    </>
  )
}

export default Restaurantes
