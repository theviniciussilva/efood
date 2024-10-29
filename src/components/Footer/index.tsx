import logo from '../../assets/images/logo.png'
import facebook from '../../assets/images/facebook-round-svgrepo-com 1.svg'
import instagram from '../../assets/images/instagram-round-svgrepo-com (1) 1.svg'
import twitter from '../../assets/images/twitter-2-svgrepo-com 1.svg'
import { Container, FooterDescricao, Social } from './styles'
import { Link } from 'react-router-dom'

const Footer = () => (
  <Container>
    <div>
      <Link to="/">
        <img src={logo} />
      </Link>
      <Social>
        <li>
          <a href="">
            <img src={instagram} />
          </a>
        </li>
        <li>
          <a href="">
            <img src={facebook} />
          </a>
        </li>
        <li>
          <a href="">
            <img src={twitter} />
          </a>
        </li>
      </Social>
      <FooterDescricao>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </FooterDescricao>
    </div>
  </Container>
)

export default Footer
