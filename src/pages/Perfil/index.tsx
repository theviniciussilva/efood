import { useEffect, useState } from 'react'
import Cardapio from '../../components/Cardapio'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import { useParams } from 'react-router-dom'
import { Restaurantes } from '../Home'

const Perfil = () => {
  const { id } = useParams()

  const [produtos, setProdutos] = useState<Restaurantes>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setProdutos(res))
  }, [id])

  return (
    <>
      <Header />
      <Hero restaurante={produtos} />
      <Cardapio layout="secondary" comidas={produtos} />
      <Footer />
    </>
  )
}

export default Perfil
