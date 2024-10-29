import hero from '../../assets/images/hero.png'
import { Descricao, Imagem, Titulo } from './styles'

const Hero = () => (
  <Imagem style={{ backgroundImage: `url(${hero})` }}>
    <div className="container">
      <Descricao>Italiana</Descricao>
      <Titulo>La Dolce Vita Trattoria</Titulo>
    </div>
  </Imagem>
)

export default Hero
