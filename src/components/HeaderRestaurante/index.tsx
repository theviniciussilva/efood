import { HeaderContainer, Imagem } from '../../styles'
import efood from '../../assets/images/logo.png'
import { HeaderText, NavBarRestaurante } from './styles'
import { Link } from 'react-router-dom'

const HeaderRestaurante = () => (
  <HeaderContainer>
    <NavBarRestaurante className="container">
      <Link to="/">
        <Imagem src={efood} />
      </Link>
      <HeaderText>
        Viva experiências gastronômicas <br />
        no conforto da sua casa
      </HeaderText>
    </NavBarRestaurante>
  </HeaderContainer>
)

export default HeaderRestaurante
