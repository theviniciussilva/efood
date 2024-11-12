import efood from '../../assets/images/logo.png'
import { HeaderContainer, Imagem, NavBar } from '../../styles'
import { LinkItem } from './styles'

const Header = () => (
  <>
    <HeaderContainer>
      <NavBar className="container">
        <li>
          <LinkItem to="/">Restaurantes</LinkItem>
        </li>
        <li>
          <LinkItem to="/">
            <Imagem src={efood} alt="logo efood" />
          </LinkItem>
        </li>
        <li>
          <LinkItem to="#">0 produto(s) no carrinho</LinkItem>
        </li>
      </NavBar>
    </HeaderContainer>
  </>
)

export default Header
