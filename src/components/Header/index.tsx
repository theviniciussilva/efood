import efood from '../../assets/images/logo.png'
import { HeaderContainer, Imagem, NavBar } from '../../styles'
import { LinkItem } from './styles'
import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()

  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
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
            <LinkItem onClick={openCart} to="#">
              {items.length} produto(s) no carrinho
            </LinkItem>
          </li>
        </NavBar>
      </HeaderContainer>
    </>
  )
}

export default Header
