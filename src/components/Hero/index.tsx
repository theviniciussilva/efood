import { Restaurantes } from '../../pages/Home'
import { Descricao, Imagem, Titulo } from './styles'

type Props = {
  restaurante?: Restaurantes
}

const Hero = ({ restaurante }: Props) => {
  return (
    <Imagem style={{ backgroundImage: `url(${restaurante?.capa})` }}>
      <div className="container">
        <Descricao>{restaurante?.descricao}</Descricao>
        <Titulo>{restaurante?.titulo}</Titulo>
      </div>
    </Imagem>
  )
}

export default Hero
